import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TerraceCreatorComponent } from './terrace-creator.component'

const routes: Routes = [
  {
    path: '',
    component: TerraceCreatorComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TerraceCreatorRoutingModule {}
