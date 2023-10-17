import { Component } from '@angular/core';
import{FormGroup,FormControl}from'@angular/forms';
import { Router } from '@angular/router';
declare function addProduct():any;
declare function displayProducts():any;
@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent {
cashier:FormGroup=new FormGroup({
  'id':new FormControl(),
  'empId':new FormControl(),
  'customerName':new FormControl(),
  'price':new FormControl(),
  'quantity':new FormControl(),
  'type':new FormControl()
});
cashierContainer:any;
receipt:any;
constructor(private _Router:Router){
   if(localStorage.getItem("myProducts")==null)
   {
       this.cashierContainer=[];
   }
   else{
      this.cashierContainer= this.cashier.value;
    displayProducts();
     console.log(this.cashierContainer);
   }
}


navRece(){
this._Router.navigate(['/receipt'])
}
addProduct (formData:any)
{
  console.log(formData.value);
  this.receipt=formData.value;
  localStorage.setItem('receipt',JSON.stringify(this.receipt));
  this.cashierContainer.push(formData.value);
  console.log(this.cashierContainer);
}

}






  // receiptID:any;
  // empID:any;
  // custName:any;
  // price:any;
  // quantity:any;
  // type:any;
  // productsContainer:any;






    //  let product=
  //  {
  //     id: this.receiptID,
  //      empId: this.empID,
  //      customerName: this.custName,
  //      price:this.price,
  //      quantity:this.quantity,
  //      type:this.type
  //  }
   
//  console.log(product);
//  if(localStorage.getItem("myProducts")==null)
//  {
//     this.productsContainer=[];
//  }
//  else{
//     this.productsContainer= product;
//     console.log(this.productsContainer);
//     displayProducts();
//  }



    //  this.productsContainer.push(product);
    // localStorage.setItem("myProducts",JSON.stringify(this.productsContainer) );
    // this.displayProducts();



    // displayProducts()
// {
//     var cont = ``;

//     for( var i =0 ;i<this.productsContainer.length;i++)
//     {
//         cont+=`<tr>
//         <td>`+(i+1)+`</td>
//         <td>`+this.productsContainer[i].+`</td>
//         <td>`+productsContainer[i].price+`</td>
//         <td>`+productsContainer[i].category+`</td>
//         <td>`+productsContainer[i].Desc+`</td>
//         <td><button class='btn btn-warning'>Update</button></td>
//         <td><button onclick='deleteProduct(`+i+`)' class='btn btn-danger'>Delete</button></td>
//         </tr>`;
//     }
//     // document.getElementById("tableBody").innerHTML =cont;
// }