import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  submitted=false;
  logoPreviewPath!: string;
  imageSelected:boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['',[ Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      userName: ['',[ Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required,Validators.minLength(8)]],
      logoPath: [''],
      logoImage: [null,[Validators.required]],
      // companyName:['',[Validators.required]],
    },
    {
      validator: this.ConfirmedValidator('password', 'confirmPassword'),
    }
    )
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}


ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

onFileChange(event: any) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.registerForm.patchValue({
      logoImage: file,
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.logoPreviewPath = reader.result as string;
    }
    reader.readAsDataURL(file);
    this.imageSelected = true;
  }
}
}
