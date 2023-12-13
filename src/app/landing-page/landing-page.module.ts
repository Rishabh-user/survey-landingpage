import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
//import { LandingPageComponent } from './landing-page/landing-page.component';


import { NgIconsModule } from '@ng-icons/core';
import { heroBars3 } from '@ng-icons/heroicons/outline';
import { heroArrowLeft } from '@ng-icons/heroicons/outline';
import { heroArrowLongLeft } from '@ng-icons/heroicons/outline';
import { heroArrowLongRight } from '@ng-icons/heroicons/outline';
import { heroStar } from '@ng-icons/heroicons/outline';

import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    //LandingPageComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatSelectModule,
    LandingPageRoutingModule,
    MatFormFieldModule,FormsModule,
    NgIconsModule.withIcons({
      heroBars3,
      heroArrowLeft,
      heroArrowLongLeft,
      heroArrowLongRight,
      heroStar
    }),
  ]
})
export class LandingPageModule { }
