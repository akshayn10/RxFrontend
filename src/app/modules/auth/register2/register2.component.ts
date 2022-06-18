import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  isLoading = false;
  registerForm2: FormGroup = new FormGroup({});
  submitted=false;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {
    this.registerForm2 = this.formBuilder.group({
      description: ['',[ Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['',[ Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      country:['',[Validators.required]],
      // plan:['',[Validators.required]],
      // planCycle:['',[Validators.required]],
    })
  }

  get f() { return this.registerForm2.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm2.invalid) {
        return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm2.value))
  }
}
