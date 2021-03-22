import { NgModule } from '@angular/core';
import { CompanionPlantingRoutingModule } from './companion-planting-routing.module';
import { CompanionPlantingComponent } from './companion-planting.component';

@NgModule({
  declarations: [CompanionPlantingComponent, CompanionPlantingComponent],
  imports: [CompanionPlantingRoutingModule],
  providers: [],
  bootstrap: [CompanionPlantingComponent],
})
export class CompanionPlantingModule {}
