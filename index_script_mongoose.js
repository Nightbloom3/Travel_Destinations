window.onload = loadAndShowData();

// Get list from database
async function getData() {
  const url = "http://localhost:5000/";
  // First async action
  const result = await fetch(url);
  // Second async action
  const body = await result.json();

  return body;
}
