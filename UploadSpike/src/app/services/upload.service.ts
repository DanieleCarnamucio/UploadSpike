import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url = "https://localhost:3000/"

  constructor(private http: HttpClient) { }

  upload(file: any) : Observable<any>{

    const formData = new FormData();

    formData.append("file", file, file.name);

    return this.http.post(this.url, formData);
  }
}
