window.addEventListener("load", async () => {
    await loadAndShowData();
});
  
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
    console.log(travel);
  
    // Nested objects - therefor need to point for the second key value (Todo - Change obj name)
      clone.querySelector("#travel_id").id = travel._id;
      clone.querySelector("#country").textContent = travel.country;
      clone.querySelector("#location").textContent = travel.location;
      clone.querySelector("#period").textContent = travel.period;
      clone.querySelector("#description").textContent = travel.description;
        // Return the filled node
      return clone;
}

function displayNewNode(newNode) {
    const travelList = document.querySelector(".travel-list");
    travelList.appendChild(newNode);
}