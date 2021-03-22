import { NgModule } from '@angular/core';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent, SettingsComponent],
  imports: [SettingsRoutingModule],
  providers: [],
  bootstrap: [SettingsComponent],
})
export class SettingsModule {}
