import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-soft-skills-card',
  templateUrl: './soft-skills-card.component.html',
  styleUrls: ['./soft-skills-card.component.scss'],
})
export class SoftSkillsCardComponent implements OnInit {
  @Input() selectedCard = '';
  @Input() cardTitle = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.selectedCard);
  }
}
