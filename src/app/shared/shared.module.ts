import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialThemeableModule } from 'dist/material-themeable';
import { DemoSectionComponent } from './components/demo-section/demo-section.component';
import { InfoComponent } from './components/info/info.component';
import { WarningComponent } from './components/warning/warning.component';

@NgModule({
  declarations: [
    WarningComponent,
    InfoComponent,
    DemoSectionComponent
  ],
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
