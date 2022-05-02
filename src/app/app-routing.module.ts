import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CompanionPlantingModule } from './pages/companion-planting/companion-planting.module'
import { HelpModule } from './pages/help/help.module'
import { HomeModule } from './pages/home/home.module'
import { SettingsModule } from './pages/settings/settings.module'

const routes: Routes = [
  {
    path: 'home',
    loadChildren: async (): Promise<typeof HomeModule> =>
      (await import('./pages/home/home.module')).HomeModule
  },
  {
    path: 'companion-planting',
    loadChildren: async (): Promise<typeof CompanionPlantingModule> =>
      (await import('./pages/companion-planting/companion-planting.module')).CompanionPlantingModule
  },
  {
    path: 'settings',
    loadChildren: async (): Promise<typeof SettingsModule> =>
      (await import('./pages/settings/settings.module')).SettingsModule
  },
  {
    path: 'help',
    loadChildren: async (): Promise<typeof HelpModule> =>
      (await import('./pages/help/help.module')).HelpModule
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
