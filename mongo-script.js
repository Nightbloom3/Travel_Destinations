
const url = "http://localhost:5000/";

// Get list from database
async function getData() {
    // First async action
    const result = await fetch(url);
    console.log(result);
    // Second async action
    const body = await result.json();
    console.log(body);
    
    return body;

    //const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

    // document.querySelector("#insertDestination").textContent = body.country + "," + body.Description + "," + body.Periode + "," + body.Title;
    //document.getElementById("insertDestinations").innerHTML = await body.country + "," + body.Description + "," + body.Periode + "," + body.Title;

    //Display arry as string - works
        // const bodyArry = body;
        // let myString = JSON.stringify(bodyArry);
        // document.getElementById("insertDestination").innerHTML = myString;

    // henter dem, men fremvises som "[object Object],[object Object],[object Object],[object Object]"
        // document.querySelector("#insertDestination").textContent = body;
  }

//   function convertJsonobjects(){
//     while (i < 3) {
//         i++;
//         const jsobj = JSON.parse(body);
//       }return jsobj;
//   }

  


//Cocktail forsøg
// https://w3collective.com/fetch-display-api-data-javascript/
//https://github.com/w3collective/fetch-api-javascript
//   function displayTravelDestinations(data){
//     const destination = data.destinations[0]
//     const destinationDiv = document.getElementById("destinationsDiv");

//     const cocktailName = cocktail.strDrink;
//     const heading = document.createElement("h1");
//     heading.innerHTML = cocktailName;
//     cocktailDiv.appendChild(heading);
//   }

// // Get list from database
// async function getData() {
//     fetch(url)
//     .then(function (response){
//         console.log(response);
//     })
//     .then(function (body) {
//         console.log(body);
    
//         const destination = body.value;
//         console.log(destination);
    
//         document.querySelector("#insertDestination").textContent = destination;
//     })
// }



  // havent worked out yet
// async function getSpecificTravel(id) {
//     const response = await fetch(url + "/" + id);
//     const body = await response.json();
//     console.log(body);
// }

// async function postData(travel) {
//     const response = await fetch(url + 'create',{
//         method: "POST",
//         body: JSON.stringify(travel),
//     });
//     return response;
// }


// Virker til at udskrive prop og værdi
// async function fetchData() {
//     const response = await fetch(url);
//     const data = await response.json();

//     data.forEach(obj => {
//         Object.entries(obj).forEach(([key, value]) => {
//             console.log(`${key} ${value}`);
//         });
//         console.log('-------------------');
//     });
// }


        // document.querySelector("#insertDestination").textContent = body;
            // document.querySelector("#insertDestination").textContent = body.country + "," + body.Description + "," + body.Periode + "," + body.Title;
    //document.getElementById("insertDestinations").innerHTML = await body.country + "," + body.Description + "," + body.Periode + "," + body.Title;

