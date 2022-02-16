function getInputValue(product) {
    var calculatePrice = document.getElementById('price-' + product);
    calculatePrice = parseInt(calculatePrice.innerText);
    // console.log(calculatePrice);
    return calculatePrice;
}
function generateResult() {
    var phoneTotal = getInputValue('phn');
    var caseTotal = getInputValue('case');
    var subTotal = phoneTotal + caseTotal;
    document.getElementById('sub-total').innerText = subTotal;
    var taxTotal = parseFloat((0.1 * subTotal).toFixed(2));
    document.getElementById('tax-total').innerText = taxTotal;
    var totalCost = subTotal + taxTotal;
    document.getElementById('final-total').innerText = totalCost;
}

function generatePlusMinus(product, price, incDec) {
    var box1 = document.getElementById('box-' + product);
    box1.value = parseInt(box1.value);
    // console.log(box1.value);
    if (incDec == true) {
        box1.value++;
        box1 = box1.value;
    }
    else {
        if (box1.value > 0) {
            box1.value = box1.value - 1;
            box1 = box1.value;
        }
        else {
            box1.value = 0;
        }

    }
    var phonePrice = document.getElementById('price-' + product);
    var casePrice = document.getElementById('price-' + product);


    if (product = 'phn') {
        if (phonePrice.innerText == 0 && incDec == false) {
            phonePrice.innerText = 0;
        }
        else {
            phonePrice.innerText = price * box1;
        }

    }
    else if (product = 'case') {
        if (casePrice.innerText == 0 && incDec == false) {
            casePrice.innerText = 0;
        }
        else {
            casePrice.innerText = price * box1;
        }
    }
    generateResult();

    // // phonePrice = phonePrice.innerText;

    // var subTotal = document.getElementById('sub-total');
    // subTotal.innerText = parseInt(phonePrice.innerText) + parseInt(casePrice.innerText);
    // // console.log(subTotal.innerText);
    // var tax = document.getElementById('tax-total');
    // tax.innerText = 0.1 * subTotal.innerText;
    // var finalTotal = document.getElementById('final-total');
    // finalTotal.innerText = parseFloat(subTotal.innerText) + parseFloat(tax.innerText);
}
document.getElementById('plus-phn').addEventListener('click', function () {
    var price1 = generatePlusMinus('phn', 1219, true);

})
document.getElementById('minus-phn').addEventListener('click', function () {
    var price1 = generatePlusMinus('phn', 1219, false);
})
document.getElementById('plus-case').addEventListener('click', function () {
    var price1 = generatePlusMinus('case', 59, true);
})
document.getElementById('minus-case').addEventListener('click', function () {
    var price1 = generatePlusMinus('case', 59, false);
})