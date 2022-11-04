import readlineSync from "readline-sync";
import axios from "axios";


async function getWeather() {
    try {
        let cityname = readlineSync.question("Enter Cityname : ");
        console.log("----------------------------------------------------")
        while (!cityname) {
            cityname = readlineSync.question("City name cant be Empty please Re-enter the Name : ");
        }

        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a18df8ada86899dd4f1563e18b324b03`);

        console.log("Enter an input : \n 0 to Exit \n 1 to Check MIN Temperature \n 2 to Check MAX Temperature \n 3 to Check Humidity \n 4 to Check Sunrise Time \n 5 to Check Sunset Time");
console.log("----------------------------------------------------");
        let Option = readlineSync.question("Enter Your Input : ");
        if (Option == 0){
        console.log("Thanks For Using.");}
        else if(Option == 1){
            console.log(`The Minimum Temperature in ${cityname} is ${(res.data.main.temp_min - 273).toFixed(2)} Centigrade`);
            repeat();
        }
        else if(Option == 2){
            console.log(`The Maximum Temperature in ${cityname} is ${(res.data.main.temp_max - 273).toFixed(2)} Centigrade`);
            repeat();
        }
        else if(Option == 3){
            console.log(`The Humidity in ${cityname} is ${(res.data.main.humidity)} Humidity`);
            repeat();
        }
        else if(Option == 4){
            let unix = res.data.sys.sunrise;
            let date = new Date(unix*1000);
            let hours = date.getHours();
            let min = date.getMinutes();
            let sec =date.getSeconds();
            console.log(`The Sunrise Time in ${cityname} is ${hours}:${min}:${sec}`);
            repeat();
            // console.log(`The Sunrise Time in ${cityname} is ${date}`);
        }
        else if(Option == 5){
            let unix1 = res.data.sys.sunset;
            let date1 = new Date(unix1*1000);
            let hours = date1.getHours();
            let min = date1.getMinutes();
            let sec =date1.getSeconds();
            console.log(`The Sunset time in ${cityname} is ${hours}:${min}:${sec}`);
            repeat();
            // console.log(`The Humidity in ${cityname} is ${date1}`);
        }



    } catch (error) {
        console.error(error);
    }
}


function repeat(){
  console.log("----------------------------------------------------");
    let repeatoption=readlineSync.question("Enter option \n 0 To Exit \n 1 To Continue \nEnter: ");
    if(repeatoption==1){
        getWeather();
    }
    else{console.log("Thanks for using")}
}

getWeather();