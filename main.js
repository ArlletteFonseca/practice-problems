var maximumWealth = function maximumWealth (accounts) {
  let arr = [];
  let mapping;

mapping = accounts.map((a, i) => a[i] + accounts[i]);


console.log(mapping);

  // const max = arr.reduce((a,b) => {
  //   if(a === b) {
  //     console.log(a );
  //   } else {
  //     console.log(Math.max(a,b));
  //   }
  // });

}

maximumWealth([[1, 2, 3], [3, 2, 1]]);
// maximumWealth([[1, 5], [7, 3], [3, 5]]);
