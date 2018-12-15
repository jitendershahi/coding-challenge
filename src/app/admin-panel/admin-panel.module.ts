import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { BaseModule } from '@app/shared/base.module';
import { HeaderComponent } from '@app/admin-panel/header/header.component';

@NgModule({
  declarations: [AdminPanelComponent,HeaderComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    BaseModule
  ]
})
export class AdminPanelModule { }
