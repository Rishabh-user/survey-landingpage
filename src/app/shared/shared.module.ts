import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
//import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { SidebarComponent } from './sidebar/sidebar.component';

//icon
import { NgIconsModule } from '@ng-icons/core';
import { heroBars3 } from '@ng-icons/heroicons/outline';
import { heroInformationCircle } from '@ng-icons/heroicons/outline';
import { heroBars3BottomLeft } from '@ng-icons/heroicons/outline';


@NgModule({
  declarations: [
    //HeaderComponent,
    FooterComponent,
    //SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgIconsModule.withIcons({
      heroBars3,
      heroInformationCircle,
      heroBars3BottomLeft
    }),
  ]
})
export class SharedModule { }
