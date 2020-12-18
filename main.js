function isIsogram(str) {
   let fal='';

const newStr = str.toLowerCase();

for (let i = 0; i < newStr.length; i ++) {
  for (let  j = i + 1; j < newStr.length; ++j) {
    if(newStr[i] === newStr[j]) {
      fal = false;
    }
  }
  }

  if(fal.length === 0) {
   return true;
  } else {
    return false;
  }

}
isIsogram("Dermatoglyphics") //== true
isIsogram("aba") //== false
isIsogram ("moOse") //== false -- ignore letter case
