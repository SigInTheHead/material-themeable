import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { MatThemeableHue, MatThemeableLayout, MatThemeablePalette, MatThemeableSize, MatThemeableSizeType } from './mat-themeable.types';

@Directive({
  selector: '[matThemeable]'
})
export class MatThemeableDirective implements OnInit {

  public get hue(): MatThemeableHue{
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

  private _color: MatThemeablePalette;

  /**
   * @description
   * adds margin-horizontal-[MatThemeableSize] class
   */
  @Input()
  public horizontalMargin: MatThemeableSize;

  /**
   * @description
   * adds padding-horizontal-[MatThemeableSize] class
   */
  @Input()
  public horizontalPadding: MatThemeableSize;

  private _hue: MatThemeableHue = 'default';

  /**
   * @description
   * Over rides margin and padding
   */
  @Input()
  public layout: MatThemeableLayout;

  /**
   * @description
   * Over rides horizontalMargin and verticalMargin
   */
  @Input()
  public margin: MatThemeableSize;

  /**
   * @description
   * Over rides horizontalPadding and verticalPadding
   */
  @Input()
  public padding: MatThemeableSize;

  /**
   * @description
   * adds margin-vertical-[MatThemeableSize] class
   */
  @Input()
  public verticalMargin: MatThemeableSize;

  /**
   * @description
   * adds padding-vertical-[MatThemeableSize] class
   */
  @Input()
  public verticalPadding: MatThemeableSize;

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

  private _setColor(): void {
    if (this._color === undefined) {
      return;
    }
    if (this._color === 'base') {
      this._renderer.addClass(this._el.nativeElement, `color-${this._color}`);
      return;
    }

    this._renderer.addClass(this._el.nativeElement, `color-${this._color}-${this._hue}`);
  }

  private _unsetColor(): void {
    if (this._color === 'base') {
      this._renderer.removeClass(this._el.nativeElement, `color-${this._color}`);
      return;
    }

    this._renderer.removeClass(this._el.nativeElement, `color-${this._color}-${this._hue}`);
  }

  private _setLayout(): void {
    this._renderer.addClass(this._el.nativeElement, `layout-${this.layout}`);
  }

  private _setMargin(): void {
    if (this.margin) {
      this.horizontalMargin = this.margin;
      this.verticalMargin = this.margin;
    }
  }

  private _setPadding(): void {
    if (this.padding) {
      this.horizontalPadding = this.padding;
      this.verticalPadding = this.padding;
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

}
