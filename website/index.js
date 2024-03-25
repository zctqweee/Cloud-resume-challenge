const counter = document.querySelector("#visitorCount");

async function updateCounter() {
  try {
    let response = await fetch("https://oixiaqyvpiwehzofhfxuyruzp40jpjlu.lambda-url.eu-central-1.on.aws/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    // Adjust this line according to the structure of your response data.
    // If the response directly contains the count, use `data` directly.
    // If the data contains a property with the count, you might need to use something like `data.count`
    counter.innerHTML = `Views: ${data.views || data}`; // Adjusted to handle different possible structures
  } catch (error) {
    console.error("Failed to fetch data:", error);
    counter.innerHTML = "Views: unavailable";
  }
}
// 123
updateCounter();