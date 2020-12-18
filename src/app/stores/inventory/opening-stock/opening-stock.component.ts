import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opening-stock',
  templateUrl: './opening-stock.component.html',
  styleUrls: ['./opening-stock.component.scss']
})
export class OpeningStockComponent implements OnInit {




  items=[
    {"stockdate":"12/11/2020","total":"15","imported":"10","exceptions":"0","remarks":"Generate OTP","by":"Parmeet","date":"13/11/2020"},
    {"stockdate":"13/11/2020","total":"16","imported":"11","exceptions":"1","remarks":"Send Email","by":"Robert","date":"14/11/2020"},
    {"stockdate":"14/11/2020","total":"17","imported":"12","exceptions":"2","remarks":"Generate OTP","by":"Parmeet","date":"15/11/2020"},
    {"stockdate":"15/11/2020","total":"18","imported":"13","exceptions":"3","remarks":"Send Email","by":"Jasveer","date":"16/11/2020"},
    {"stockdate":"16/11/2020","total":"19","imported":"14","exceptions":"4","remarks":"Generate OTP","by":"Parmeet","date":"17/11/2020"},
    ]
    
    

  constructor() { }

  ngOnInit() {
  }

}
