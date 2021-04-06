
//------------

var num;
for (num = 1; num <= 100; num ++) {
  var fizz = num % 3;
  var buzz = num % 5;
  if (fizz == 0 && buzz !== 0){
    console.log('Fizz')
  }
  else if (fizz !== 0 && buzz == 0){
    console.log('Buzz')
  }
  else if ( fizz == 0 || buzz == 0){
    console.log('Fizzbuzz')
  }
  else {
    console.log(num);
  }
}
