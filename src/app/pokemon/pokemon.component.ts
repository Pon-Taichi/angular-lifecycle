import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, MatListModule],
  template: `
    <p>selected: {{ pokemon ?? 'No Content' }}</p>
    <mat-list #history>
      <mat-list-item *ngFor="let poke of list">{{ poke }}</mat-list-item>
    </mat-list>
  `,
  styles: [],
})
export class PokemonComponent implements OnChanges {
  @Input() pokemon: string | undefined;
  list: string[] = [];

  ngOnChanges(): void {
    console.log('OnChanges');
    if (this.pokemon) this.list.push(this.pokemon);
  }
}
