import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainSiteComponent } from './main-site/main-site.component';

const routes: Routes = [
  { path: '', component: MainSiteComponent },
  { path: 'impressum', component: ImpressumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
