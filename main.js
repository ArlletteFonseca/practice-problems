
var arrayStringsAreEqual = function (word1, word2) {
  const one = word1.join('');
  const two = word2.join('');
  if (one === two) {
    console.log(true)
    return true;
  } else {
    console.log(false);
    return false;
  }
};

arrayStringsAreEqual(["ab", "c"],["a", "bc"])
arrayStringsAreEqual(["a", "cb"], ["ab", "c"])
arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])

