import { NgModule } from '@angular/core'
import { TerraceCreatorRoutingModule } from './terrace-creator-routing.module'
import { TerraceCreatorComponent } from './terrace-creator.component'

@NgModule({
  declarations: [TerraceCreatorComponent],
  imports: [TerraceCreatorRoutingModule],
  providers: [],
  bootstrap: [TerraceCreatorComponent]
})
export class TerraceCreatorModule {}
