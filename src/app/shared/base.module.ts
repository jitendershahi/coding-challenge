import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: '@app/admin-panel/admin-panel.module#AdminPanelModule'
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: []
})
export class BaseModule { }
