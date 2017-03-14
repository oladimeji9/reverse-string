function reverseString(word){
  let newword="";

  if(word.length === 0){
  	return null;
  }

  let i = word.length-1;
  
  while(i >= 0){
    newword+=word[i];
    i--
  }

  if(word === newword){
  	return true;
  }
  
  return newword;
}

module.exports = reverseString;