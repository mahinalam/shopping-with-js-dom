let serial = 0;
//get the data
document.getElementById('first-card').addEventListener('click', function(){
   serial++;
   const firstCard = document.getElementById('first-name').innerText;
   
   const firstCardPriceString = document.getElementById('first-price').innerText;
   const firstCardPrice = parseFloat(firstCardPriceString);
   
   
   const firstCardQuantityString = document.getElementById('first-quantity').innerText;
   const firstCardQuantity = parseFloat(firstCardQuantityString);
   const cardValue = firstCardQuantity * firstCardPrice
   setAttribute('first-card');
//show the data
displayData(firstCard,firstCardPrice,firstCardQuantity,cardValue)
});
document.getElementById('second-card').addEventListener('click', function(e){
   serial++;
   
   // console.log(e.target.parentNode.parentNode.children[0].innerText)
   const productName = e.target.parentNode.parentNode.children[0].innerText;
   const productprice = e.target.parentNode.parentNode.children[2].children[0].innerText;
   console.log(productprice);
   const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
   const sum  = parseFloat(productprice) + parseFloat(productQuantity);
   setAttribute('second-card');
   // console.log(typeof sum);
   // console.log(productQuantity)
   displayData(productName,productprice,productQuantity,sum);
});


document.getElementById('third-card').addEventListener('click', function(){
   serial++;
   const firstCard = document.getElementById('third-title').innerText;
   
   const firstCardPriceString = document.getElementById('third-price').innerText;
   const firstCardPrice = parseFloat(firstCardPriceString);
   
   
   const firstCardQuantityString = document.getElementById('third-quantity').innerText;
   const firstCardQuantity = parseFloat(firstCardQuantityString);
   const cardValue =  firstCardPrice - firstCardQuantity;
   setAttribute('third-card');
//show the data
displayData(firstCard,firstCardPrice,firstCardQuantity,cardValue)
});


document.getElementById('second-last').addEventListener('click', function(){
   serial++;
   const firstCard = document.getElementById('fourth-title').innerText;
   
   const firstCardPriceString = document.getElementById('fourth-price').innerText;
   const firstCardPrice = parseFloat(firstCardPriceString);
   
   
   const firstCardQuantityString = document.getElementById('fourth-quantity').innerText;
   const firstCardQuantity = parseFloat(firstCardQuantityString);
   const cardValue = firstCardPrice / firstCardQuantity;
   const total = cardValue.toFixed(2); 
   setAttribute('second-last');
//show the data
displayData(firstCard,firstCardPrice,firstCardQuantity,total)
});

document.getElementById('last-card').addEventListener('click', function(){
   
   serial++;
   const lastCard = document.getElementById('last-title').innerText;
   const lastCardPrice = document.getElementById('first-input').value;
 
   const lastPriceQuantity = document.getElementById('second-input').value;
   
   const lastTotal = parseInt(lastCardPrice) + parseInt(lastPriceQuantity);
  
   
     document.getElementById('first-input').value = null;
    document.getElementById('second-input').value = null;
   
    if(lastCardPrice==='' || lastCardPrice===null ){
      alert("Please Provide an valid data");
    }
    else if(lastPriceQuantity==='' || lastPriceQuantity===null){
      alert("Please Provide an valid data");
    }
    else{
      displayData(lastCard,lastCardPrice,lastPriceQuantity,lastTotal);
      setAttribute('last-card');
      document.getElementById('first-input').setAttribute('disabled', true)
      document.getElementById('second-input').setAttribute('disabled', true)
     };
   });
   
   // displayData(lastCard,lastCardPrice,lastPriceQuantity,lastTotal)
;

//disabled function call

function setAttribute(a){
 document.getElementById(a).setAttribute('disabled', true)
};
//table tr function called
function displayData(firstCard,firstCardPrice,firstCardQuantity,cardValue){
   const container = document.getElementById('table-container');
   const tr = document.createElement("tr");
   tr.innerHTML = `
   <td>${serial} </td>
   <td>${firstCard} </td>
   <td>${firstCardPrice} </td>
   <td>${firstCardQuantity} </td>
   <td>${cardValue} </td>
   
   `;
   container.appendChild(tr);
}