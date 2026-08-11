<div class="layout-application-hub">
  <header class="app-bar">
    <span class="app-bar__brand">BMCI - Agence</span>
  </header>

  <main>
    <form [formGroup]="form" class="demande-fonds-body" (ngSubmit)="submit()">
      <!-- ================= En-tête de page ================= -->
      <div class="page-head">
        <h2 class="page-title">Gestion des fonds – Vue Agence</h2>

        <label class="urgent-flag">
          Demande Urgente
          <mat-checkbox formControlName="urgent"></mat-checkbox>
        </label>
      </div>

      <div class="board">
        <!-- ============================================================
             COLONNE GAUCHE
             ============================================================ -->
        <div class="board__col board__col--main">
          <!-- ---------- Alimentation Caisse (MAD) ---------- -->
          <mat-card class="section-card" formGroupName="caisse">
            <div class="section-header">
              <mat-icon>payments</mat-icon>
              <h3>Alimentation Caisse (MAD)</h3>
            </div>

            <div class="coupures-columns">
              <!-- Billets -->
              <div class="coupures-col" formArrayName="billets">
                <span class="coupures-col__label">Billets</span>

                <div
                  class="coupure-row"
                  *ngFor="let ligne of billets.controls; let i = index"
                  [formGroupName]="i"
                >
                  <span class="coupure-row__valeur">
                    {{ ligne.get('valeur')?.value }} x
                  </span>
                  <input
                    class="coupure-row__input"
                    type="number"
                    min="0"
                    step="1"
                    formControlName="quantite"
                    [attr.aria-label]="'Quantité billets de ' + ligne.get('valeur')?.value"
                  />
                </div>
              </div>

              <!-- Pièces -->
              <div class="coupures-col" formArrayName="pieces">
                <span class="coupures-col__label">Pièces</span>

                <div
                  class="coupure-row"
                  *ngFor="let ligne of pieces.controls; let i = index"
                  [formGroupName]="i"
                >
                  <span class="coupure-row__valeur">
                    {{ ligne.get('valeur')?.value }} x
                  </span>
                  <input
                    class="coupure-row__input"
                    type="number"
                    min="0"
                    step="1"
                    formControlName="quantite"
                    [attr.aria-label]="'Quantité pièces de ' + ligne.get('valeur')?.value"
                  />
                </div>
              </div>
            </div>

            <div class="totaux-row">
              <div class="total-badge">
                <span class="total-badge__label">Total Saisi</span>
                <strong class="total-badge__value">
                  {{ totalCaisse | number: '1.2-2' }} MAD
                </strong>
              </div>
            </div>
          </mat-card>

          <!-- ---------- Commande Devises ---------- -->
          <mat-card class="section-card" formGroupName="commandeDevises">
            <div class="section-header">
              <mat-icon>currency_exchange</mat-icon>
              <h3>Commande Devises</h3>
            </div>

            <div class="saisie-devise">
              <mat-form-field appearance="outline" class="saisie-devise__select">
                <mat-label>Devise</mat-label>
                <mat-select formControlName="deviseCode">
                  <mat-option
                    *ngFor="let d of devises"
                    [value]="d.code"
                  >
                    {{ d.code }} – {{ d.libelle }}
                  </mat-option>
                </mat-select>
              </mat-form-field>

              <mat-form-field appearance="outline" class="saisie-devise__montant">
                <mat-label>Montant Saisi</mat-label>
                <input matInput type="number" min="0" formControlName="montant" />
              </mat-form-field>

              <button
                mat-flat-button
                color="primary"
                type="button"
                class="saisie-devise__action"
                [disabled]="!peutAjouterCommandeDevise"
                (click)="ajouterCommandeDevise()"
              >
                Ajouter
              </button>
            </div>

            <table class="lignes-table" formArrayName="lignes">
              <thead>
                <tr>
                  <th scope="col">Devise</th>
                  <th scope="col" class="is-numeric">Montant Saisi</th>
                  <th scope="col" class="is-action">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  *ngFor="let ligne of commandeDeviseLignes.controls; let i = index"
                  [formGroupName]="i"
                >
                  <td>
                    {{ ligne.get('deviseCode')?.value }} –
                    {{ libelleDevise(ligne.get('deviseCode')?.value) }}
                  </td>
                  <td class="is-numeric">
                    {{ ligne.get('montant')?.value | number: '1.2-2' }}
                  </td>
                  <td class="is-action">
                    <button
                      mat-icon-button
                      type="button"
                      color="warn"
                      (click)="supprimerCommandeDevise(i)"
                      [attr.aria-label]="'Supprimer la ligne ' + ligne.get('deviseCode')?.value"
                    >
                      <mat-icon>delete</mat-icon>
                    </button>
                  </td>
                </tr>

                <tr *ngIf="!commandeDeviseLignes.length" class="lignes-table__empty">
                  <td colspan="3">Aucune devise commandée pour le moment.</td>
                </tr>
              </tbody>
            </table>
          </mat-card>

          <!-- ---------- Commentaire Global ---------- -->
          <mat-card class="section-card">
            <div class="section-header">
              <mat-icon>notes</mat-icon>
              <h3>Commentaire Global</h3>
            </div>

            <mat-form-field appearance="outline" class="full-width">
              <textarea
                matInput
                rows="3"
                formControlName="commentaire"
                placeholder="Instructions spécifiques ou observations"
              ></textarea>
            </mat-form-field>
          </mat-card>
        </div>

        <!-- ============================================================
             COLONNE DROITE
             ============================================================ -->
        <div class="board__col board__col--side">
          <!-- ---------- Alimentation GAB ---------- -->
          <mat-card class="section-card" formGroupName="gab">
            <div class="section-header">
              <mat-icon>atm</mat-icon>
              <h3>Alimentation GAB</h3>
            </div>

            <div class="cassettes" formArrayName="cassettes">
              <div
                class="cassette-row"
                *ngFor="let cassette of cassettes.controls; let i = index"
                [formGroupName]="i"
              >
                <span class="cassette-row__libelle">
                  {{ cassette.get('valeur')?.value }} (Cassette {{ i + 1 }})
                </span>
                <input
                  class="cassette-row__input"
                  type="number"
                  min="0"
                  step="1"
                  formControlName="quantite"
                  [attr.aria-label]="'Quantité cassette ' + (i + 1)"
                />
              </div>
            </div>

            <div class="section-total">
              <span>Total GAB</span>
              <strong>{{ totalGab | number: '1.2-2' }} MAD</strong>
            </div>
          </mat-card>

          <!-- ---------- Ramassage ---------- -->
          <mat-card class="section-card" formGroupName="ramassage">
            <div class="section-header">
              <mat-icon>local_shipping</mat-icon>
              <h3>Ramassage</h3>
            </div>

            <div class="saisie-ramassage">
              <mat-form-field appearance="outline" class="saisie-ramassage__select">
                <mat-select formControlName="deviseCode">
                  <mat-option
                    *ngFor="let d of devises"
                    [value]="d.code"
                  >
                    {{ d.code }}
                  </mat-option>
                </mat-select>
              </mat-form-field>

              <mat-form-field appearance="outline" class="saisie-ramassage__montant">
                <mat-label>Montant</mat-label>
                <input matInput type="number" min="0" formControlName="montant" />
              </mat-form-field>
            </div>

            <button
              mat-stroked-button
              type="button"
              class="full-width"
              [disabled]="!peutAjouterRamassage"
              (click)="ajouterLigneRamassage()"
            >
              <mat-icon>add</mat-icon>
              Ajouter Ligne
            </button>

            <div class="lignes-list" formArrayName="lignes">
              <div
                class="ligne-item"
                *ngFor="let ligne of ramassageLignes.controls; let i = index"
                [formGroupName]="i"
              >
                <span class="ligne-item__devise">
                  {{ ligne.get('deviseCode')?.value }}
                </span>
                <span class="ligne-item__montant">
                  {{ ligne.get('montant')?.value | number: '1.2-2' }}
                </span>
                <button
                  mat-icon-button
                  type="button"
                  color="warn"
                  (click)="supprimerLigneRamassage(i)"
                  [attr.aria-label]="'Supprimer la collecte ' + ligne.get('deviseCode')?.value"
                >
                  <mat-icon>delete</mat-icon>
                </button>
              </div>

              <p class="lignes-list__empty" *ngIf="!ramassageLignes.length">
                Aucune collecte ajoutée.
              </p>
            </div>
          </mat-card>
        </div>
      </div>

      <!-- ================= Barre d'actions ================= -->
      <div class="actions-bar">
        <div class="total-general">
          Total GAB + Caisse + Ramassage :
          <strong>{{ montantTotalMad | number: '1.2-2' }} MAD</strong>
        </div>

        <div class="actions-bar__buttons">
          <button mat-button type="button" (click)="annuler()">Annuler</button>
          <button
            mat-flat-button
            color="primary"
            type="submit"
            [disabled]="(submitting$ | async) || form.invalid"
          >
            {{ (submitting$ | async) ? 'Envoi en cours…' : 'Soumettre' }}
          </button>
        </div>
      </div>
    </form>
  </main>
</div>


