import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
  <app-header />
  <main>
    <router-outlet />
  </main>
  <app-footer />`,
  styles: [
    `
      main {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }
    `
  ]
})
export class AppComponent {
  title = 'my-testing';
}
