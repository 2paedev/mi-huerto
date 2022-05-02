import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Plant } from 'src/app/shared/store/plant/plant.model'
import { selectPlantById } from 'src/app/shared/store/plant/plant.selector'

@Component({
  selector: 'huerto-plants-group',
  templateUrl: './plants-group.component.html',
  styleUrls: ['./plants-group.component.scss']
})
export class PlantsGroupComponent {
  @Input() title: string
  @Input() plants?: Array<number>

  constructor(private store: Store<{ plants: Plant[] }>) {}

  getPlant(id: number): Observable<Plant> | undefined {
    return this.store.select(selectPlantById(id))
  }
}
