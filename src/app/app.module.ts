import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TeamsandconditionComponent } from './pages/teamsandcondition/teamsandcondition.component';

//icons
import { NgIconsModule } from '@ng-icons/core';
import { heroBars3 } from '@ng-icons/heroicons/outline';
import { heroArrowLongLeft } from '@ng-icons/heroicons/outline';
import { heroArrowLongRight } from '@ng-icons/heroicons/outline';
import { heroInformationCircle } from '@ng-icons/heroicons/outline';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { heroBars3BottomLeft } from '@ng-icons/heroicons/outline';
import { heroStar } from '@ng-icons/heroicons/outline';

//tooltip
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatSliderModule } from '@angular/material/slider'; 
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AboutUsComponent,
    PrivacyComponent,
    TeamsandconditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxDropzoneModule,
    MatSliderModule,
    FormsModule,ReactiveFormsModule,
    DragDropModule,
    NgbTooltipModule,
    NgIconsModule.withIcons({
      heroBars3,
      heroArrowLongLeft,
      heroArrowLongRight,
      heroInformationCircle,
      heroBars3BottomLeft,
      heroStar
    }),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
