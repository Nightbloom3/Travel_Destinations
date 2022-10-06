const template = document.querySelector("#update-travel-form");

function update(travel) {
    const id = travel._id;
    const location = travel.location;
    console.log(id);
    console.log(location);
}

template.addEventListener("submit", async (event) => {
    event.preventDefault();

    const travel = {
        country: document.querySelector("#country").value,
        location: document.querySelector("#location").value,
        period: document.querySelector("#period").value,
        description: document.querySelector("#description").value,
    };

    const response = await putData(travel);
    console.log(response);
    console.log(travel);
});

async function putData(id) {
    const response = await fetch(url, {
        method: "PUT",
        headers: {"Content-Type": "application/json",
    },
    // change back to --         body: JSON.stringify({travel}),
        body: JSON.stringify(travel),
    })
        console.log(travel);
    return response;
};