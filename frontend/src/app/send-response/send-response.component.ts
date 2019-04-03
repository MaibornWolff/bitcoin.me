import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-send-response',
  templateUrl: './send-response.component.html',
  styleUrls: ['./send-response.component.css']
})
export class SendResponseComponent {

  constructor(
    public dialogRef: MatDialogRef<SendResponseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
