import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Product Remote App</h1>
  post deploy
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
