import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [CommonModule],
  template: ` <button (click)="onClick()">戻る</button> `,
  styles: [],
})
export class OtherComponent {
  constructor(private location: Location) {}

  onClick(): void {
    this.location.back();
  }
}
