import { Component } from '@angular/core';


@Component({
  selector: 'app-header-context-menu',
  templateUrl: './header-context-menu.component.html',
  styleUrls: ['./header-context-menu.component.scss']
})
export class HeaderContextMenuComponent {

  scrollX:any;
  scrollY:any;

  scrollToSection(id:string){
    this.scrollX =
      window.scrollX ||
      window.pageXOffset ||
      document.documentElement.scrollLeft;
    this.scrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    this.enableScroll()
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
    this.closeWindow()
    this.changeIconClose()
  }
  closeWindow(){
    document.getElementById('context-menu')?.classList.add('d-none');
  }

enableScroll() {
  // Die Körper-Elementeigenschaften zurücksetzen, um das Scrollen zu aktivieren
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
}
changeIconClose(){
  document.getElementById('burger-icon')?.classList.remove('d-none');
  document.getElementById('burger-line-1')?.classList.remove('d-none');
  document.getElementById('burger-line-2')?.classList.remove('d-none');
  document.getElementById('burger-line-3')?.classList.remove('d-none');
  document.getElementById('burger-cross')?.classList.add('d-none');
}
}
