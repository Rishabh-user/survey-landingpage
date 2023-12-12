import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing';
  layout: string = '';
  headerVisible: boolean = true;
  landingVisible: boolean = true;
  footerVisible: boolean = true;
  sidebarVisible: boolean = true;
  constructor(private router: ActivatedRoute, private visibilityService: DataService, public themeService: DataService) {
    this.visibilityService.headerVisible$.subscribe(visible => {
      this.headerVisible = visible;
    });
    this.visibilityService.sidebarVisible$.subscribe(visible => {
      this.sidebarVisible = visible;
    });
    this.visibilityService.landingVisible$.subscribe(visible => {
      this.landingVisible = visible;
    });
    this.visibilityService.footerVisible$.subscribe(visible => {
      this.footerVisible = visible;
    });
  }
}
