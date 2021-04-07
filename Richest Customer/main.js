var maximumWealth = function maximumWealth (accounts) {
let arr = [];

 for (let i = 0; i <= accounts.length -1; i++) {
   const myaccounts = accounts[i].reduce((a,b) => a + b);
 arr.push(myaccounts);
 }
 const max = arr.reduce((a , b) => Math.max(a,b))
 return max;
}

maximumWealth([[1, 2, 3], [3, 2, 1]]);
 maximumWealth([[1, 5], [7, 3], [3, 5]]);
