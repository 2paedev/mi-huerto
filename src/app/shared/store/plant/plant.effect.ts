import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { map, mergeMap } from 'rxjs/operators'
import { CompanionPlantingService } from 'src/app/pages/companion-planting/companion-planting.service'
import { PLANT_API } from 'src/app/shared/const/store'

@Injectable()
export class PlantEffect {
  constructor(
    private actions$: Actions,
    private companionPlantingService: CompanionPlantingService
  ) {}

  loadPlants$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PLANT_API.INVOKE),
      mergeMap(() =>
        this.companionPlantingService.loadPlants().pipe(
          map(data => ({
            type: PLANT_API.RETRIEVE,
            plants: data
          }))
        )
      )
    )
  )
}
