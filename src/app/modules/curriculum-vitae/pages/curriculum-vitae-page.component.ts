import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-vitae-page',
  templateUrl: './curriculum-vitae-page.component.html',
  styleUrls: ['./curriculum-vitae-page.component.scss'],
})
export class CurriculumVitaePageComponent implements OnInit {
  githubURL = 'https://github.com/arthan-12';
  linkedinURL =
    'https://www.linkedin.com/in/victor-augusto-de-souza-444b94122/';
  iterisURL = 'https://www.iteris.com.br/';

  panels = [
    {
      panelTitle: 'Experiência Profissional',
      panelClass: 'profissional-experience',
      panelInfo:
        'Atuo há 7 anos na área de TI. Os últimos 2 anos e meio foram dedicados' +
        ' exclusivamente à desenvolvimento de software, atuando como front end pela',
    },
    {
      panelTitle: 'Soft Skills',
      panelClass: 'soft-skills',
    },
    {
      panelTitle: 'Hard Skills',
      panelClass: 'hard-skills',
    },
  ];

  projectList = ['Timesheet', 'Acompanhamento Operacional', 'Banco de Horas'];
  activeIndex = 0;
  selectedProject = '';

  constructor() {}

  ngOnInit(): void {}

  setActivePanel(index: number) {
    if (index !== this.activeIndex) {
      this.activeIndex = index;
      this.selectedProject = '';
    } else {
      return;
    }
  }

  selectProject(project: string) {
    this.selectedProject = project;
    console.log(this.selectedProject);
  }
}
