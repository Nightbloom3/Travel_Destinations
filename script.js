
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

/**
 * Takes a clone of the template, and fills the information from the Contact object,
 * into the template.
 * @param {object} travel
 * @returns {HTMLElement} Template with contact information
 */
function fillTravelTemplate(travel) {
  // Get the template
    const template = document.querySelector("#travel-card");
  // Clone template
    const clone = document.importNode(template.content, true);
  // Fill information into the cloned templated
  console.log(travel);

  // Nested objects - therefor need to point for the second key value (Todo - Change obj name)
    clone.querySelector("#temp").id = travel.id;
    clone.querySelector("#country").textContent = travel.travel.country;
    clone.querySelector("#location").textContent = travel.travel.location;
    clone.querySelector("#period").textContent = travel.travel.period;
    clone.querySelector("#description").textContent = travel.travel.description;
      // Return the filled node
    return clone;
}
/**
 * Append node as child in the Contact List html element
 * @param newNode
 */
function displayNewNode(newNode) {
    const travelList = document.querySelector(".travel-list");
    travelList.appendChild(newNode);
}

/**
 * Function to clear the form
 */

function clearForm() {
    document.querySelector("#country").value = "";
    document.querySelector("#location").value = "";
    document.querySelector("#period").value = "";
    document.querySelector("#description").value = "";
}
  





  