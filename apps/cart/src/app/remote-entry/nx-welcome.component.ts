import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from '@org/ui';
import { UserService } from '@org/shared-data';

@Component({
  selector: 'org-nx-welcome',
  standalone: true,
  imports: [CommonModule,UiComponent],
  template: `
    <div style="display: flex; align-items: center; justify-content: center; flex-direction: column;"> 
    <h1>CART REMOTE APP</h1>
    
    cartIsLoggedIn: {{ isLoggedIn }}
   
    <org-ui label="cart but" /> 
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  private readonly userService = inject(UserService);
  get isLoggedIn(){
    return this.userService.isLoggedIn;
  }
}