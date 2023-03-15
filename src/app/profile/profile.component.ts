import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileForm !: FormGroup;

  name: string | undefined;

  isFormSubmitted: boolean = false;

  constructor(private fBuilder: FormBuilder){

  }

  ngOnInit(){
   this.profileForm = this.fBuilder.group(
                          {
                            firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), 
                              Validators.pattern('[a-zA-z ]*')]],
                            lastName: ['', Validators.required],
                            userName: ['', [Validators.required, Validators.email]],
                            city: ['', Validators.required],
                            state: ['', Validators.required],
                            zipCode: ['', Validators.required],
                            termsAndConditions: ['', Validators.required]
                          }
                        )
      }

    get myForm(){
      return this.profileForm.controls;
    } 


  profileFormSubmit(){
    this.isFormSubmitted = true;
    console.log(this.profileForm.valid);
    if(this.profileForm.valid){
      alert("Form is Submitted" + this.profileForm.value);
      console.log(this.profileForm.value);
      // this.service.sendata(formdata).subscribe(
      //   () => alert("ducdess"),
      //   () => alert("error")
      // )
    }
    
  }

}
