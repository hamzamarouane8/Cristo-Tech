import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { DenominationService } from '../../services/denomination.service';
import { DeviseService } from '../../services/devise.service';
import { DemandeFondsService } from '../../services/demande-fonds.service';
import { Denomination, Devise, DemandeFondsPayload } from '../../models/operation.model';
import { auMoinsUneSectionRenseigneeValidator } from '../../validators/operation.validators';

@Component({
  selector: 'app-demande-fonds-body',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  templateUrl: './demande-fonds-body.component.html',
  styleUrls: ['./demande-fonds-body.component.scss'],
})
export class DemandeFondsBodyComponent implements OnInit {
  devisesDisponibles: Devise[] = [];
  submitting = false;

  // 4 sections fixes, conformes à l'écran de référence "Gestion des fonds" :
  // GAB et Caisse (grilles de coupures uniques), Ramassage (unique), Devises (liste répétable).
  form: FormGroup = this.fb.group(
    {
      gab: this.fb.group({
        urgent: [false],
        coupures: this.fb.array([]),
      }),
      caisse: this.fb.group({
        urgent: [false],
        coupures: this.fb.array([]),
      }),
      ramassage: this.fb.group({
        actif: [false],
        montant: [null],
        urgent: [false],
      }),
      devises: this.fb.array([]),
    },
    { validators: auMoinsUneSectionRenseigneeValidator() }
  );

  constructor(
    private fb: FormBuilder,
    private denominationService: DenominationService,
    private deviseService: DeviseService,
    private demandeFondsService: DemandeFondsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.deviseService.getDevises().subscribe((devises) => (this.devisesDisponibles = devises));
    this.denominationService.getDenominations('GAB').subscribe((denominations) => {
      this.gabCoupures.clear();
      denominations.forEach((d) => this.gabCoupures.push(this.creerLigneCoupure(d)));
    });
    this.denominationService.getDenominations('CAISSE').subscribe((denominations) => {
      this.caisseCoupures.clear();
      denominations.forEach((d) => this.caisseCoupures.push(this.creerLigneCoupure(d)));
    });

    // Une première ligne Devise est proposée par défaut, l'utilisateur peut l'ignorer (montant vide).
    this.ajouterDevise();
  }

  // --- Accès aux sous-groupes/tableaux ---

  get gabGroup(): FormGroup {
    return this.form.get('gab') as FormGroup;
  }

  get caisseGroup(): FormGroup {
    return this.form.get('caisse') as FormGroup;
  }

  get ramassageGroup(): FormGroup {
    return this.form.get('ramassage') as FormGroup;
  }

  get gabCoupures(): FormArray {
    return this.gabGroup.get('coupures') as FormArray;
  }

  get caisseCoupures(): FormArray {
    return this.caisseGroup.get('coupures') as FormArray;
  }

  get devises(): FormArray {
    return this.form.get('devises') as FormArray;
  }

  // --- Construction des lignes ---

  private creerLigneCoupure(d: Denomination): FormGroup {
    return this.fb.group({
      denominationId: [d.id],
      valeur: [d.valeur],
      libelle: [d.libelle],
      quantite: [0, [Validators.min(0)]],
    });
  }

  private creerLigneDevise(): FormGroup {
    const group = this.fb.group({
      deviseCode: [''],
      montant: [null],
      urgent: [false],
      motifUrgence: [''],
    });

    group.get('urgent')?.valueChanges.subscribe((urgent) => {
      const motif = group.get('motifUrgence');
      if (urgent) {
        motif?.setValidators([Validators.required]);
      } else {
        motif?.clearValidators();
        motif?.setValue('');
      }
      motif?.updateValueAndValidity({ emitEvent: false });
    });

    return group;
  }

  ajouterDevise(): void {
    this.devises.push(this.creerLigneDevise());
  }

  supprimerDevise(index: number): void {
    if (this.devises.length <= 1) {
      return;
    }
    this.devises.removeAt(index);
  }

  // --- Calculs de montants ---

  coupureMontant(row: AbstractControl): number {
    const valeur = row.get('valeur')?.value ?? 0;
    const quantite = row.get('quantite')?.value ?? 0;
    return valeur * quantite;
  }

  totalCoupures(coupures: FormArray): number {
    return coupures.controls.reduce((total, row) => total + this.coupureMontant(row), 0);
  }

  totalGab(): number {
    return this.totalCoupures(this.gabCoupures);
  }

  totalCaisse(): number {
    return this.totalCoupures(this.caisseCoupures);
  }

  montantTotalMad(): number {
    const ramassageMontant =
      this.ramassageGroup.get('actif')?.value ? this.ramassageGroup.get('montant')?.value ?? 0 : 0;
    return this.totalGab() + this.totalCaisse() + ramassageMontant;
  }

  // --- Soumission ---

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      const messages: string[] = [];
      if (this.form.errors?.['formulaireVide']) {
        messages.push('Veuillez renseigner au moins une section (GAB, Caisse, Ramassage ou Devise).');
      } else {
        messages.push("Veuillez corriger les champs en erreur avant d'envoyer.");
      }
      this.snackBar.open(messages.join(' '), 'Fermer', { duration: 4000 });
      return;
    }

    const payload: DemandeFondsPayload = {
      dateCreation: new Date().toISOString(),
      gab: {
        urgent: this.gabGroup.get('urgent')?.value ?? false,
        montantTotal: this.totalGab(),
        coupures: this.gabCoupures.controls
          .filter((row) => (row.get('quantite')?.value ?? 0) > 0)
          .map((row) => ({
            denominationId: row.get('denominationId')?.value,
            valeur: row.get('valeur')?.value,
            quantite: row.get('quantite')?.value,
            montant: this.coupureMontant(row),
          })),
      },
      caisse: {
        urgent: this.caisseGroup.get('urgent')?.value ?? false,
        montantTotal: this.totalCaisse(),
        coupures: this.caisseCoupures.controls
          .filter((row) => (row.get('quantite')?.value ?? 0) > 0)
          .map((row) => ({
            denominationId: row.get('denominationId')?.value,
            valeur: row.get('valeur')?.value,
            quantite: row.get('quantite')?.value,
            montant: this.coupureMontant(row),
          })),
      },
      ramassage: this.ramassageGroup.get('actif')?.value
        ? {
            actif: true,
            montant: this.ramassageGroup.get('montant')?.value ?? 0,
            urgent: this.ramassageGroup.get('urgent')?.value ?? false,
          }
        : null,
      devises: this.devises.controls
        .filter((row) => (row.get('montant')?.value ?? 0) > 0 && !!row.get('deviseCode')?.value)
        .map((row) => ({
          deviseCode: row.get('deviseCode')?.value,
          montant: row.get('montant')?.value,
          urgent: row.get('urgent')?.value ?? false,
          motifUrgence: row.get('urgent')?.value ? row.get('motifUrgence')?.value : undefined,
        })),
    };

    this.submitting = true;
    this.demandeFondsService.submitDemande(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.snackBar.open('Demande envoyée avec succès.', 'Fermer', { duration: 4000 });
      },
      error: () => {
        this.submitting = false;
        this.snackBar.open("Erreur lors de l'envoi de la demande.", 'Fermer', { duration: 4000 });
      },
    });
  }
}
