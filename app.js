function  ubdateProductNumber(prroduct,price,isIncreasing){
    const productInput = document.getElementById(prroduct+ '-number');
let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseFloat(productNumber) +1 ;
    }
 else if(productNumber > 0){

    productNumber= parseFloat(productNumber) - 1 ;
 }
 productInput.value= productNumber ;

// ubdate total
const productTotal = document.getElementById( prroduct+'-total');
productTotal.innerText = productNumber * price ;
// calculat total
calculator();

}

function getInputValue(prroduct){
    const productInput = document.getElementById(prroduct+'-number');
    const productnumber = parseFloat(productInput.value) ;
    return productnumber;

}

function calculator(){
 
    const phontotal = getInputValue('phon') * 1219;
    const caseTotal =  getInputValue('case') * 59 ;
    const subTotal = phontotal+ caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax ;
// console.log(subTotal);
    
//  ubdate on html
document.getElementById('sub-total').innerText= subTotal;
document.getElementById('tax-amount').innerText= tax;
document.getElementById('total-price').innerText= totalPrice;

}
// phon even handel

document.getElementById('phon-plus').addEventListener('click',function(){
    ubdateProductNumber('phon',1229,true);
    
})
document.getElementById('phon-minus').addEventListener('click',function(){
    ubdateProductNumber('phon',1229,false);
    
})


// case even handel
document.getElementById('case-plus').addEventListener('click', function(){
    ubdateProductNumber('case',59,true);
  
})
document.getElementById('case-minus').addEventListener('click', function(){

    ubdateProductNumber( 'case',59,false);
  
})
