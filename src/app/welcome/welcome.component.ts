import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  scrollToTheContact(){
    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})
  }
}
