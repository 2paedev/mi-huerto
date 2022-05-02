import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'huerto-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() open = false
  @Output() backdropClick = new EventEmitter<void>()

  backdropAction(): void {
    this.backdropClick.emit()
  }
}
