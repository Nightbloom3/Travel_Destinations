const form = document.querySelector("#travel-form");

const url = "http://localhost:5000/";

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const travel = {
    country: document.querySelector("#country").value,
    location: document.querySelector("#location").value,
    period: document.querySelector("#period").value,
    description: document.querySelector("#description").value,
  };

  const response = await postData(travel);
  clearForm();
});

async function postData(travel) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // change back to --         body: JSON.stringify({travel}),
    body: JSON.stringify(travel),
  });
  return response;
}

function clearForm() {
  document.querySelector("#country").value = "";
  document.querySelector("#location").value = "";
  document.querySelector("#period").value = "";
  document.querySelector("#description").value = "";
}
