import { Component, OnInit } from '@angular/core'
import { GLOBAL } from './shared/const/global'
import { LocalStorageService } from './shared/services/local-storage.service'
import { StyleManager } from './shared/services/style-manager.service'

@Component({
  selector: 'huerto-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  sidenavOpened = false
  isDarkTheme = this.styleManager.isDark

  constructor(
    private localStorageService: LocalStorageService,
    private styleManager: StyleManager
  ) {}

  ngOnInit(): void {
    console.log('hola')
    const isDarkTheme = this.localStorageService.getItem(GLOBAL.LOCAL_STORAGE.DARK_MODE)
    if (isDarkTheme) this.toggleDarkTheme(JSON.parse(isDarkTheme))
  }

  toggleSidenav(): void {
    this.sidenavOpened = !this.sidenavOpened
  }

  toggleDarkTheme(isDark: boolean) {
    this.localStorageService.setItem(GLOBAL.LOCAL_STORAGE.DARK_MODE, JSON.stringify(isDark))
    if (isDark !== this.isDarkTheme) {
      this.styleManager.toggleDarkTheme()
      this.isDarkTheme = !this.isDarkTheme
    }
  }
}
