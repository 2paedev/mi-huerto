import { Component, Input } from '@angular/core'

@Component({
  selector: 'huerto-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent {
  @Input() text: string | undefined
}
