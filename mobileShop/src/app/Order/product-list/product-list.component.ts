import { Component ,EventEmitter,Input,OnChanges,OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IProducts } from 'src/app/Models/i-products';
import{PrdServicesService}from'src/app/Services/prd-services.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges, OnInit {
  orderTotalPrice:number=0;
  orderDate:Date;
  @Input() sentCatID: number=0;
  @Output() totalPriceChanged:EventEmitter<number>;
  prdListOfCat:IProducts[]=[];
  searchInp:any;
 mobId:any;
 bId:any
  searchMobile:FormGroup=new FormGroup({
    'mobileId':new FormControl(''),
    'branchId':new FormControl('')
  });
  constructor(private _PrdServicesService:PrdServicesService,private  router:Router )
  {
    this.totalPriceChanged=new EventEmitter<number>;
    this.orderDate=new Date();
  }

  ngOnChanges(): void {
    this.prdListOfCat=this._PrdServicesService.getProductsByCatID(this.sentCatID)
  }
  
  ngOnInit(): void {
    this.prdListOfCat=this._PrdServicesService.getAllProducts();
}

search(formData){
  this.searchInp=formData.value;
  this.mobId=this.searchInp.mobileId;
  this.bId=this.searchInp.branchId;
  console.log(this.searchInp);
  console.log(this.mobId);
  console.log(this.bId);
  if(this.mobId===this.bId){
    alert("Phone is avaliable");
  }
  else{
    alert("Phone is not avaliable");
  }
}
buy(prdPrice:number,count:any){

  this.orderTotalPrice+= +count * prdPrice;
  //Excute Event
  this.totalPriceChanged.emit(this.orderTotalPrice)
}

openPrdDetails(prdID:number){
  this.router.navigate(['/Products',prdID]);
}

}
