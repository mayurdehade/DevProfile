import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http: HttpClient) { }

  sendMail(emailData: any):Observable<any> {
    return this.http.post('https://api.web3forms.com/submit', emailData);
  }

}
