import { Component } from '@angular/core';
import { DataService } from 'src/service/data.service';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
// import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

interface FileWithPreview {
  file: File;
  url?: string;
  uploadProgress?: number;
  uploadSuccess?: boolean;
  uploadError?: boolean;
}

interface Brand {
  name: string;
  formGroupName: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],

})
export class LandingPageComponent {

  form!: FormGroup; // definite assignment assertion
  brands: Brand[] = [
    { name: 'Apple', formGroupName: 'appleGroup' },
    { name: 'Vivo', formGroupName: 'vivoGroup' },
    { name: 'Samsung', formGroupName: 'samsungGroup' },
    { name: 'Motorola', formGroupName: 'motorolaGroup' },
  ];


  //files: File[] = [];
  selectedFile: File | undefined;

  // onFileSelected(event: any) {
  //   const selectedFile = event.target.files[0] as File | null;
  //   if (selectedFile) {
  //     this.selectedFile = selectedFile;
  //   }
  // }

  public files: FileWithPreview[] = [];

  // Dropzone configuration
  public config: DropzoneConfigInterface = {
    url: '/upload',
    maxFiles: 10,
    clickable: true,
  };


  onFileChange(event: any): void {
    // Handle file selection and preview
    if (event && event.addedFiles) {
      console.log('Added Files:', event.addedFiles);
      const fileList: FileList = event.addedFiles;
      for (let i = 0; i < fileList.length; i++) {
        const file: FileWithPreview = { file: fileList[i] };
        this.files.push(file);

        // Optionally, you can create a preview URL for the image files
        if (file.file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            file.url = e.target.result;
          };
          reader.readAsDataURL(file.file);
        }
      }
    }

  }

  onRemove(file: FileWithPreview): void {
    // Find the index of the file in the files array
    const index = this.files.indexOf(file);

    // If the file is found, remove it from the array
    if (index !== -1) {
      this.files.splice(index, 1);
    }
  }

  onUploadSuccess(file: FileWithPreview): void {
    // Handle successful file upload
    file.uploadSuccess = true;
    file.uploadProgress = 100;
    console.log('File uploaded successfully:', file);
  }

  onUploadError(event: any): void {
    // Handle file upload error
    const fileName = event.file?.name;
    const fileWithError: FileWithPreview | undefined = this.files.find(
      (file) => file.file.name === (fileName || '')
    );

    if (fileWithError) {
      fileWithError.uploadError = true;
      fileWithError.uploadProgress = 0;
      console.error('File upload error:', fileWithError);
    }
  }

  selectedValue: any;
  currentContentIndex: number = 0;
  progress = 0;
  maxIndex = 18;

  constructor(private progressService: DataService, private fb: FormBuilder) {
    this.progressService.progress$.subscribe(progress => {
      this.progress = progress;
    });
    this.initializeForm();
  }

  initializeForm(): void {
    const formGroupConfig: { [key: string]: any } = {};
    this.brands.forEach(brand => {
      formGroupConfig[brand.formGroupName] = this.fb.group({
        noOpinion: false,
        display: false,
        memory: false,
        performance: false,
        battery: false,
      });
    });
    this.form = this.fb.group(formGroupConfig);
  }
  handleCheckboxChange(groupName: string, controlName: string): void {
    const group = this.form.get(groupName) as FormGroup;

    console.log(group);
    if (controlName === 'noOpinion') {
      console.log(group.get('noOpinion')!.value);
      // If "No Opinion" is checked, uncheck the other checkboxes
      if (group.get('noOpinion')!.value) {
        Object.keys(group.controls).forEach(ctrlName => {
          if (ctrlName !== 'noOpinion') {
            group.get(ctrlName)!.setValue(false);
          }
        });
      }
    } else if (!group.get('noOpinion')!.value) {
      // If "No Opinion" is unchecked, uncheck other checkboxes
      group.get('noOpinion')!.setValue(false);
    }
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
