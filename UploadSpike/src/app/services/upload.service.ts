import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Img } from '../model/img';
//import { readFileSync, writeFileSync, promises as fsPromises } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url = "https://localhost:5001/Image";
  

  constructor(private http: HttpClient) { }

  upload(file: any) : Observable<any>{

    //metedologia con storage esterno
    const formData = new FormData();

    //metodologia mockata
    // let appendImage: Img = {
    //   path: "assets/img/" + file.name
    // }
    
    formData.append( file, file.name);
    // const fs = require( '@stdlib/fs-write-file' );
    // fs.writeFile(appendImage.path, file); 
    
    
    return this.http.post<any>(this.url, formData);
  }

  getAll() : Observable<any>{
    return this.http.get<any>(this.url);
  }
}
