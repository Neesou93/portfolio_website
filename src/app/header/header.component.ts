import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public scrollY: any;
  public scrollX: any;
  constructor(private router: Router) {
  }
  async scrollToTheTop(id: string) {
    await this.router.navigateByUrl('/');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  openContext() {
    document.getElementById('context-menu')?.classList.remove('d-none');
    this.disableScroll();
    this.changeIconOpen();
  }
  closeContext() {
    document.getElementById('context-menu')?.classList.add('d-none');
    this.enableScroll();
    this.changeIconClose();
  }

  changeIconOpen() {
    document.getElementById('burger-icon')?.classList.add('d-none');
    document.getElementById('burger-line-1')?.classList.add('d-none');
    document.getElementById('burger-line-2')?.classList.add('d-none');
    document.getElementById('burger-line-3')?.classList.add('d-none');
    document.getElementById('burger-cross')?.classList.remove('d-none');
  }
  changeIconClose() {
    document.getElementById('burger-icon')?.classList.remove('d-none');
    document.getElementById('burger-line-1')?.classList.remove('d-none');
    document.getElementById('burger-line-2')?.classList.remove('d-none');
    document.getElementById('burger-line-3')?.classList.remove('d-none');
    document.getElementById('burger-cross')?.classList.add('d-none');
  }
  disableScroll() {
    // Den aktuellen Scrollposition sichern
    this.scrollX =
      window.scrollX ||
      window.pageXOffset ||
      document.documentElement.scrollLeft;
    this.scrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;

    // Die Körper-Elementeigenschaften ändern, um das Scrollen zu deaktivieren
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.scrollY}px`;
    document.body.style.left = `-${this.scrollX}px`;
  }

  enableScroll() {
    // Die Körper-Elementeigenschaften zurücksetzen, um das Scrollen zu aktivieren
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';

    // Die vorherige Scrollposition wiederherstellen
    window.scrollTo(this.scrollX, this.scrollY);
  }
}
