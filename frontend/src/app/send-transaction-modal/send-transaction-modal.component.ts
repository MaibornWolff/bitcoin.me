import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
declare var TrezorConnect: any;
@Component({
  selector: 'app-send-transaction-modal',
  templateUrl: './send-transaction-modal.component.html',
  styleUrls: ['./send-transaction-modal.component.css']
})
export class SendTransactionModalComponent {

  constructor(
    public dialogRef: MatDialogRef<SendTransactionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    TrezorConnect.setCurrency('BTC');
  }

  sendTx() {
    TrezorConnect.composeAndSignTx(this.data, (result) => {
      if (result.success) {
        console.log('Transaction:', result.serialized_tx); // tx in hex
        console.log('Signatures:', result.signatures); // array of signatures, in hex
      } else {
        console.error('Error:', result.error); // error message
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
