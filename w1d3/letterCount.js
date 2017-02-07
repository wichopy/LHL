function countLetters(strarr) {
    //console.log(strarr);
    var singleline = [];
    for (var word of strarr) {
        //console.log(word);
        for (var letter of word) {
            //console.log(letter);
            singleline.push(letter);
        }

  }
  var lettercount = { };
  //console.log(singleline);
  singleline.map( (letter) => {
    //console.log(longest)
    //each line of text is longestword.length+2 for each * + 1 space.
    if (letter in lettercount){
      lettercount[letter] += 1;
    }
    else {lettercount[letter] = 1;}
  })
  return lettercount;
}

var  input = process.argv.slice(2);
console.log(countLetters(input));