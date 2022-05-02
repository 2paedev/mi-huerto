import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { INFO_PANEL } from 'src/app/shared/const/info-panels'
import { Plant } from 'src/app/shared/models/plant.model'
import { invokePlantAPI } from 'src/app/shared/store/plant/plant.action'
import { selectAllPlants } from 'src/app/shared/store/plant/plant.selector'

@Component({
  selector: 'huerto-companion-planting',
  templateUrl: './companion-planting.component.html'
})
export class CompanionPlantingComponent implements OnInit {
  selectedPlant: Plant
  allPlants$: Observable<ReadonlyArray<Plant>>

  get infoPanelText(): string {
    return INFO_PANEL.COMPANION_PLANTING
  }

  constructor(private store: Store<{ plants: Plant[] }>) {
    this.allPlants$ = this.store.select(selectAllPlants)
  }

  ngOnInit(): void {
    this.store.dispatch(invokePlantAPI())
  }

  setSelectedPlant(plant: Plant): void {
    this.selectedPlant = plant
  }
}
