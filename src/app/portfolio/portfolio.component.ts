import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  portfolioInfos = [
    {
      image: 'Pollo loco 1.png',
      git: 'https://github.com/Neesou93/El_Pollo_Loco2.0',
      link: 'https://pascal-dietz.developerakademie.net/el_pollo_loco/',
      title: 'El Pollo Loco',
      description: 'El Pollo Loco is a little Sidescoller. In dies game you must beat the big Chicken "El Pollo Loco". Help Pepe to beat the big enemey.',
      script: 'JavaScript | HTML | CSS'
    },
    {
      image: 'Pollo loco 2.png',
      git: 'https://github.com/Neesou93/join',
      link: 'https://pascal-dietz.developerakademie.net/JOIN/',
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories',
      script: 'JavaScript | HTML | CSS'
    },
    {
      image: 'Pollo loco 4.png',
      git: 'https://github.com/Neesou93/El_Pollo_Loco2.0',
      link: 'https://pascal-dietz.developerakademie.net/simple_crm/',
      title: 'Simple CRM',
      description: 'A very Simple Customer Relationship Managment system working with CRUD functionality.',
      script: 'Angular | Firebase'
    }
  ]

  openLink(link:string){
    window.open(link);
  }
}
