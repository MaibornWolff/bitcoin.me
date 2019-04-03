import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-buy-response-modal',
  templateUrl: './buy-response-modal.component.html',
  styleUrls: ['./buy-response-modal.component.css']
})
export class BuyResponseModalComponent {

  constructor(
    public dialogRef: MatDialogRef<BuyResponseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
