function theLongestWord(sentence){
    // In the scenario of comparing
    var max = 0;
    var arrSentence = sentence.split(' ');
    for (var i=0; i < arrSentence.length; i++){
      if (arrSentence[i].length > max) {
        max = arrSentence[i].length;
      }
    }
    return max;
  }
  console.log(theLongestWord('The quick brown fox jump over the lazy dog'));
  console.log(theLongestWord('WalidWazini bin Saiful Bahri'));