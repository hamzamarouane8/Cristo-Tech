import { AbstractControl, FormArray, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Valide qu'au moins une ligne de coupure a une quantité > 0.
 * Optionnel : à appliquer seulement si une section GAB/Caisse doit être obligatoirement remplie.
 * Par défaut ces sections sont facultatives (voir auMoinsUneSectionRenseigneeValidator).
 */
export function atLeastOneCoupureValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const array = control as FormArray;
    const hasQuantite = array.controls.some((c) => (c.get('quantite')?.value ?? 0) > 0);
    return hasQuantite ? null : { aucuneCoupure: true };
  };
}

/**
 * Valide, au niveau du formulaire global, qu'au moins une des 4 sections (GAB, Caisse,
 * Ramassage, Devises) contient réellement une demande, pour éviter un envoi totalement vide.
 */
export function auMoinsUneSectionRenseigneeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const form = control as FormGroup;

    const gabCoupures = form.get('gab.coupures') as FormArray | null;
    const gabRenseigne = !!gabCoupures?.controls.some((c) => (c.get('quantite')?.value ?? 0) > 0);

    const caisseCoupures = form.get('caisse.coupures') as FormArray | null;
    const caisseRenseigne = !!caisseCoupures?.controls.some((c) => (c.get('quantite')?.value ?? 0) > 0);

    const ramassageActif = !!form.get('ramassage.actif')?.value;
    const ramassageMontant = form.get('ramassage.montant')?.value ?? 0;
    const ramassageRenseigne = ramassageActif && ramassageMontant > 0;

    const devises = form.get('devises') as FormArray | null;
    const devisesRenseignees = !!devises?.controls.some(
      (c) => (c.get('montant')?.value ?? 0) > 0 && !!c.get('deviseCode')?.value
    );

    const auMoinsUne = gabRenseigne || caisseRenseigne || ramassageRenseigne || devisesRenseignees;
    return auMoinsUne ? null : { formulaireVide: true };
  };
}
