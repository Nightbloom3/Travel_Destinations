
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
  }

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