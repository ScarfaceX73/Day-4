// 1.
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };
var a = true;

if (Object.keys(obj1).length == Object.keys(obj2).length) {
    for (key in obj1) {
        if (obj1[key] == obj2[key]) {
            continue;
        }
        else {
            a = false;
            break;
        }
    }
}
else {
    a = false;
}
console.log("object equal " + a);

// i have used the if else statement to prove the 2 variables
// output : object equal true

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. 
//set up http request
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();


//Set up a listener where server listen to our request 
xhr.onload = function () {
    //process the request and server will return the data in response
    if (xhr.status >= 200 && xhr.status < 300) {
        //convert raw into js notation format 
        var data = JSON.parse(xhr.response);
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].flag);
            console.log(data[i].name);
            console.log(data[i].region);
            console.log(data[i].subregion);
            console.log(data[i].population);

        }
    } else {
        //you should print the error 
        console.log("Data is not available");
    }
}

// output: https://restcountries.eu/data/afg.svg
//         Afghanistan
//         Asia
//         Southern Asia
//         27657145

//  This is only the first country as an example as i can't display all the output.