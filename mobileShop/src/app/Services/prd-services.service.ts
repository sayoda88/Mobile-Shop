import { Injectable } from '@angular/core';
import { IProducts } from '../Models/i-products';

@Injectable({
  providedIn: 'root'
})
export class PrdServicesService {

  private prdList:IProducts[];
  constructor() {
    this.prdList=[
      {id:100,name:'Samsung a10',price:22000,quantity:1,imgURL:'assets/prod/img1.jpg',categoryID:1},
      {id:22,name:'Samsung a14s',price:3000,quantity:3,imgURL:'assets/prod/img2.jpg',categoryID:1},
      {id:320,name:'iphone 11 ',price:2000,quantity:1,imgURL:'assets/prod/img3.jpg',categoryID:2},
      {id:45,name:'iphone 13ProMax',price:1000,quantity:2,imgURL:'assets/prod/img4.jpg',categoryID:2},
      {id:555,name:'Samsung A23 ',price:3300,quantity:7,imgURL:'assets/prod/img5.jpg',categoryID:3},
      {id:123,name:'Samsung Note 10',price:6000,quantity:5,imgURL:'assets/prod/img6.jpg',categoryID:3}
    ];
   }

   getAllProducts():IProducts[]
   {
    return this.prdList;
   }

   getProductsByCatID(cID:number):IProducts[]{
      if (cID==0)
        return this.prdList;
      else
       return this.prdList.filter(prd=>prd.categoryID==cID);
   }
   getProductsByID(pID:number):IProducts | null
   {
      let foundProduct= this.prdList.find(prd=>prd.id==pID);
      return foundProduct? foundProduct :null;
   }
   getPrdIDs():number[]
   {
    let prdIDs:number[]= this.prdList.map(prd=>prd.id);
    return prdIDs;
   }

}
