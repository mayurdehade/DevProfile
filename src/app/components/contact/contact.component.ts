import { Component } from '@angular/core';
import { ContactServiceService } from 'src/app/services/contact/contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
fullName: any;
email: any;
mobile: any;
company: any;
message: any;
subject: any;

constructor (private service: ContactServiceService) {}

emailData: any = {};

send() {
  if(this.company){
    this.emailData = {
      name: this.fullName,
      email: this.email,
      body: 'Company: ' + this.company + '\n' + 'Mobile: ' + this.mobile + '\n' + 'Message: ' + this.message,
      access_key: '37ed40f4-569a-4da1-a880-b98f05a6ef0c',
      subject: 'DevProfile: ' + this.subject,
      from_name: 'Contact Notification',
    };
  } else {
    this.emailData = {
      name: this.fullName,
      email: this.email,
      body: 'Mobile: ' + this.mobile + '\n' + 'Message: ' + this.message,
      access_key: '37ed40f4-569a-4da1-a880-b98f05a6ef0c',
      subject: 'DevProfile: ' + this.subject,
      from_name: 'Contact Notification',
    };
  }


  this.service.sendMail(this.emailData).subscribe((data) => {
    if(data.success) {
      alert('Message sent successfully !!! We will get back to you soon');
    } else {
      alert('Message not send');
    }
  });
}

}
