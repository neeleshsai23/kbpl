
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-lab',
  templateUrl: './add-lab.component.html',
  styleUrls: ['./add-lab.component.scss']
})
export class AddLabComponent implements OnInit {
  items = {
    Odisha: ["Bhubaneswar", "Puri", "Cuttack"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Kerala: ["kochi", "Kanpur"]
    }
  constructor(public dialogRef: MatDialogRef<AddLabComponent>) { }

  ngOnInit() {
  }
  close(): void { 
    this.dialogRef.close();
  }
  countryList: Array<any> = [
    { name: 'Telangana', cities: ['Hyderabad', 'Karimnagar', 'Warangal'] },
    { name: 'Karnataka', cities: ['Bangalore','Bidar','Haveri'] },
    { name: 'TamilNadu', cities: ['Chennai','Ooty','Madurai','Salem'] },
    { name: 'AndhraPradesh', cities: ['Vizag','Vijayawada','Kurnool'] },
    
  ];
  cities: Array<any>;
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  }
}
