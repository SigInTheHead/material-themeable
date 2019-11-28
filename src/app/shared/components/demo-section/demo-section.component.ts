import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-section',
  styleUrls: ['./demo-section.component.scss'],
  templateUrl: './demo-section.component.html'
})
export class DemoSectionComponent implements OnInit {

  @Input()
  public infos: Array<string>;

  @Input()
  public title: string;

  @Input()
  public warnings: Array<string>;

  constructor() { }

  public ngOnInit() {
  }

}
