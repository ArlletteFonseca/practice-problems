function arrayDiff(a, b) {
 const arr =[];
  for(let i = 0; i <= a.length - 1; i++) {
    if(a[i] !== Number(b)) {
      arr.push(a[i]);
    }
  }
  return arr;
}
arrayDiff([1, 2], [1])//  == [2]

arrayDiff([1, 2, 2, 2, 3], [2]) //== [1, 3]
