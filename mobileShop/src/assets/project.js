var productNameInp = document.getElementById("productNameInput");
var productPriceInp = document.getElementById("productPriceInput");
var productCategoryInp = document.getElementById("productCategoryInput");
var productDescInp = document.getElementById("productDescInput");
var productsContainer ;
console.log(productNameInp);
if(localStorage.getItem("myProducts")==null)
{
    productsContainer=[];
}
else{
   productsContainer= JSON.parse(localStorage.getItem("myProducts"));
   console.log(productsContainer);
   displayProducts();
}
function addProduct ()
{
    var product =
    {
        name: productNameInp.value,
        price: productPriceInp.value,
        category: productCategoryInp.value,
        Desc: productDescInp.value
    }
    productsContainer.push(product);

    localStorage.setItem("myProducts",JSON.stringify(productsContainer) );
    displayProducts();
}

function displayProducts()
{
    var cont = ``;

    for( var i =0 ;i<productsContainer.length;i++)
    {
        cont+=`<tr>
        <td>`+(i+1)+`</td>
        <td>`+productsContainer[i].name+`</td>
        <td>`+productsContainer[i].price+`</td>
        <td>`+productsContainer[i].category+`</td>
        <td>`+productsContainer[i].Desc+`</td>
        <td><button class='btn btn-warning'>Update</button></td>
        <td><button onclick='deleteProduct(`+i+`)' class='btn btn-danger'>Delete</button></td>
        </tr>`;
    }
    document.getElementById("tableBody").innerHTML =cont;
}
function clearForm()
{
    productNameInp.value="";
    productPriceInp.value="";
    productCategoryInp.value="";
    productDescInp.value="";
}


// function searchProducts(term)
// {
//     var cont =``;
//     var cont2=``;
//     var newTxt=``;
//     for(var i=0;i<productsContainer.length;i++)
//     {
//         if(productsContainer[i].name.includes(term)==true)
//         {
//             cont+=`<tr>
//             <td>`+productsContainer[i].name+`</td>
//             <td>`+productsContainer[i].price+`</td>
//             <td>`+productsContainer[i].category+`</td>
//             <td>`+productsContainer[i].Desc+`</td>
//             </tr>`;
//             newTxt=productsContainer[i].name.replace(term,'<span style="color:red">'+term+'</span>')
//             cont2+=`<a href="#" class="d-block">`+newTxt+`</a>`;
//         }
//     }
//     document.getElementById("tableBody").innerHTML=cont;
//     document.getElementById("searchResults").innerHTML=cont2;

// }


function deleteProduct(index)
{
    productsContainer.splice(index,1);
    localStorage.setItem("myProducts",JSON.stringify(productsContainer) );
    displayProducts();
}
