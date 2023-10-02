import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioObjectsComponent } from './portfolio-objects/portfolio-objects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderContextMenuComponent } from './header-context-menu/header-context-menu.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DataProtComponent } from './data-prot/data-prot.component';
import { MainSiteComponent } from './main-site/main-site.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    PortfolioComponent,
    PortfolioObjectsComponent,
    AboutMeComponent,
    WelcomeComponent,
    FooterComponent,
    ContactComponent,
    HeaderContextMenuComponent,
    ImpressumComponent,
    DataProtComponent,
    MainSiteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
