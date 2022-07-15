import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hard-skills-list',
  templateUrl: './hard-skills-list.component.html',
  styleUrls: ['./hard-skills-list.component.scss'],
})
export class HardSkillsListComponent implements OnInit {
  hardSkillsList = [
    'Frameworks',
    'CSS e UI',
    'Padrões de projeto e organização de código',
    'Testes Unitários',
    'GIT',
    'NodeJS',
  ];
  frameworkList = ['Angular 8+', 'React'];
  cssList = ['Material', 'Bootstrap', 'Tailwhind', 'Sass'];
  patternList = [
    'MVC',
    'Modularização de diretórios',
    'Service-Store-Component',
    'DRY',
    'SOLID',
    'CI/CD',
  ];
  unitTestList = ['Code Coverage', 'Jasmine + Karma', 'Jest'];
  gitList = ['Github', 'AzureDevOps'];
  nodeList = ['Express', 'NestJS'];
  expandedInfo: boolean[] = [];

  constructor() {}

  ngOnInit(): void {}

  showList(index: number) {
    this.expandedInfo[index] = !this.expandedInfo[index];
  }
}
