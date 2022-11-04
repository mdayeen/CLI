import base64Encoding from "./encoder.js"
import decoder64 from "./decoder.js"
import readlineSync from "readline-sync"



function run() {
    let a = readlineSync.question("Do you want to continue?(y/n): ")
    if (a == "y") {Exceute()}
    else if (a == "n") {console.log("Thank You!")
        return;}
    else{ console.log("enter proper input");
        run();}}

function Exceute() {
    console.log("Enter your Choice:\n 0 to Exit \n 1 to Encode \n 2 to Decode ");
     let Choice = readlineSync.questionInt("Enter Your Input: ");
     console.log(Choice)
    if (Choice == 0) {console.log("Thank you!"); return} 
    else if (Choice == 1) {base64Encoding();
        run();} 
        else if (Choice == 2) {decoder64();
        run();} 
    else{console.log("enter either 0 1 2")}
}
Exceute()
// run()
