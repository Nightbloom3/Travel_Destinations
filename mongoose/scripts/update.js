window.addEventListener("load", async function () {
    const id = getIdFromUrl();
    const travel = await getSpecificTravel(id);
    fillInTheForm(travel);
});

function getIdFromUrl() {
    const location = window.location.toString();
    const splitQuestionMark = location.split("?");
    const routeParams = splitQuestionMark[1];
    const splitIdParam = routeParams.split("=");
    return splitIdParam[1];
}

function fillInTheForm(travel) {
    document.querySelector("#country").value = travel.country;
    document.querySelector("#location").value = travel.location;
    document.querySelector("#period").value = travel.period;
    document.querySelector("#description").value = travel.description;
}

const form = document.querySelector("#update-travel-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const travel = {
        country: document.querySelector("#country").value,
        location: document.querySelector("#location").value,
        period: document.querySelector("#period").value,
        description: document.querySelector("#description").value,
    };

    const id = getIdFromUrl();

    await putSpecificTravel(id, travel);
});

const url = "http://127.0.0.1:5000/mongoose/html/";

async function getSpecificTravel(id) {
    const response = await fetch(url + id);
    const body = await response.json();
    return body;
}

async function putSpecificTravel(id, travel) {
    console.log(id);
    console.log(travel);
    const response = await fetch(url + id, {
        method: "PUT",
        body: JSON.stringify(travel),
        headers: {
        "Content-Type": "application/json",
        },
    });
    return response;
}