import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  progress = 0;

  constructor(private progressService: DataService) { }

  ngOnInit() {
    this.progressService.progress$.subscribe(progress => {
      this.progress = progress;
    });
  }
}
