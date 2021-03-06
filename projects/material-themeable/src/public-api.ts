/*
 * Public API Surface of material-themeable
 */

export * from './lib/directives/mat-themeable/mat-themeable.directive';
export {
  MatThemeableHue,
  MatThemeableLayout,
  MatThemeablePalette,
  MatThemeableSize,
  MatThemeableSizeType
} from './lib/directives/mat-themeable/mat-themeable.directive.types';

export * from './lib/directives/mat-themeable-text/mat-themeable-text.directive'
export {
  MatThemeableTextHue,
  MatThemeableTextPalette
} from './lib/directives/mat-themeable-text/mat-themeable-text.directive.types'

export * from './lib/material-themeable.module';
