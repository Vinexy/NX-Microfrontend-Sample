import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiComponent } from "@org/ui"
import { UserService } from "@org/shared-data"

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiComponent], 
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'host';

  private readonly userService = inject(UserService);

  get isLoggedIn(){
    return this.userService.isLoggedIn;
  }

  simulateLogin(){
    this.userService.login();
  }

  simulateLogout(){
    this.userService.logout();
  }
}
