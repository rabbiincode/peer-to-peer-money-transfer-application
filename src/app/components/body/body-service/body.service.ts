import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BodyService {
  private httpClient: HttpClient

  constructor(private handler: HttpBackend) {
    this.httpClient = new HttpClient(handler)
  }

  sendMail(mail: object){
    return this.httpClient.post("https://formsubmit.co/c25a402810a1714a2d94140a4b7ef795", mail, {responseType: 'text'})
  }
}
