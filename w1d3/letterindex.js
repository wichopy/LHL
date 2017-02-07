function letterindex(strarr) {
    var sentence = strarr.join(" ");
    //console.log(sentence);
    var letterindexcount = {};
    var i = 0;
    for (var index in sentence) {
        //console.log(index);
        if (sentence[i] in letterindexcount) {
            letterindexcount[sentence[i]].push(index);
        }
        else {
            letterindexcount[sentence[i]] = [index];
        }
        i = i + 1;
    }

    return letterindexcount;

/*
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
  */
}

var  input = process.argv.slice(2);
console.log(letterindex(input));