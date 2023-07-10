import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, MatSelectModule],
  template: `
    <mat-form-field>
      <mat-label>Pokemon</mat-label>
      <mat-select
        #selectedPokemon
        (valueChange)="this.selectPokemon.emit(selectedPokemon.value)"
      >
        <mat-option *ngFor="let pokemon of pokeList" [value]="pokemon">
          {{ pokemon }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
  styles: [],
})
export class SelectComponent {
  @Input() pokeList: string[] = [];
  @Output() selectPokemon = new EventEmitter<string>();
}
