window.onload = loadAndShowData();

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