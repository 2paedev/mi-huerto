import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from './toolbar/toolbar.module';
import { SidenavModule } from './sidenav/sidenav.module';

@NgModule({
  imports: [CommonModule, ToolbarModule, SidenavModule],
  exports: [ToolbarModule, SidenavModule],
})
export class SharedComponentsModule {}
