import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialThemeableModule } from 'material-themeable';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DemoModule } from './demo/demo.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DemoModule,
    SharedModule
  ],
  providers: []
})
export class AppModule {
}
