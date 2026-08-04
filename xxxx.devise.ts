import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Devise } from '../models/operation.model';

@Injectable({ providedIn: 'root' })
export class DeviseService {
  private readonly apiUrl = `${environment.apiUrl}/devises`;

  // Repli utilisé tant que l'endpoint réel n'est pas disponible (dev/démo)
  private readonly mockDevises: Devise[] = [
    { code: 'EUR', libelle: 'Euro', symbole: '€' },
    { code: 'USD', libelle: 'Dollar US', symbole: '$' },
    { code: 'GBP', libelle: 'Livre Sterling', symbole: '£' },
    { code: 'CHF', libelle: 'Franc Suisse', symbole: 'CHF' },
  ];

  constructor(private http: HttpClient) {}

  getDevises(): Observable<Devise[]> {
    return this.http.get<Devise[]>(this.apiUrl).pipe(catchError(() => of(this.mockDevises)));
  }
}
