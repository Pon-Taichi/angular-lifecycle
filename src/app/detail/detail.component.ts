import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <h2>Detail</h2>
      </mat-card-header>
      <mat-card-content>
        <ng-content select="[name]"></ng-content>
        <p>日本語</p>
        <ng-content select="[ja]"></ng-content>
      </mat-card-content>
    </mat-card>
  `,
  styles: [],
})
export class DetailComponent {}
