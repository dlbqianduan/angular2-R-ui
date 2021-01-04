import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MessageService } from '../../components/message/message.service';

@Component({
  selector: 'R-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less'],
})
export class UploadComponent implements OnInit {
  @ViewChild('file') file: ElementRef;
  @Input() size: number = 1;
  @Output() uploadChange: EventEmitter<any> = new EventEmitter();
  fileCon: HTMLElement;
  resultImg: any[] = [];
  previewImg: '';
  showPreview: boolean = false;
  constructor(public mess: MessageService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.fileCon = this.file.nativeElement;
  }

  fileChange(e) {
    const inp = e.target as HTMLInputElement;
    this._upload(inp);
    inp.value = '';
  }

  _upload(inp) {
    if (!inp) {
      return;
    }
    const that = this;
    const reader = new FileReader();
    let mess_con = '';
    reader.readAsDataURL(inp.files[0]);
    reader.onloadstart = function (e) {
      const _size = that.size * 1024 * 1024;
      const ifImg = inp.files[0]
        ? inp.files[0].type.indexOf('image') > -1
          ? true
          : false
        : true;
      if (_size <= e.total && ifImg) {
        mess_con = '图片有点大，重新上传吧！';
        this.abort();
        that.message('warn', mess_con, 3000);
      }
      if (!ifImg) {
        mess_con = '咱还是上传图片吧！';
        this.abort();
        that.message('warn', mess_con, 3000);
      }
    };
    reader.onload = function (e) {
      mess_con = '上传成功！';
      that.resultImg.push(this.result);
      that.uploadChange.emit(that.resultImg);
      that.message('success', mess_con, 2500);
    };
  }

  upload() {
    this.fileCon.click();
  }

  delete(ind) {
    this.resultImg.splice(ind, 1);
  }

  preview(ind) {
    this.previewImg = this.resultImg[ind];
    this.showPreview = true;
  }

  message(type, content, duration, callback?) {
    this.mess.message({
      type,
      message: content,
      duration,
    });
  }
}
