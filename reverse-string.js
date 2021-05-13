
//reverse string

function reverseString(str){
    var answer="";
    for(var i=str.length-1; i>=0; i--){
      answer += str.charAt(i);
    }
  return answer;
  }
  
  console.log(reverseString("Hello"));
  console.log(reverseString("desserts"));