
var defangIPaddr = function (address) {
  const separated = address.split('')
  for(let i = 0; i <= separated.length - 1; i++) {
    if(separated[i] === '.') {
      separated[i] = '[.]';
    }
  }

  return separated.join('');
};


defangIPaddr("1.1.1.1");
//Output: "1[.]1[.]1[.]1"

defangIPaddr("255.100.50.0");
//Output: "255[.]100[.]50[.]0"

