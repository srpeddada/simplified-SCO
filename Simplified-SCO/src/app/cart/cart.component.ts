import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }
  allitems
    large = false;
    nolist = true;
  ngOnInit(): void {
     if ($(window).width() >= 700) {
      this.large = true;
    }
  }

}
