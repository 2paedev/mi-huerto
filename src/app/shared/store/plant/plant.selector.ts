import { createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store'
import { Plant } from 'src/app/shared/models/plant.model'
import { AppState } from '../app-state.model'

const selectPlants = (state: AppState): ReadonlyArray<Plant> => state.plants

export const selectPlantById = (
  id: number
): MemoizedSelector<AppState, Plant, DefaultProjectorFn<Plant>> =>
  createSelector(selectPlants, (plants: ReadonlyArray<Plant>) => {
    return plants.filter(_ => _.id == id)[0]
  })

/*export const selectPlantById = (
  id: number
): MemoizedSelector<
  AppState,
  Plant | undefined,
  DefaultProjectorFn<Plant | undefined>
> =>
  createSelector(selectPlants, (allPlants: ReadonlyArray<Plant>) => {
    if (allPlants) {
      return allPlants.find((item) => {
        return item.id === id
      })
    } else {
      return undefined
    }
  })*/

export const selectAllPlants = createSelector(
  selectPlants,
  (plants: ReadonlyArray<Plant>) => plants
)
