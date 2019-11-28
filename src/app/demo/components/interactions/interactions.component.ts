import { Component, OnInit } from '@angular/core';
import { MatThemeableHue, MatThemeablePalette } from 'material-themeable';
import { MatButtonToggleChange, MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-interactions',
  styleUrls: ['./interactions.component.scss'],
  templateUrl: './interactions.component.html'
})
export class InteractionsComponent implements OnInit {

  public color: MatThemeablePalette = 'base';

  public colors: Array<MatThemeablePalette> = ['base', 'primary', 'accent', 'warn'];

  public hue: MatThemeableHue = 'default';

  public hues: Array<MatThemeableHue> = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700', 'default', 'lighter', 'darker'];

  constructor() {
  }

  public ngOnInit() {
  }

  public onColorChange(ev: MatButtonToggleChange): void {
    this.color = ev.value;
  }

  public onHueChange(ev: MatSelectChange): void {
    this.hue = ev.value
  }

}
