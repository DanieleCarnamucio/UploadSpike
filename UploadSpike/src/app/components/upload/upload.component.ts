import { Component, OnInit } from '@angular/core';
//import { timeStamp } from 'console';
//import { AzureBlobStorageService } from 'src/app/azure-blob-storage.service';
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

  picturesList : string[] = [];
  sas = "";

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
    //this.getAll();
    //this.reloadImagesList();
  }

  onChange(event: any){
    let fileType = event.target.files[0];
    if(fileType.type == "image/png"){
      this.file = event.target.files[0];
    }
    else {
      alert("Estensione non corretta")
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
        //this.getAll();
      }
    )  
  }

  // private reloadImagesList() {
  //   this.blobService.listImages().then(list => {
  //     this.picturesList = list
  //   })
  // }

  // public downloadImage(name: string){
  //   this.blobService.downloadImage(name,blob => {
  //     let url = window.URL.createObjectURL(blob);
  //     window.open(url);
  //   })
  // }

  // public imageSelected(file : File){
  //   this.blobService.uploadImage(this.sas, file, file.name, ()=>{
  //     this.reloadImagesList()
  //   })
  // }




  // getAll(){
  //   this.uploadService.getAll().subscribe(obs => {
  //     this.images = [...obs];
  //   });
  // }

}
