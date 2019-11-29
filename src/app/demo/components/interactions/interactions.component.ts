import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange, MatSelectChange } from '@angular/material';
import { MatThemeableHue, MatThemeablePalette, MatThemeableSize } from 'material-themeable';

@Component({
  selector: 'app-interactions',
  styleUrls: ['./interactions.component.scss'],
  templateUrl: './interactions.component.html'
})
export class InteractionsComponent implements OnInit {

  public color: MatThemeablePalette = 'base';

  public colors: Array<MatThemeablePalette> = ['base', 'primary', 'accent', 'warn'];

  public horizontalMargin: MatThemeableSize;

  public hue: MatThemeableHue = 'default';

  public hues: Array<MatThemeableHue> = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700', 'default', 'lighter', 'darker'];

  public margin: MatThemeableSize;

  public verticalMargin: MatThemeableSize;

  constructor() {
  }

  public ngOnInit() {
  }

  public onColorChange(ev: MatButtonToggleChange): void {
    this.color = ev.value;
  }

  public onHueChange(ev: MatSelectChange): void {
    this.hue = ev.value;
  }

  public onMarginChange(ev: MatButtonToggleChange): void {
    this.margin = ev.value;
  }

  public onMarginHorizontalChange(ev: MatButtonToggleChange): void {
    this.horizontalMargin = ev.value;
  }

  public onMarginVerticalChange(ev: MatButtonToggleChange): void {
    this.verticalMargin = ev.value;
  }

}
