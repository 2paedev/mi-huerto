import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: async () => (await import('./home/home.module')).HomeModule,
  },
  {
    path: 'companion-planting',
    loadChildren: async () =>
      (await import('./companion-planting/companion-planting.module'))
        .CompanionPlantingModule,
  },
  {
    path: 'settings',
    loadChildren: async () =>
      (await import('./settings/settings.module')).SettingsModule,
  },
  {
    path: 'help',
    loadChildren: async () => (await import('./help/help.module')).HelpModule,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
