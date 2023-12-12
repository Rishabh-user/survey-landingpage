import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public addHeader: boolean = false;
  public addFooter: boolean = false;
  public addlanding: boolean = false;
  public addsidebar: boolean = false;
  public toggle(): void {

    this.addHeader = !this.addHeader;
    this.addFooter = !this.addFooter;
    this.addlanding = !this.addlanding;
    this.addsidebar = !this.addsidebar;
  }

  private headerVisibleSubject = new BehaviorSubject<boolean>(true);
  private footerVisibleSubject = new BehaviorSubject<boolean>(true);
  private sidebarVisibleSubject = new BehaviorSubject<boolean>(true);
  private landingVisibleSubject = new BehaviorSubject<boolean>(true);

  headerVisible$ = this.headerVisibleSubject.asObservable();
  footerVisible$ = this.footerVisibleSubject.asObservable();
  sidebarVisible$ = this.sidebarVisibleSubject.asObservable();
  landingVisible$ = this.sidebarVisibleSubject.asObservable();

  toggleHeaderVisibility(visible: boolean) {
    this.headerVisibleSubject.next(visible);
  }

  toggleFooterVisibility(visible: boolean) {
    this.footerVisibleSubject.next(visible);
  }

  toggleSidebarVisibility(visible: boolean) {
    this.sidebarVisibleSubject.next(visible);
  }
  toggleLandingVisibility(visible: boolean) {
    this.landingVisibleSubject.next(visible);
  }


  //progress bar
  private progressSubject = new BehaviorSubject<number>(0);
  progress$ = this.progressSubject.asObservable();

  setProgress(progress: number) {
    this.progressSubject.next(progress);
  }


  constructor() { }
}
