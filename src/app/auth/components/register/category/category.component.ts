import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss','../../login/login.component.scss'],
})
export class CategoryComponent implements OnInit {
  value: number = -1;

  selectedCardIndex = -1;

  constructor() {}

  ngOnInit() {}

  setValue(selectedCard: number) {
    this.value = selectedCard;
  }
}
