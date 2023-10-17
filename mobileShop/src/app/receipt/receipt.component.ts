import { Component } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent {
  backgroundUrl="assets/login/Vector.png"
  receView:any;
  x:any;
  constructor() {
    this.receView=localStorage.getItem('receipt');
     this.x =JSON.parse(this.receView);
    console.log(this.receView);
  }
}
