import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'huerto-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  sidenavOpened = false;
  isDarkTheme = false;

  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('dark-theme');
  }

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

  setTheme(isDark: boolean): void {
    this.isDarkTheme = isDark;
  }
}
