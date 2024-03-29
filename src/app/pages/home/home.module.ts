import { NgModule } from '@angular/core'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'

@NgModule({
  declarations: [HomeComponent, HomeComponent],
  imports: [HomeRoutingModule],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {}
