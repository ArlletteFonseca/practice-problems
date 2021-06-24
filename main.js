function arrayOfMultiples(num, length) {
  const arr = [];
 let newNum = 0;
  for( let i = 0; i <= length - 1; i++) {
   newNum += num;
    arr.push(newNum);
  }
return arr;
}

arrayOfMultiples(7, 5)
//  ➞[7, 14, 21, 28, 35]

arrayOfMultiples(12, 10)
// ➞[12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6)
//  ➞[17, 34, 51, 68, 85, 102]
