import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiComponent } from  "@org/ui"

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'org-cart-entry',
  template: `<org-nx-welcome></org-nx-welcome>`,
})
export class RemoteEntryComponent {}
