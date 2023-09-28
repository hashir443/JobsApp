import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-number',
  templateUrl: './mobile-number.component.html',
  styleUrls: [
    './mobile-number.component.scss',
    '../../login/login.component.scss',
  ],
})
export class MobileNumberComponent implements OnInit {

  selectionMade: boolean = false;
  selectedCountry: any;

  countries: any = [
    {
      id:1,
      code:'+92',
      name:'PK',
      fName:'PAK',
      imageUrl:'https://animalz.pk:8094/files/7bab1729-fb2d-48f4-b511-d9501f35b37d.png'
    },
    {
      id:2,
      code:'+86',
      fName:'CHN',
      name:'CN',
      imageUrl:'https://animalz.pk:8094/files/f20019ad-1404-414a-8105-384ef7f354d2.png'
    },
    {
      id:3,
      code:'+01 ',
      fName:'USA',
      name:'US',
      imageUrl:'https://animalz.pk:8094/files/7d4d967e-76ea-4811-960d-a9bf19af2d1b.png'
    }
  ]
  constructor() {}

  ngOnInit() {
  }

  showDropDown(){
    this.selectionMade = true
  }

  chooseOption(countryDetial: any){
    this.selectedCountry = countryDetial
    this.selectionMade = false;

  }
}
