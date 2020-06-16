import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { MatThemeableTextHue, MatThemeableTextPalette } from './mat-themeable-text.directive.types';

@Directive({
  selector: '[matThemeableText]'
})
export class MatThemeableTextDirective implements OnInit {

  public get color(): MatThemeableTextPalette {
    return this._color;
  }

  /**
   * @description
   * Adds mat-[ThemePalette] class
   */
  @Input()
  public set color(value: MatThemeableTextPalette) {
    this._unsetColor();
    this._color = value;
    this._setColor();
  }

  public get hue(): MatThemeableTextHue {
    return this._hue;
  }

  /**
   * @description
   * Used access more of the material palette
   *
   * HERE BE DRAGONS
   * this input should be used sparingly as it would be all too easy to turn your nice clean
   * material theme into a something that looks terrible
   *
   * If you do choose to use this, the 'default', 'lighter' and 'darker' are the preferred options especially if you have the ability to
   * change themes in your site
   */
  @Input()
  public set hue(value: MatThemeableTextHue) {
    this._unsetColor();
    this._hue = value;
    this._setColor();
  }

  private _color: MatThemeableTextPalette;

  private _hue: MatThemeableTextHue = 'default';

  constructor(private _el: ElementRef,
              private _renderer: Renderer2) {
    this._renderer.addClass(this._el.nativeElement, 'mat-themeable-text');
  }

  public ngOnInit(): void {
  }

  protected _setColor(): void {
    if (this._color === undefined) {
      return;
    }

    this._renderer.addClass(this._el.nativeElement, `mat-themeable-text-color-${this._color}-${this._hue}`);
  }

  private _unsetColor(): void {
    this._renderer.removeClass(this._el.nativeElement, `mat-themeable-text-color-${this._color}-${this._hue}`);
  }
}
