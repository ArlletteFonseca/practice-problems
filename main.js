var addTwoNumbers = function (l1, l2) {

  const arr = [];
  for (let i = 0; i <= l1.length - 1; i++) {
    for (let j = 0; j <= l2.length - 1; j++) {
       if(i === j) {
         arr.push(l1[i] + l2[j]);
       }
    }
  }
  for (let x = 0; x <= arr.length -1; x++) {
      if (arr[x] >= 10) {
           arr[x] = 0;
          x++;
          arr[x] = arr[x] + 1;
      }
  }
  console.log(arr.reverse());

}
addTwoNumbers([2, 4, 3],[5, 6, 4]);
// Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
// Output: [7, 0, 8]
// Explanation: 342 + 465 = 807.
