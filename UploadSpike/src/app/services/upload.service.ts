import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Img } from '../model/img';
import { readFileSync, writeFileSync, promises as fsPromises } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url = "http://localhost:3000/img";
  

  constructor(private http: HttpClient) { }

  upload(file: any) : Observable<Img>{

    //metedologia con storage esterno
    //const formData = new FormData();

    //metodologia mockata
    let appendImage: Img = {
      path: "assets/img/" + file.name
    }
    
    //formData.append("file", file, file.name);
    const fs = require( '@stdlib/fs-write-file' );
    fs.writeFile(appendImage.path, file); 
    
    
    return this.http.post<Img>(this.url, appendImage);
  }

  getAll() : Observable<Img[]>{
    return this.http.get<Img[]>(this.url);
  }
}
