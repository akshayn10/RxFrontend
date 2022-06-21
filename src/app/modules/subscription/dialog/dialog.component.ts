import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddOnUsage } from 'src/app/data/schema/addUsage';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  {


  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddOnUsage,
  ) { }



  ngOnInit() {
    console.log('Dialog got', this.data);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
