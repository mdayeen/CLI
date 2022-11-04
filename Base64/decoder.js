// Decoder Program:-
import readlinsync from "readline-sync"
function decoder64(){
let Base64String = readlinsync.question("Enter the Base64String:- ")
let SplitString = Base64String.split("")
// console.log("the given string:- ",SplitString)
let Base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
let check = /^[A-Za-z0-9\+\/]+[=]{0,2}?$/

if (check.test(Base64String)){
    let value = []
    for(let i=0;i<SplitString.length;i++){
        for(let j=0;j<Base64.length;j++){
            if(SplitString[i]==Base64[j]){
                value.push(Base64.indexOf(Base64[j]))
            }
        }
    }
    // console.log("the Base64 values:- ",value)
    let binaryCodes = value.map((num) => num.toString(2));
    // console.log("Binary Codes: ", binaryCodes);
    for (let i=0;i<binaryCodes.length;i++){
        let n = "0"
        while(binaryCodes[i].length<6){
            binaryCodes[i] = n + binaryCodes[i]
        }
        }
        // console.log("6bit:- ",binaryCodes)
    let oneBinary = binaryCodes.join("").split("");
    // console.log(oneBinary)
    let binaryCode8Bit = [];
      while (oneBinary.length != 0) {
        binaryCode8Bit.push(oneBinary.splice(0, 8).join(""));
      }
    //   console.log("Binaries in 8 Bits are : ", binaryCode8Bit);
    let BitoDec = binaryCode8Bit.map((num) => parseInt(num,2));
    // console.log("Decimals:- ", BitoDec);
    let lastElement = BitoDec[BitoDec.length - 1];
    let sum = 0
    for(let i=0;i<lastElement;i++){
     sum += lastElement[i]
    }
    if(sum == 0){
        BitoDec.pop()
    }
    let chars = BitoDec.map((num) => String.fromCharCode(num));
    // console.log("Decimals:- ", chars);
    let final = chars.join("")
    console.log("Encoded string is :-",final)
}
else{
    console.log(`invalid`)
}
}
export default decoder64