async function loadAndShowData() {
  // Get the html element
  const travelListElement = document.querySelector(".travel-list");
  // Clear the html content
  travelListElement.innerHTML = "";
  // Get data from backend
  const data = await getData();
  // Display each of the data elements.
  data.forEach((travel) => {
    const newNode = fillTravelTemplate(travel);
    displayNewNode(newNode);
  });
}

function fillTravelTemplate(travel) {
  // Get the template
  const template = document.querySelector("#travel-card");
  // Clone template
  const clone = document.importNode(template.content, true);
  // Fill information into the cloned templated

  // Nested objects - therefor need to point for the second key value (Todo - Change obj name)
  clone.querySelector("#travel_id").id = travel._id;
  clone.querySelector("#country").textContent = travel.country;
  clone.querySelector("#location").textContent = travel.location;
  clone.querySelector("#period").textContent = travel.period;
  clone.querySelector("#description").textContent = travel.description;
  // Return the filled node

  clone.querySelector("#edit").addEventListener("click", () => {
    window.location.replace(
      "http://127.0.0.1:5500/update_mongoose.html?=" + travel._id
    );
  });
  return clone;
}

function displayNewNode(newNode) {
  const travelList = document.querySelector(".travel-list");
  travelList.appendChild(newNode);
}
