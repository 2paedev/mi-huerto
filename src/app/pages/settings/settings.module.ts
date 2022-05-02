import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SettingsRoutingModule } from './settings-routing.module'
import { SettingsComponent } from './settings.component'

@NgModule({
  declarations: [SettingsComponent, SettingsComponent],
  imports: [CommonModule, SettingsRoutingModule],
  providers: [],
  bootstrap: [SettingsComponent]
})
export class SettingsModule {}
