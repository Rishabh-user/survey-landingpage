import { Component } from '@angular/core';
import { DataService } from 'src/service/data.service';
import { FormControl } from '@angular/forms';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

class FileWithPreview extends File {
  dataURL?: string;
}
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  
})
export class LandingPageComponent {
  //files: File[] = [];
  selectedFile: File | undefined;

  // onFileSelected(event: any) {
  //   const selectedFile = event.target.files[0] as File | null;
  //   if (selectedFile) {
  //     this.selectedFile = selectedFile;
  //   }
  // }

  files: FileWithPreview[] = [];

  onSelect(event: any): void {
    const selectedFiles: FileList = event && event.addedFiles;

    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file: FileWithPreview = selectedFiles[i] as FileWithPreview;
        this.files.push(file);
        this.previewFile(file);
      }
    }
  }

  previewFile(file: FileWithPreview): void {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent) => {
      const target = e.target as FileReader;
      if (target && typeof target.result === 'string') {
        file.dataURL = target.result;
      }
    };
    reader.readAsDataURL(file);
  }

  onRemove(file: FileWithPreview): void {
    this.files = this.files.filter(f => f !== file);
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


// Continuous sum
sliderSum: number = 110; // Initial sum of slider values
  rangeValue1: number = 40;
  rangeValue2: number = 20;
  rangeValue3: number = 50;
  updateValues(slider: string, event: any): void {
    const value = parseInt(event.target.value);
    switch (slider) {
      case 'num1':
        this.rangeValue1 = value;
        break;
      case 'num2':
        this.rangeValue2 = value;
        break;
      case 'num3':
        this.rangeValue3 = value;
        break;
    }
    this.calculateSum();
  }
  calculateSum(): void {
    this.sliderSum = this.rangeValue1 + this.rangeValue2 + this.rangeValue3;
  }

  // Drag and drop
  // items = [
  //   { listing: 'Item 1' },
  //   { listing: 'Item 2' },
  //   { listing: 'Item 3' },
  // ];
  // drop(event: CdkDragDrop<string[]>): void {
  //   moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  // }

  todo = ['Item 3', 'Item 4', 'Item 5', 'Item 6'];

  done = ['Item 1', 'Item 2'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
 
}
