import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-double-arrow-right',
  templateUrl: './double-arrow-right.component.html',
  styleUrls: ['./double-arrow-right.component.scss'],
})
export class DoubleArrowRightComponent implements OnInit {
  @Input() rotate: boolean;

  constructor() {}

  ngOnInit(): void {}
}
