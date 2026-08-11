import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, OnInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl, FormArray, FormBuilder, FormGroup,
  ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators
} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { FunManagementFacade } from '../../../../adapters/localstate/fundmanagement.facade';
import { Denomination, Devise } from '../../../../domain/domain-core/entities/operation.model';

/** Seuil MAD : au-dessus (>= 20) on est sur des billets, en dessous sur des pièces. */
const SEUIL_BILLET = 20;

@Component({
  selector: 'app-application-hub',
  standalone: true,
  imports: [
    CommonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatCardModule, MatSelectModule, MatButtonModule, MatIconModule,
    MatSnackBarModule, ReactiveFormsModule
  ],
  templateUrl: './fund-management.component.html',
  styleUrl: './fund-management.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FundManagementComponent implements OnInit {

  devisesDisponibles: Devise[] = [];
  submitting = false;

  /** Index des coupures caisse à afficher dans la colonne Billets / Pièces. */
  indexesBillets: number[] = [];
  indexesPieces: number[] = [];

  form: FormGroup = this.fb.group(
    {
      urgent: [false],

      gab: this.fb.group({
        coupures: this.fb.array([])
      }),

      caisse: this.fb.group({
        coupures: this.fb.array([])
      }),

      ramassage: this.fb.group({
        deviseCode: ['MAD'],
        montant: [null as number | null, [Validators.min(0)]],
        lignes: this.fb.array([])
      }),

      commandeDevises: this.fb.group({
        deviseCode: [''],
        montant: [null as number | null, [Validators.min(0)]],
        lignes: this.fb.array([])
      }),

      commentaire: ['']
    },
    { validators: auMoinsUneSectionRenseigneeValidator() }
  );

  constructor(
    private fb: FormBuilder,
    public facade: FunManagementFacade,
    private snackBar: MatSnackBar,
    private cdr: ChangeDetectorRef
  ) {
    effect(() => {
      const coupuresCaisse = this.facade.coupuresCaisse();
      const coupuresGab = this.facade.coupuresGab();

      this.devisesDisponibles = this.facade.devises();

      this.gabCoupures.clear();
      this.caisseCoupures.clear();

      coupuresGab.forEach(c => this.gabCoupures.push(this.creerLigneCoupure(c)));
      coupuresCaisse.forEach(c => this.caisseCoupures.push(this.creerLigneCoupure(c)));

      this.repartirCoupuresCaisse();

      // Devise par défaut de la commande devises, dès que le référentiel est là.
      if (!this.commandeDevisesGroup.get('deviseCode')?.value && this.devisesDisponibles.length) {
        const parDefaut = this.devisesDisponibles.find(d => d.code !== 'MAD')
          ?? this.devisesDisponibles[0];
        this.commandeDevisesGroup.patchValue(
          { deviseCode: parDefaut.code },
          { emitEvent: false }
        );
      }

      this.cdr.markForCheck();
    });

    effect(() => {
      const success = this.facade.success();
      const erreur = this.facade.error();

      if (success) {
        this.submitting = false;
        this.snackBar.open('Demande envoyée avec succès.', 'Fermer', { duration: 4000 });
      }

      if (erreur) {
        this.submitting = false;
        this.snackBar.open("Erreur lors de l'envoi de la demande.", 'Fermer', { duration: 4000 });
      }

      this.cdr.markForCheck();
    });
  }

  ngOnInit(): void {
    this.facade.loadCoupures();
    this.facade.loadDevises();
  }

  // ----------------------------------------------------------------
  // Accès aux groupes / tableaux
  // ----------------------------------------------------------------
  get gabGroup(): FormGroup { return this.form.get('gab') as FormGroup; }
  get caisseGroup(): FormGroup { return this.form.get('caisse') as FormGroup; }
  get ramassageGroup(): FormGroup { return this.form.get('ramassage') as FormGroup; }
  get commandeDevisesGroup(): FormGroup { return this.form.get('commandeDevises') as FormGroup; }

  get gabCoupures(): FormArray { return this.gabGroup.get('coupures') as FormArray; }
  get caisseCoupures(): FormArray { return this.caisseGroup.get('coupures') as FormArray; }
  get ramassageLignes(): FormArray { return this.ramassageGroup.get('lignes') as FormArray; }
  get commandeDeviseLignes(): FormArray { return this.commandeDevisesGroup.get('lignes') as FormArray; }

  // ----------------------------------------------------------------
  // Totaux
  // ----------------------------------------------------------------
  coupureMontant(row: AbstractControl): number {
    const valeur = Number(row.get('valeur')?.value ?? 0);
    const quantite = Number(row.get('quantite')?.value ?? 0);
    return valeur * quantite;
  }

  totalCoupures(coupures: FormArray): number {
    return coupures.controls.reduce((total, row) => total + this.coupureMontant(row), 0);
  }

  totalGab(): number { return this.totalCoupures(this.gabCoupures); }
  totalCaisse(): number { return this.totalCoupures(this.caisseCoupures); }

  /** Seules les collectes en MAD entrent dans le total général. */
  totalRamassageMad(): number {
    return this.ramassageLignes.controls
      .filter(l => l.get('deviseCode')?.value === 'MAD')
      .reduce((total, l) => total + Number(l.get('montant')?.value ?? 0), 0);
  }

  montantTotalMad(): number {
    return this.totalGab() + this.totalCaisse() + this.totalRamassageMad();
  }

  // ----------------------------------------------------------------
  // Ramassage
  // ----------------------------------------------------------------
  get peutAjouterRamassage(): boolean {
    return !!this.ramassageGroup.get('deviseCode')?.value
      && Number(this.ramassageGroup.get('montant')?.value) > 0;
  }

  ajouterLigneRamassage(): void {
    if (!this.peutAjouterRamassage) { return; }

    this.ramassageLignes.push(this.creerLigneDevise(
      this.ramassageGroup.get('deviseCode')!.value,
      Number(this.ramassageGroup.get('montant')!.value)
    ));

    this.ramassageGroup.patchValue({ montant: null });
    this.form.updateValueAndValidity();
  }

  supprimerLigneRamassage(index: number): void {
    this.ramassageLignes.removeAt(index);
    this.form.updateValueAndValidity();
  }

  // ----------------------------------------------------------------
  // Commande devises
  // ----------------------------------------------------------------
  get peutAjouterCommandeDevise(): boolean {
    return !!this.commandeDevisesGroup.get('deviseCode')?.value
      && Number(this.commandeDevisesGroup.get('montant')?.value) > 0;
  }

  ajouterCommandeDevise(): void {
    if (!this.peutAjouterCommandeDevise) { return; }

    this.commandeDeviseLignes.push(this.creerLigneDevise(
      this.commandeDevisesGroup.get('deviseCode')!.value,
      Number(this.commandeDevisesGroup.get('montant')!.value)
    ));

    this.commandeDevisesGroup.patchValue({ montant: null });
    this.form.updateValueAndValidity();
  }

  supprimerCommandeDevise(index: number): void {
    this.commandeDeviseLignes.removeAt(index);
    this.form.updateValueAndValidity();
  }

  libelleDevise(code: string): string {
    return this.devisesDisponibles.find(d => d.code === code)?.libelle ?? code;
  }

  // ----------------------------------------------------------------
  // Soumission
  // ----------------------------------------------------------------
  annuler(): void {
    this.form.reset({ urgent: false, commentaire: '' });

    [this.gabCoupures, this.caisseCoupures].forEach(arr =>
      arr.controls.forEach(row => row.patchValue({ quantite: 0 }))
    );

    this.ramassageLignes.clear();
    this.commandeDeviseLignes.clear();
    this.ramassageGroup.patchValue({ deviseCode: 'MAD', montant: null });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();

      const message = this.form.errors?.['formulaireVide']
        ? 'Veuillez renseigner au moins une section (GAB, Caisse, Ramassage ou Devise).'
        : "Veuillez corriger les champs en erreur avant d'envoyer.";

      this.snackBar.open(message, 'Fermer', { duration: 4000 });
      return;
    }

    this.submitting = true;
    this.facade.envoyerDemande(this.buildPayload()); // ← adapter au nom réel de ta facade
  }

  private buildPayload(): any {
    const urgent = this.form.get('urgent')?.value ?? false;

    return {
      dateCreation: new Date().toISOString(),
      urgent,
      commentaire: this.form.get('commentaire')?.value ?? '',

      gab: {
        montantTotal: this.totalGab(),
        cassettes: this.gabCoupures.controls
          .map((row, index) => ({
            numeroCassette: index + 1,
            denominationId: row.get('denominationId')?.value,
            valeur: row.get('valeur')?.value,
            quantite: Number(row.get('quantite')?.value ?? 0),
            montant: this.coupureMontant(row)
          }))
          .filter(c => c.quantite > 0)
      },

      caisse: {
        montantTotal: this.totalCaisse(),
        coupures: this.caisseCoupures.controls
          .filter(row => Number(row.get('quantite')?.value ?? 0) > 0)
          .map(row => ({
            denominationId: row.get('denominationId')?.value,
            valeur: row.get('valeur')?.value,
            quantite: Number(row.get('quantite')?.value),
            montant: this.coupureMontant(row)
          }))
      },

      ramassage: this.ramassageLignes.controls.map(l => ({
        deviseCode: l.get('deviseCode')?.value,
        montant: Number(l.get('montant')?.value ?? 0)
      })),

      commandeDevises: this.commandeDeviseLignes.controls.map(l => ({
        deviseCode: l.get('deviseCode')?.value,
        montant: Number(l.get('montant')?.value ?? 0)
      })),

      montantTotalMad: this.montantTotalMad()
    };
  }

  // ----------------------------------------------------------------
  // Helpers privés
  // ----------------------------------------------------------------
  private creerLigneCoupure(d: Denomination): FormGroup {
    return this.fb.group({
      denominationId: [d.id],
      valeur: [d.valeur],
      libelle: [d.libelle],
      quantite: [0, [Validators.min(0)]]
    });
  }

  private creerLigneDevise(deviseCode: string, montant: number): FormGroup {
    return this.fb.group({
      deviseCode: [deviseCode, Validators.required],
      montant: [montant, [Validators.required, Validators.min(0)]]
    });
  }

  /** Répartit les coupures caisse entre la colonne Billets et la colonne Pièces. */
  private repartirCoupuresCaisse(): void {
    this.indexesBillets = [];
    this.indexesPieces = [];

    this.caisseCoupures.controls.forEach((row, index) => {
      const valeur = Number(row.get('valeur')?.value ?? 0);
      (valeur >= SEUIL_BILLET ? this.indexesBillets : this.indexesPieces).push(index);
    });
  }
}

/** Le formulaire doit contenir au moins une saisie utile. */
export function auMoinsUneSectionRenseigneeValidator(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    const quantiteRenseignee = (chemin: string) =>
      ((form.get(chemin) as FormArray | null)?.controls ?? [])
        .some(row => Number(row.get('quantite')?.value ?? 0) > 0);

    const listeNonVide = (chemin: string) =>
      ((form.get(chemin) as FormArray | null)?.length ?? 0) > 0;

    const rempli =
      quantiteRenseignee('gab.coupures') ||
      quantiteRenseignee('caisse.coupures') ||
      listeNonVide('ramassage.lignes') ||
      listeNonVide('commandeDevises.lignes');

    return rempli ? null : { formulaireVide: true };
  };
}
