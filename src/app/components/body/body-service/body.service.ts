import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BodyService {

  constructor(private http: HttpClient) {}

  sendMail(mail: object){
    return this.http.post("https://formsubmit.co/c25a402810a1714a2d94140a4b7ef795", mail)
  }
}
