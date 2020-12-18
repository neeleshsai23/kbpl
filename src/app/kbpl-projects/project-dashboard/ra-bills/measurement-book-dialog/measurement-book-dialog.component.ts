import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-measurement-book-dialog',
  templateUrl: './measurement-book-dialog.component.html',
  styleUrls: ['./measurement-book-dialog.component.scss']
})
export class MeasurementBookDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<MeasurementBookDialogComponent>) { }

  ngOnInit() {
  }

  values: any = [
    {serial:"1.1.2",category:"Mechanical",item:"Pedestal",description:"Fans",unit:"Nos.",target:"126",previous:"78",currentq:"20",rate:"1500",billed:"117000",paid:"110000",balance:"7000",current:"30000",receivable:"37000",notes:"Make deployed is Orient"},
    {serial:"1.1.3",category:"Mechanical",item:"Pedestal",description:"Fans",unit:"Nos.",target:"126",previous:"78",currentq:"20",rate:"1500",billed:"117000",paid:"110000",balance:"7000",current:"30000",receivable:"37000",notes:"Make deployed is Orient"},
    {serial:"1.1.4",category:"Mechanical",item:"Pedestal",description:"Fans",unit:"Nos.",target:"126",previous:"78",currentq:"20",rate:"1500",billed:"117000",paid:"110000",balance:"7000",current:"30000",receivable:"37000",notes:"Make deployed is Orient"},
    {serial:"1.1.5",category:"Mechanical",item:"Pedestal",description:"Fans",unit:"Nos.",target:"126",previous:"78",currentq:"20",rate:"1500",billed:"117000",paid:"110000",balance:"7000",current:"30000",receivable:"37000",notes:"Make deployed is Orient"}



  ]

  close(): void {
    this.dialogRef.close();
  }

  @ViewChild('fileInput')
  fileInput;

  file: File | null = null;

  public filterToggle: boolean;

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }


}
