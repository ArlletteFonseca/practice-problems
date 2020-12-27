
function getCount(str) {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for(let i = 0; i <= str.length - 1; i++) {
    for(let j = 0; j<vowels.length -1; j++) {
      if(str[i] === vowels[j]) {
        vowelsCount++
      }
    }
  }
  return vowelsCount;
}

getCount("abracadabra");
getCount("Hello World");

