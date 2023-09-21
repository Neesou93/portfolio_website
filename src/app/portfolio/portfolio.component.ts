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
    }
  ]
}
