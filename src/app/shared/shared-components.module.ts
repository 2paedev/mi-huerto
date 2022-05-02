import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { InfoPanelComponent } from './components/info-panel/info-panel.component'
import { MaterialModule } from './components/material.module'
import { PlantComponent } from './components/plant/plant.component'
import { PlantsGroupComponent } from './components/plants-group/plants-group.component'
import { PlantsPanelComponent } from './components/plants-panel/plants-panel.component'
import { SelectComponent } from './components/select/select.component'
import { SidenavComponent } from './components/sidenav/sidenav.component'
import { ToolbarComponent } from './components/toolbar/toolbar.component'

const customComponents = [
  ToolbarComponent,
  SidenavComponent,
  SelectComponent,
  PlantsPanelComponent,
  PlantsGroupComponent,
  PlantComponent,
  InfoPanelComponent
]
@NgModule({
  declarations: [...customComponents],
  imports: [CommonModule, MaterialModule],
  exports: [...customComponents]
})
export class SharedModule {}
