import { NgModule } from '@angular/core'
import { HelpRoutingModule } from './help-routing.module'
import { HelpComponent } from './help.component'

@NgModule({
  declarations: [HelpComponent, HelpComponent],
  imports: [HelpRoutingModule],
  providers: [],
  bootstrap: [HelpComponent]
})
export class HelpModule {}
