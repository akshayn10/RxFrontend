import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import{AddOnService} from 'src/app/data/service/AddOn/add-on.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-on-dialog',
  templateUrl: './add-on-dialog.component.html',
  styleUrls: ['./add-on-dialog.component.css']
})
export class AddOnDialogComponent implements OnInit {
  

  addOnForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(
    public dialogRef: MatDialogRef<AddOnDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
    private fb: FormBuilder,
    private addOnService:AddOnService)
     { 
     
      console.log("product id "+this.data.productId);
     }

    
  

  ngOnInit() {
   

    this.addOnForm = this.fb.group({

      name: ['', [Validators.required]],
      unitOfMeasure: ['', [Validators.required]] ,
      productId: [this.data.productId, [Validators.required]]
    })
  }

  get f() {
    return this.addOnForm.controls;

  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.addOnForm.value);
    if (this.submitted == true) {
      return;
    }

    this.addOnService
    .createAddOn(this.data.productId, this.addOnForm.value)
    .subscribe((res) => {
      console.log(res);
      this.submitted = true;
      this.addOnForm.reset();
      this.ngOnInit();
    })


  }
}
