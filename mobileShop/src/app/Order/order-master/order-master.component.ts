import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/i-category';
import { IProducts } from 'src/app/Models/i-products';
import { ProductListComponent } from '../product-list/product-list.component';
@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements AfterViewInit{
  prdList: IProducts[] = [];
  prdListOfCat:IProducts[]=[];
  selectedCatID:number=0;
  categoryList:ICategory[];
  receivedOrderTotalPrice:number=0;
  @ViewChild('clientNameInp') clientNameInpElem!:ElementRef; //Non-null asseration operator
  @ViewChild (ProductListComponent)prdListCompObj!:ProductListComponent;
  constructor(){
    this.categoryList=[
      {id:1,name:'Laptop'},
      {id:2,name:'Tablates'},
      {id:3,name:'Mobile'}
    ]
  }
  ngAfterViewInit(): void {
      this.clientNameInpElem.nativeElement.value="Your Name Here";
      
    }
  onTotalPriceChanged(totalPrice:number){
   this.receivedOrderTotalPrice=totalPrice;
  }
  completeOrder(){
    //for Test
    //this.prdListCompObj.prdList[1].quantity-=1;
  }
}
