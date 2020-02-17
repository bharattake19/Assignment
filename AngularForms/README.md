-To run application, install Node Package.
-Install bootstrap and Configured
Forms
=========
1.Template Driven Form
    -app.component.ts
    -app.component.html
-Add Validation
-Show Custom Error Message
-Validate email address and required text
-After submit show form details on below of form
-Use set value funcation call on suggestUserName button and bind
    this.signUpForm.setValue({
-Patch value funcation is used to set particuler control values.
    this.signUpForm.form.patchValue

2.Reactive Form
----------------
    -reactive-form folder
        -reactive-form.component.ts
        -reactive-fomr.component.html
    -Use ReactiveFormComponent,FormGroup,FormControl,FormArray
    -Add validation for Required, email address (Validators.required, Validators.email)
    -User custom validation for name value this.forbiddenEmail if user name already exist then show error message
        for testing use test@gmail.com if this email id 
    -after focus out fire the name validation use Promise
    -use formArrayName for group of Element
    -Create dynamic control and add into FormArray and bind into HTML in ngFor base on Add Hobby Click buttton.
    -Add email id duplicate validation on focus out of email filed and use setTimeOut() funcation to call to check email id.
    -On ngOnint() bind default value using setValue function(Code Comment) and set particular control values using patchValue() funcation.
    -For hobbies use formArray to generate dynamic controls.
    -Same as email forbidden use name exclude name form name array as forbiddenUserName = ['Bharat', 'Sham', 'Amit'];
