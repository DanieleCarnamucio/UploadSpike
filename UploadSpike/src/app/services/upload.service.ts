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
  urlU = "https://localhost:5001/Image/UploadFile";
  

  constructor(private http: HttpClient) { }

  upload(file: File) : Observable<any>{

    const formData = new FormData();
    formData.append(  file.name, file);
    console.log(formData);
    return this.http.post<any>(this.urlU, formData);

  }

  // getAll() : Observable<any>{
  //   return this.http.get<any>(this.url);
  // }
}
