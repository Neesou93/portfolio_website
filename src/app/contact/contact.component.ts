import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('privatePolicyCheckbox') privatePolicyCheckbox!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  checkboxValue: boolean = false;
  nameInputValid: boolean = false;
  emailInputValid: boolean = false;
  massageInputValid: boolean = false;
  nameInputChecked: boolean = false;
  emailInputChecked: boolean = false;
  massageInputChecked: boolean = false;

  messageSend: boolean = false;

  inputName: string = '';
  inputEmail: string = '';
  inputMassage: string = '';
  isValid: boolean = false;

  constructor(private router: Router) {}
  
  onInputChange(inputValue: string, name: string) {
    if (name == 'name') {
      if (inputValue) {
        this.nameInputValid = true;
      } else {
        this.nameInputValid = false;
      }
      this.nameInputChecked = true;
    }
    if (name == 'email') {
      this.emailInputValid = this.isValidEmail(inputValue);
      this.emailInputChecked = true;
    }
    if (name == 'massage') {
      if (inputValue) {
        this.massageInputValid = true;
      } else {
        this.massageInputValid = false;
      }
      this.massageInputChecked = true;
    }
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  sendContact() {
    this.checkInputAll();

    if (this.nameInputValid && this.emailInputValid && this.massageInputValid) {
      console.log(
        'Alle Felder sind Valide und Nachricht könnte verschickt werden.'
      );
    }
  }
  checkInputAll() {
    this.nameInputChecked = true;
    this.emailInputChecked = true;
    this.massageInputChecked = true;
    this.emailInputValid = this.isValidEmail(this.inputEmail);
  }

  async sendMessage() {
    this.checkInputAll();

    if (this.nameInputValid && this.emailInputValid && this.massageInputValid) {
      console.log('Sending Mail', this.myForm);
      let nameField = this.nameField.nativeElement;
      let emailField = this.emailField.nativeElement;
      let messageField = this.messageField.nativeElement;
      let privatePolicyCheckbox = this.privatePolicyCheckbox.nativeElement;
      let sendButton = this.sendButton.nativeElement;
      nameField.disabled = true;
      emailField.disabled = true;
      messageField.disabled = true;
      privatePolicyCheckbox.disabled = true;
      sendButton.disabled = true;

      let emailText = `
    Nachricht von: ${nameField.value}
    Mail-Adresse: ${emailField.value}
    Message: 
    ${messageField.value}`;

      let fd = new FormData();
      fd.append('name', nameField.value);
      fd.append('message', emailText);

      // senden
      await fetch(
        'https://pascal-dietz.developerakademie.net/send_mail/send_mail.php',
        {
          method: 'POST',
          body: fd,
        }
      );
      this.messageSend = true;

      setTimeout(() => {
        nameField.disabled = false;
        emailField.disabled = false;
        messageField.disabled = false;
        privatePolicyCheckbox.disabled = false;
        sendButton.disabled = false;
        nameField.value = '';
        emailField.value = '';
        messageField.value = '';
        this.nameInputChecked = false;
        this.emailInputChecked = false;
        this.massageInputChecked = false;
        this.messageSend = false;
      }, 4000);

      
    }
  }

  openPrivacyPolicy(){
    window.open('http://localhost:4200/privacy-policy')
  }
}
