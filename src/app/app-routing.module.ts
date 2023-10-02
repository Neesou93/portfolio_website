import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { DataProtComponent } from './data-prot/data-prot.component';

const routes: Routes = [
  { path: '', component: MainSiteComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'privacy-policy', component: DataProtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
