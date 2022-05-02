import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CompanionPlantingComponent } from './companion-planting.component'

const routes: Routes = [
  {
    path: '',
    component: CompanionPlantingComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CompanionPlantingRoutingModule {}
