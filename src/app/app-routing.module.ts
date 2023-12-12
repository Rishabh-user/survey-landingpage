import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TeamsandconditionComponent } from './pages/teamsandcondition/teamsandcondition.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'teams&condition', component: TeamsandconditionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
