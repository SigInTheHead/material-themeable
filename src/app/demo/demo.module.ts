import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { ColorsComponent } from './components/colors/colors.component';
import { InteractionsComponent } from './components/interactions/interactions.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [
    ColorsComponent,
    DemoComponent,
    LayoutComponent,
    InteractionsComponent
  ],
  exports: [
    ColorsComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonToggleModule,
    MatSelectModule
  ]
})
export class DemoModule { }
