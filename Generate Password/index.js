import readlineSync from "readline-sync"

//pasword with uppercase lowercase and numbers
function ULN(length) {
	var result = '';
	var characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}
//password without numbers
function UL(length) {
	var result = '';
	var characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

 function cli(){
  let length =readlineSync.questionInt("Enter the Length of Password:  ")
  console.log("--------------------------------------");
  let opt =readlineSync.questionInt("Enter the option  \n  0 :Exit\n  1 :Password with uppercase lowercase and numbers \n  2 :Password with uppercase lowercase\n")
  if(opt == 1){ console.log("Your password is:",ULN(length)) }
  else if(opt ==2){console.log("Your password is:",UL(length)) }
  else { return }
  console.log("-------Thanks for Using-------");
}

cli()