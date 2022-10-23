import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    SharedModule
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
