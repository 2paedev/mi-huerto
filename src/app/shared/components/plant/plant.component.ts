import { Component, Input } from '@angular/core'

@Component({
  selector: 'huerto-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent {
  @Input() imageUrl?: string
  @Input() name?: string
  @Input() outlined = false
  @Input() fontClass?: string
}
