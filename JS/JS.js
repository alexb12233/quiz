var x=0;
console.log(x)
function question(){
    console.log(x)
    document.getElementById("clock").src="https://www.ikea.com/gb/en/images/products/pluttis-wall-clock-red__1013097_pe829051_s5.jpg?f=s";
}
function right(){
    x=1
    document.getElementById("count").innerHTML=x;
    document.getElementById("clock").src="https://dictionary.cambridge.org/images/thumb/check_noun_002_06440.jpg?version=6.0.43";
}

function wrong(){
    document.getElementById("clock").src="https://as2.ftcdn.net/v2/jpg/02/07/78/81/1000_F_207788180_FyFN1GVSmWuNIRN9eeF11AJSIKdz9pPE.jpg";
}