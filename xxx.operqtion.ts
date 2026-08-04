/**
 * Modèle basé sur l'écran de référence "Gestion des fonds" (agence) :
 * 4 sections fixes toujours visibles : GAB, Caisse MAD, Demande de Ramassage, Devise.
 * GAB / Caisse / Ramassage : une seule occurrence chacune.
 * Devise : liste répétable (plusieurs lignes montant + devise via le bouton "Ajouter").
 */

export type CanalCoupure = 'GAB' | 'CAISSE';

export interface Denomination {
  id: number;
  valeur: number; // 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05...
  libelle: string; // "200 DH"
}

export interface Devise {
  code: string; // EUR, USD, AED...
  libelle: string; // Euro
  symbole?: string;
}

export interface CoupureLigneDTO {
  denominationId: number;
  valeur: number;
  quantite: number;
  montant: number;
}

export interface SectionCoupuresDTO {
  urgent: boolean;
  montantTotal: number;
  coupures: CoupureLigneDTO[]; // uniquement les lignes avec quantite > 0
}

export interface RamassageDTO {
  actif: boolean; // case "Ramassage" cochée = demande de collection soumise
  montant: number;
  urgent: boolean;
}

export interface DeviseLigneDTO {
  deviseCode: string;
  montant: number;
  urgent: boolean;
  motifUrgence?: string;
}

export interface DemandeFondsPayload {
  dateCreation: string;
  gab: SectionCoupuresDTO;
  caisse: SectionCoupuresDTO;
  ramassage: RamassageDTO | null; // null si la case "Ramassage" n'est pas cochée
  devises: DeviseLigneDTO[];
}
