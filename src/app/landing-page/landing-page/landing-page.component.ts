import { Component } from '@angular/core';
import { DataService } from 'src/service/data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],

})
export class LandingPageComponent {
  files: File[] = [];
  selectedFile: File | undefined;

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0] as File | null;
    if (selectedFile) {
      this.selectedFile = selectedFile;
    }
  }
  selectedValue: any;
  currentContentIndex: number = 0;
  progress = 0;
  maxIndex = 18;

  constructor(private progressService: DataService) {
    this.progressService.progress$.subscribe(progress => {
      this.progress = progress;
    });
  }

  decreaseProgress() {
    if (this.progress > 0) {
      this.progress -= 7.14; // Decrease the progress by 5% (adjust as needed)
      this.progressService.setProgress(this.progress);
    }
    if (this.currentContentIndex > 0) {
      this.currentContentIndex--;
    }
  }

  increaseProgress() {
    if (this.progress < 100) {
      this.progress += 7.14; // Increase the progress by 5.55 (adjust as needed)
      if (this.progress > 100) {
        this.progress = 100; // Cap the progress at 100 if it exceeds
      }
      this.progressService.setProgress(this.progress);
    }
    if (this.currentContentIndex < this.maxIndex) { // Define a maximum index value
      this.currentContentIndex++;
    }
  }

  // Multiselect
  toppings = new FormControl('');
  toppingList: string[] = ['BYJUs', 'Careers360', 'Physics Wallah', 'Next Education', 'IQuanta', 'Collegedunia', 'Udemy', 'Vedantu', 'Unacademy', 'UpGrad', 'SimpliLearn', 'WhiteHat Jr', 'Others. (Please specify)', 'None of the above'];



}
