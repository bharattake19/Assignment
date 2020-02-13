import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  signUpform: FormGroup;
  genders = ['Male', 'Female'];
  forbiddenUserName = ['Bharat', 'Sham', 'Amit'];
  constructor() { }

  ngOnInit() {
    this.signUpform = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signUpform.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    this.signUpform.statusChanges.subscribe((status) => {
      console.log(status);
    });

    // this.signUpform.setValue(
    //   {
    //     'userData':{
    //       'username':'Bharat Take',
    //       'email':'bharat@gmail.com'
    //     },
    //     'gender':'Male',
    //     'hobbies':[]
    //   }
    // );
    this.signUpform.patchValue(
      {
        'userData': {
          'username': 'Bharat'
        }
      }
    );
  }

  onSubmit() {
    console.log(this.signUpform.value);
    this.signUpform.reset();
  }
  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpform.get('hobbies')).push(control);
  }
  forbiddenName(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserName.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          resolve({ 'emailIsForbbiden': true });
        } else {
          resolve(null);
        }
      }, 2500);
    });
    return promise;
  }
}
