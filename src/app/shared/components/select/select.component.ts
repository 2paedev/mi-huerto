import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core'
import { Observable } from 'rxjs'
import { Plant } from 'src/app/shared/store/plant/plant.model'

@Component({
  selector: 'huerto-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent {
  @Input() data: Observable<ReadonlyArray<Plant>>
  @Output() selected = new EventEmitter<Plant>()

  option: Plant

  plantChange(plant: Plant): void {
    this.option = plant
    this.selected.emit(plant)
  }
}
