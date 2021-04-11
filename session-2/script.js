
function add()
{
    var n1 = Number(document.getElementById('digit-1').value);
    var n2 = Number(document.getElementById('digit-2').value);
    var result = document.getElementById('result');
    var sum = n1+n2;
    result.value=sum;
}

function subtract()
{
    var n1 = Number(document.getElementById('digit-1').value);
    var n2 = Number(document.getElementById('digit-2').value);
    var result = document.getElementById('result');
    var sum = n1-n2;
    result.value=sum;
}

function multiply()
{
    var n1 = Number(document.getElementById('digit-1').value);
    var n2 = Number(document.getElementById('digit-2').value);
    var result = document.getElementById('result');
    var sum = n1*n2;
    result.value=sum;
}