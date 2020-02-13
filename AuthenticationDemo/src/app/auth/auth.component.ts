import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authservice, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading = false;
  errorMessage: string = null;

  constructor(private service: authservice,private route:Router) { }

  ngOnInit() {
  }
  onSwtchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmitForm(formData: NgForm) {
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;

    if (!formData.valid) {
      return;
    }
    if (this.isLoginMode) {
      authObs = this.service.login(formData.value.email, formData.value.password);
    }
    else {
      authObs = this.service.singnUp(formData.value.email, formData.value.password);
    }
    authObs.subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
      this.route.navigate(['/recipes']);
    }, errData => {
      this.isLoading = false;
      console.log(errData);
      this.errorMessage = errData;
    });
    formData.reset();
  }
}
