import { NgModule } from '@angular/core';
import { MatThemeableTextDirective } from './directives/mat-themeable-text/mat-themeable-text.directive';
import { MatThemeableDirective } from './directives/mat-themeable/mat-themeable.directive';

@NgModule({
  declarations: [
    MatThemeableDirective,
    MatThemeableTextDirective
  ],
  exports: [
    MatThemeableDirective,
    MatThemeableTextDirective
  ],
  imports: [
  ]
})
export class MaterialThemeableModule { }
