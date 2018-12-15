import { Routes, RouterModule } from '@angular/router'

export const appRoutes: Routes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full' }
]

export const routing = RouterModule.forRoot(appRoutes)