import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-show-reqitem',
  templateUrl: './show-reqitem.component.html',
  styleUrls: ['./show-reqitem.component.scss']
})
export class ShowReqitemComponent implements OnInit {
  items=[
    {"selectitemcat":"Electrical","selectitem":"Socket","due":"11/10/2020","qtyavailable":"45","requiredqty":"55"},
    {"selectitemcat":"Electrical","selectitem":"wire","due":"12/10/2020","qtyavailable":"44","requiredqty":"56"},
    {"selectitemcat":"Mechanical","selectitem":"Screw","due":"13/10/2020","qtyavailable":"43","requiredqty":"57"},
    {"selectitemcat":"Mechanical","selectitem":"Axe","due":"14/10/2020","qtyavailable":"42","requiredqty":"58"},
    {"selectitemcat":"Electrical","selectitem":"Lights","due":"15/10/2020","qtyavailable":"41","requiredqty":"59"},
    {"selectitemcat":"Electrical","selectitem":"Socket","due":"11/10/2020","qtyavailable":"45","requiredqty":"55"},
    {"selectitemcat":"Electrical","selectitem":"wire","due":"12/10/2020","qtyavailable":"44","requiredqty":"56"},
    {"selectitemcat":"Mechanical","selectitem":"Screw","due":"13/10/2020","qtyavailable":"43","requiredqty":"57"},
    {"selectitemcat":"Mechanical","selectitem":"Axe","due":"14/10/2020","qtyavailable":"42","requiredqty":"58"},
    {"selectitemcat":"Electrical","selectitem":"Lights","due":"15/10/2020","qtyavailable":"41","requiredqty":"59"},
    
    
    ]
    
 
    constructor(public dialogRef: MatDialogRef<ShowReqitemComponent>,@Inject(MAT_DIALOG_DATA) public user: number) { 
      console.log(this.user);
     }
  
    
    ngOnInit() {
      
    }
  
    close(): void {
      this.dialogRef.close();
    }
  
    saveStep() {
      this.dialogRef.close();
    }
  
  }
  
  