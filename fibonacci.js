var num1 = 1;
var num2 = 1;

for (var i = 0; i <10; i++){
  document.write(num1 + '<br/>');
  document.write(num2 + '<br/>');
  num1 = num1 + num2;
  num2 = num2 + num1;
}

