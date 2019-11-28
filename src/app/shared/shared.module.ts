import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MaterialThemeableModule } from 'material-themeable';
import { InfoComponent } from './components/info/info.component';
import { WarningComponent } from './components/warning/warning.component';
import { DemoSectionComponent } from './components/demo-section/demo-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [WarningComponent, InfoComponent, DemoSectionComponent],
  exports: [
    MatToolbarModule,
    MaterialThemeableModule,
    WarningComponent,
    InfoComponent,
    DemoSectionComponent,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MaterialThemeableModule,
    MatButtonModule
  ]
})
export class SharedModule { }
