import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-withdraw-response',
  templateUrl: './withdraw-response.component.html',
  styleUrls: ['./withdraw-response.component.css']
})
export class WithdrawResponseComponent {

  constructor(
    public dialogRef: MatDialogRef<WithdrawResponseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
