import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.css']
})
export class Register3Component implements OnInit {
  registerForm3: FormGroup = new FormGroup({});
  submitted=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm3 = this.formBuilder.group({
      plan:['',[Validators.required]],
      planCycle:['',[Validators.required]],
    })
  }

  get f() { return this.registerForm3.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm3.invalid) {
        return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm3.value))
  }

}
