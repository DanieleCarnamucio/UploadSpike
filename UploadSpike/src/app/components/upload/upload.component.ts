import { Component, OnInit } from '@angular/core';
import { Img } from 'src/app/model/img';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file!: File;
  loading: boolean = false;
  shortLink = ""
  images : Img[] = []


  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
    this.getAll();
  }

  onChange(event: any){
    let fileType = event.target.files[0];
    if(fileType.type == "image/png"){
      this.file = event.target.files[0];
    }
    else {
      console.log("sei un cojone");
    }
  }

  onUpload(){
    this.loading = !this.loading;
    console.log(this.file);
    this.uploadService.upload(this.file).subscribe(
      (event:any) => {
        if (typeof event === 'object'){
          this.shortLink = event.link;
          this.loading = false;
        }
      },
      err => {
        console.error(err)
      },
      () => {
        this.getAll();
      }
    )  
  }

  getAll(){
    this.uploadService.getAll().subscribe(obs => {
      this.images = [...obs];
    });
  }

}
