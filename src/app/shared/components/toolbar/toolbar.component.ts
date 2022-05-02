import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'huerto-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() dark = new EventEmitter<boolean>()
  @Output() sidenav = new EventEmitter<void>()

  setDarkTheme(isDark: boolean): void {
    this.dark.emit(isDark)
  }

  toggleSidenav(): void {
    this.sidenav.emit()
  }
}
