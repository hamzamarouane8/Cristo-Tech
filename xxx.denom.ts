import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { CanalCoupure, Denomination } from '../models/operation.model';

@Injectable({ providedIn: 'root' })
export class DenominationService {
  private readonly apiUrl = `${environment.apiUrl}/denominations`;

  // Replis utilisés tant que l'endpoint réel n'est pas disponible (dev/démo).
  // GAB : uniquement les coupures distribuables par l'automate.
  private readonly mockDenominationsGab: Denomination[] = [
    { id: 1, valeur: 200, libelle: '200 DH' },
    { id: 2, valeur: 100, libelle: '100 DH' },
  ];

  // Caisse : gamme complète billets + pièces.
  private readonly mockDenominationsCaisse: Denomination[] = [
    { id: 1, valeur: 200, libelle: '200 DH' },
    { id: 2, valeur: 100, libelle: '100 DH' },
    { id: 3, valeur: 50, libelle: '50 DH' },
    { id: 4, valeur: 20, libelle: '20 DH' },
    { id: 5, valeur: 10, libelle: '10 DH' },
    { id: 6, valeur: 5, libelle: '5 DH' },
    { id: 7, valeur: 2, libelle: '2 DH' },
    { id: 8, valeur: 1, libelle: '1 DH' },
    { id: 9, valeur: 0.5, libelle: '0.5 DH' },
    { id: 10, valeur: 0.2, libelle: '0.2 DH' },
    { id: 11, valeur: 0.1, libelle: '0.1 DH' },
    { id: 12, valeur: 0.05, libelle: '0.05 DH' },
  ];

  constructor(private http: HttpClient) {}

  /**
   * Récupère la liste des coupures disponibles pour un canal donné (GAB ou CAISSE),
   * le backend pouvant gérer des jeux de coupures différents selon le canal.
   */
  getDenominations(canal: CanalCoupure): Observable<Denomination[]> {
    const params = new HttpParams().set('canal', canal);
    const mock = canal === 'GAB' ? this.mockDenominationsGab : this.mockDenominationsCaisse;
    return this.http.get<Denomination[]>(this.apiUrl, { params }).pipe(catchError(() => of(mock)));
  }
}
