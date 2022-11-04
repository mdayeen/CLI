import readlineSync from "readline-sync"

function base64Encoding(){

    // Step : 1 Accept string Input
    let inputString=readlineSync.question("Enter the String you want to Encode : ")

    // Split Characters
    let splitString=inputString.split("")
    // console.log("The String is : ",splitString)

    // Get ASCII Decimals
    let ASCIICodes=splitString.map((char)=>char.charCodeAt());
    // let ASCIICodes=splitstring.map(function(char){
        // return char.charCodeAt();
    // })
    // console.log("The ASCII Array is : ",ASCIICodes);

    // Converting decimal ASCII to binary
    let binaryCodes=ASCIICodes.map((num)=>num.toString(2));
    // console.log("Binary Codes : ",binaryCodes)
    
    let binaryCode8Bit=binaryCodes.map((bin)=>{
        while(bin.length<8){
            bin="0"+bin
        }
        return bin;
    })
    // console.log("Binaries of 8 bits are : ",binaryCode8Bit)

    let oneBinary=binaryCode8Bit.join("").split("")
    // console.log(oneBinary)

    // Spliting in 6 bits
    let binaryCode6Bit=[]
    while(oneBinary.length!=0){
        binaryCode6Bit.push(oneBinary.splice(0,6).join(""))
    }
    // console.log("Binaries of 6 Bits are : ",binaryCode6Bit)

    // Padding and add =
    let lastElement=binaryCode6Bit[binaryCode6Bit.length - 1]
    if(lastElement.length!=6){
        var counter=0;
        while(lastElement.length<6){
            lastElement = lastElement+"0"
            counter++
        }
        binaryCode6Bit[binaryCode6Bit.length-1]=lastElement
    }
    // console.log("Binaries of 6 bits are : ",binaryCode6Bit);
    let bintoDecimal=binaryCode6Bit.map((sttr)=>parseInt(sttr,2));
    // console.log("Base 64 DEcimal:",bintoDecimal);
    let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+=/"

    //decimal to base64
    let base64final=bintoDecimal.map((dec)=>base64[dec]);
    // console.log("base64string:", base64final);
    if(counter==2){base64final.push("=")}
    else{base64final.push("==")} 
    let finalbase64string=base64final.join("")
    console.log("base 64 output:", finalbase64string)
}


export default base64Encoding