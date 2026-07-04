const buttonEl = document.getElementById("btn");

const animeContainerEl = document.querySelector(".anime-container");

const animeImgEl = document.querySelector(".anime-img");

const animeNameEl = document.querySelector(".anime-name");

// Fetch all characters only once
let currentId = 1;

buttonEl.addEventListener("click", async () => {
  try {
    buttonEl.disabled = true; // Disable the button to prevent multiple clicks
    buttonEl.textContent = "Loading..."; // Change button text to indicate loading
    animeImgEl.src = "spinner.svg";
    const response = await fetch(`https://dragonball-api.com/api/characters/${currentId}`);
    const data = await response.json();
    buttonEl.disabled = false; // Re-enable the button after the fetch is complete
    buttonEl.textContent = "Get Anime";
    animeImgEl.src = data.image;
    animeNameEl.textContent = data.name;

    animeContainerEl.style.display = "block";

    currentId++;

    if (currentId > 35) {
      currentId = 1;
    }
  } catch (error) {
    console.log(error);
  } finally {
    buttonEl.disabled = false;
    buttonEl.textContent = "Get Anime";
  }
});
