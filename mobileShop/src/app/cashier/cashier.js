var ReceiptInput = document.getElementById("ReceiptInput");
var empInput = document.getElementById("empInput");
var CustomerInput = document.getElementById("CustomerInput");
var PriceInput = document.getElementById("PriceInput");
var QuantityInput = document.getElementById("QuantityInput");
var typeInput = document.getElementById("typeInput");
var productsContainer ;

if(localStorage.getItem("myProducts")==null)
{
    productsContainer=[];
}
else{
   productsContainer= JSON.parse(localStorage.getItem("myProducts"));
   displayProducts();
}
export function addProduct ()
{
    var product =
    {
        id: ReceiptInput.value,
        empId: empInput.value,
        customerName: CustomerInput.value,
        price: PriceInput.value,
        quantity:QuantityInput.value,
        type:typeInput.value
    }
    productsContainer.push(product);

    localStorage.setItem("myProducts",JSON.stringify(productsContainer) );
    displayProducts();
}

export function displayProducts()
{
    var cont = ``;

    for( var i =0 ;i<productsContainer.length;i++)
    {
        cont+=`<tr>
        <td>`+(i+1)+`</td>
        <td>`+productsContainer[i].empId+`</td>
        <td>`+productsContainer[i].customerName+`</td>
        <td>`+productsContainer[i].price+`</td>
        <td>`+productsContainer[i].quantity+`</td>
        <td>`+productsContainer[i].type+`</td>
        <td><button class='btn btn-warning'>Print</button></td>
        <td><button onclick='deleteProduct(`+i+`)' class='btn btn-danger'>Delete</button></td>
        </tr>`;
    }
    document.getElementById("tableBody").innerHTML =cont;
}
export function clearForm()
{
    productNameInp.value="";
    productPriceInp.value="";
    productCategoryInp.value="";
    productDescInp.value="";
}


function searchProducts(term)
{
    var cont =``;
    var cont2=``;
    var newTxt=``;
    for(var i=0;i<productsContainer.length;i++)
    {
        if(productsContainer[i].name.includes(term)==true)
        {
            cont+=`<tr>
            <td>`+productsContainer[i].name+`</td>
            <td>`+productsContainer[i].price+`</td>
            <td>`+productsContainer[i].category+`</td>
            <td>`+productsContainer[i].Desc+`</td>
            </tr>`;
            newTxt=productsContainer[i].name.replace(term,'<span style="color:red">'+term+'</span>')
            cont2+=`<a href="#" class="d-block">`+newTxt+`</a>`;
        }
    }
    document.getElementById("tableBody").innerHTML=cont;
    document.getElementById("searchResults").innerHTML=cont2;

}


export function deleteProduct(index)
{
    productsContainer.splice(index,1);
    localStorage.setItem("myProducts",JSON.stringify(productsContainer) );
    displayProducts();
}
