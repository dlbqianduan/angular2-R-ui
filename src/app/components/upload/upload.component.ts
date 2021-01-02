import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'R-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})
export class UploadComponent implements OnInit {
  @ViewChild('file') file: ElementRef;
  fileCon: HTMLElement;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.fileCon = this.file.nativeElement;
  }

  fileChange(e) {
    const inp = e.target as HTMLInputElement;
  }

  upload() {
    this.fileCon.click();
  }

}
