import { createReducer, on } from '@ngrx/store'
import { Plant } from 'src/app/shared/models/plant.model'
import { retrievedPlantsList } from './plant.action'

export const plantsFeatureKey = 'plants'

const initialState: ReadonlyArray<Plant> = []

export const reducer = createReducer(
  initialState,
  on(retrievedPlantsList, (_state, { plants }) => plants)
)
