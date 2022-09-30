
const form = document.querySelector("#travel-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const travel = {
        country: document.querySelector("#country").value,
        location: document.querySelector("#location").value,
        period: document.querySelector("#period").value,
        description: document.querySelector("#description").value,
    };

    const response = await postData(travel);
    console.log(response);
    console.log(travel);

    if (response.status === 200) {
        clearForm();
        const newNode = fillTravelTemplate(travel);
        displayNewNode(newNode);
    }
});

async function postData(travel) {
    const response = await fetch(url + 'create',{
        method: "POST",
        headers: {"Content-Type": "application/json",
    },
    // change back to --         body: JSON.stringify({travel}),
        body: JSON.stringify({travel}),
    })
        console.log(travel);
    return response;
};

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




