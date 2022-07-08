import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-info-panel',
  templateUrl: './more-info-panel.component.html',
  styleUrls: ['./more-info-panel.component.scss'],
})
export class MoreInfoPanelComponent implements OnInit {
  @Input() selectedProject = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.selectedProject);
  }
}
