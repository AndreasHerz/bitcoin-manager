import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bitcoin-manager';

  constructor() {
    this.toggleDarkTheme();
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
