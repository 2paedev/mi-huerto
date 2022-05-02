import { Component, Input } from '@angular/core'
import { Plant } from 'src/app/shared/store/plant/plant.model'

@Component({
  selector: 'huerto-plants-panel',
  templateUrl: './plants-panel.component.html',
  styleUrls: ['./plants-panel.component.scss']
})
export class PlantsPanelComponent {
  @Input() selectedPlant: Plant
}
