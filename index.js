const readLineSync = require('readline-sync')
console.clear();


function stringEncode(str) {
  ///
  const base64 = Buffer.from(str).toString('base64');
  return base64;
}

function stringDecode(url) {
///
  const original = Buffer.from(str, 'base64').toString('ascii');
  return original;
}
const utilityOption = parseInt(readLineSync.question('Welcome to Base64 Encoding/Decoding utility. \nWhich utility function would you like to use?\n1. Base64 Encoder\n2. Base64 Decoder\nEnter your choice:'));

if(utilityOption===1){
    const stringToEncode = readLineSync.question('\nPlease enter the string to be encoded\n');
    const encodedString = stringEncode(stringToEncode);
    console.log("\nYour encoded string is:\n"+ encodedString);
}
else if(utilityOption===2){
    const stringToDecode = readLineSync.question('\nPlease enter the string to be decoded\n');
    const decodedString = stringDecode(stringToDecode);
    console.log("\nYour decoded string is:\n"+decodedString);
}
else{
    console.log('Invalid option\n');
}
