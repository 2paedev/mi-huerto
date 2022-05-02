import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { SharedModule } from 'src/app/shared/shared-components.module'
import { PlantEffect } from 'src/app/shared/store/plant/plant.effect'
import * as fromPlantReducer from 'src/app/shared/store/plant/plant.reducer'
import { CompanionPlantingRoutingModule } from './companion-planting-routing.module'
import { CompanionPlantingComponent } from './companion-planting.component'
import { CompanionPlantingService } from './companion-planting.service'

@NgModule({
  declarations: [CompanionPlantingComponent, CompanionPlantingComponent],
  imports: [
    CommonModule,
    CompanionPlantingRoutingModule,
    StoreModule.forFeature(fromPlantReducer.plantsFeatureKey, fromPlantReducer.reducer),
    EffectsModule.forFeature([PlantEffect]),
    SharedModule
  ],
  bootstrap: [CompanionPlantingComponent],
  providers: [CompanionPlantingService]
})
export class CompanionPlantingModule {}
