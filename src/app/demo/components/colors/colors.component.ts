import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  styleUrls: ['./colors.component.scss'],
  templateUrl: './colors.component.html'
})
export class ColorsComponent implements OnInit {

  public info : Array<string> = [];

  public warnings: Array<string> = [
    `Using the 'hue' input can easily lead to a design that is very incoherent. It is recommended that you only use the 'default', 'lighter' and 'darker' hues, especially if your site has the ability to change themes`
  ];

  constructor() { }

  public ngOnInit() {
  }

}
