import { createAction, props } from '@ngrx/store'
import { PLANT_API } from 'src/app/shared/const/store'
import { Plant } from 'src/app/shared/models/plant.model'

export const invokePlantAPI = createAction(PLANT_API.INVOKE)

export const retrievedPlantsList = createAction(
  PLANT_API.RETRIEVE,
  props<{ plants: ReadonlyArray<Plant> }>()
)
