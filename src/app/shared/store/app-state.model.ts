import { Plant } from 'src/app/shared/models/plant.model'

export interface AppState {
  plants: ReadonlyArray<Plant>
}
