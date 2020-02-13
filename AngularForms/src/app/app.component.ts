import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  answer = '';
  @ViewChild('f', { static: true }) signUpForm: NgForm;
  genders = ['Male', 'Female'];
  submitted=false;
  user={
    username:'',
    emailaddress:'',
    secretquestion:'',
    answer:'',
    gender:''
  }
  suggestUserName() {
    const suggestedName = "SupperUser";
    //You need to pass values, but if you want set single value then don't use this.
    // this.signUpForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:'default@gmail.com'
    //   },
    //   secret:'pet',
    //   questionAnswer:'Default Question answer.',
    //   gender:'Male'
    // });
    
    //If you want to set single value then use patchValue function
    this.signUpForm.form.patchValue(
      {
        userData: {
          username: suggestedName
        }
      }
    );
  }
  // onSubmit(form:NgForm) {
  //   console.log(form.value);
  // }
  onSubmit(form: NgForm) {
    //console.log(this.signUpForm.value);
    this.submitted=true;
    this.user.username=this.signUpForm.value.userData.username;
    this.user.emailaddress=this.signUpForm.value.userData.email;
    this.user.secretquestion=this.signUpForm.value.secret;
    this.user.answer=this.signUpForm.value.questionAnswer;
    this.user.gender=this.signUpForm.value.gender;

    this.signUpForm.resetForm();
  }
}
