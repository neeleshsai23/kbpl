import { AddStocktransComponent } from './add-stocktrans/add-stocktrans.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-stock-transfer',
  templateUrl: './stock-transfer.component.html',
  styleUrls: ['./stock-transfer.component.scss']
})
export class StockTransferComponent implements OnInit {


items=[
{"serial":"1","stockno":"MRC/1236","title":"CHECK RC CONDITIONS","project":"XP","cat":"Electrical","reqitem":"5","appitem":"2","status":"Pending"},
{"serial":"2","stockno":"MRC/1245","title":"CHECK RC CONDITIONS","project":"IBW","cat":"Mechanical","reqitem":"6","appitem":"3","status":"Pending"},
{"serial":"3","stockno":"MRC/1255","title":"CHECK RC CONDITIONS","project":"SG","cat":"Electrical","reqitem":"7","appitem":"4","status":"Delay"},
{"serial":"4","stockno":"MRC/1266","title":"CHECK RC CONDITIONS","project":"MPK","cat":"Earth work","reqitem":"8","appitem":"5","status":"Pending"},
{"serial":"5","stockno":"MRC/1256","title":"CHECK RC CONDITIONS","project":"MRC","cat":"Electrical","reqitem":"9","appitem":"6","status":"Delay"},

]


  
 
constructor(public dialog:MatDialog) { }

ngOnInit() {
}

public opencontactDialog() {
  let dialogRef = this.dialog.open(AddStocktransComponent, {
   
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}
}