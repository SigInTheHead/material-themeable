import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import {
  MatThemeableHue,
  MatThemeableLayout,
  MatThemeablePalette,
  MatThemeableSize,
  MatThemeableSizeType
} from './mat-themeable.directive.types';

@Directive({
  selector: '[matThemeable]'
})
export class MatThemeableDirective implements OnInit {

  public get color(): MatThemeablePalette {
    return this._color;
  }

  /**
   * @description
   * Adds mat-[ThemePalette] class
   */
  @Input()
  public set color(value: MatThemeablePalette) {
    this._unsetColor();
    this._color = value;
    this._setColor();
  }

  public get extendedColor(): string {
    return this._extendedColor;
  }

  @Input()
  public set extendedColor(value: string) {
    this._unsetColor();
    this._extendedColor = value;
    this._setColor();
  }

  public get extendedTheme(): string {
    return this._extendedTheme;
  }

  @Input()
  public set extendedTheme(value: string) {
    this._unsetColor();
    this._extendedTheme = value;
    this._setColor();
  }

  public get horizontalMargin(): MatThemeableSize {
    return this._horizontalMargin;
  }

  /**
   * @description
   * adds margin-horizontal-[MatThemeableSize] class
   */
  @Input()
  public set horizontalMargin(value: MatThemeableSize) {
    this._unsetMargin();
    this._horizontalMargin = value;
    this._setSizes('margin', value, this._verticalMargin);
  }

  public get horizontalPadding(): MatThemeableSize {
    return this._horizontalPadding;
  }

  /**
   * @description
   * adds padding-horizontal-[MatThemeableSize] class
   */
  @Input()
  public set horizontalPadding(value: MatThemeableSize) {
    this._unsetPadding();
    this._horizontalPadding = value;
    this._setSizes('padding', value, this._verticalPadding);
  }

  public get hue(): MatThemeableHue {
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
  public set hue(value: MatThemeableHue) {
    this._unsetColor();
    this._hue = value;
    this._setColor();
  }

  public get margin(): MatThemeableSize {
    return this._margin;
  }

  /**
   * @description
   * Over rides horizontalMargin and verticalMargin
   */
  @Input()
  public set margin(value: MatThemeableSize) {
    this._margin = value;
    this._setMargin();
  }

  public get verticalMargin(): MatThemeableSize {
    return this._verticalMargin;
  }

  /**
   * @description
   * adds margin-vertical-[MatThemeableSize] class
   */
  @Input()
  public set verticalMargin(value: MatThemeableSize) {
    this._unsetMargin();
    this._verticalMargin = value;
    this._setSizes('margin', this.horizontalMargin, value);
  }

  public get verticalPadding(): MatThemeableSize {
    return this._verticalPadding;
  }

  /**
   * @description
   * adds padding-vertical-[MatThemeableSize] class
   */
  @Input()
  public set verticalPadding(value: MatThemeableSize) {
    this._unsetPadding();
    this._verticalPadding = value;
    this._setSizes('padding', this.horizontalPadding, value);
  }

  /**
   * @description
   * Over rides margin and padding
   */
  @Input()
  public layout: MatThemeableLayout;

  /**
   * @description
   * Over rides horizontalPadding and verticalPadding
   */
  @Input()
  public padding: MatThemeableSize;

  private _color: MatThemeablePalette;

  private _extendedColor: string;

  private _extendedTheme: string;

  private _horizontalMargin: MatThemeableSize;

  private _horizontalPadding: MatThemeableSize;

  private _hue: MatThemeableHue = 'default';

  private _margin: MatThemeableSize;

  private _verticalMargin: MatThemeableSize;

  private _verticalPadding: MatThemeableSize;

  constructor(private _el: ElementRef,
              private _renderer: Renderer2) {
    this._renderer.addClass(this._el.nativeElement, 'mat-themeable');
  }

  public ngOnInit(): void {

    this._setColor();

    if (this.layout) {
      this._setLayout();
      return;
    }

    this._setPadding();
    this._setSizes('padding', this.horizontalPadding, this.verticalPadding);

    this._setMargin();
    this._setSizes('margin', this.horizontalMargin, this.verticalMargin);
  }

  protected _setColor(): void {
    if (this._color === undefined && this._extendedColor === undefined && this._extendedTheme === undefined) {
      return;
    }

    if (this._color === 'base') {
      this._renderer.addClass(this._el.nativeElement, `color-${this._color}`);
      return;
    }

    if (this._extendedColor && this._extendedTheme) {
      this._renderer.addClass(this._el.nativeElement, `color-${this._extendedTheme}-${this._extendedColor}-${this._hue}`);
    }

    this._renderer.addClass(this._el.nativeElement, `color-${this._color}-${this._hue}`);
  }

  private _setLayout(): void {
    this._renderer.addClass(this._el.nativeElement, `layout-${this.layout}`);
  }

  private _setMargin(): void {
    if (this._margin) {
      this._horizontalMargin = this._margin;
      this._verticalMargin = this._margin;
    }
  }

  private _setPadding(): void {
    if (this.padding) {
      this._horizontalPadding = this.padding;
      this._verticalPadding = this.padding;
    }
  }

  private _setSizes(type: MatThemeableSizeType, horizontal: MatThemeableSize, vertical: MatThemeableSize): void {

    if (horizontal !== undefined) {
      this._renderer.addClass(this._el.nativeElement, `${type}-horizontal-${horizontal}`);
    }

    if (vertical !== undefined) {
      this._renderer.addClass(this._el.nativeElement, `${type}-vertical-${vertical}`);
    }
  }

  private _unsetColor(): void {
    if (this._color === 'base') {
      this._renderer.removeClass(this._el.nativeElement, `color-${this._color}`);
      return;
    }

    if (this._extendedColor && this._extendedTheme) {
      this._renderer.removeClass(this._el.nativeElement, `color-${this._extendedTheme}-${this._extendedColor}-${this._hue}`);
    }

    this._renderer.removeClass(this._el.nativeElement, `color-${this._color}-${this._hue}`);
  }

  private _unsetMargin(): void {
    this._renderer.removeClass(this._el.nativeElement, `margin-horizontal-${this.horizontalMargin}`);
    this._renderer.removeClass(this._el.nativeElement, `margin-vertical-${this.verticalMargin}`);
  }

  private _unsetPadding(): void {
    this._renderer.removeClass(this._el.nativeElement, `padding-horizontal-${this.horizontalPadding}`);
    this._renderer.removeClass(this._el.nativeElement, `padding-vertical-${this.verticalPadding}`);
  }

}
