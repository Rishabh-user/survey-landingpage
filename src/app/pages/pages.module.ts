import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TeamsandconditionComponent } from './teamsandcondition/teamsandcondition.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    PrivacyComponent,
    TeamsandconditionComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
