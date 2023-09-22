import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  scrollToTheTop() {
    document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth' });
  }
}
