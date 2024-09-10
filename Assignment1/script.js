function simulateApiCall(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allResults = [
        "Apple",
        "Apricot",
        "Application",
        "Banana",
        "Grape",
        "Grapefruit",
        "Lemon",
        "Lime",
      ];

      const filteredResults = allResults.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filteredResults);
    }, 1000);
  });
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = results
    .map((item) => <div class="result-item">${item}</div>)
    .join("");
}

async function handleSearch(event) {
  const query = event.target.value;
  if (query.trim() === "") {
    displayResults([]);
    return;
  }
  const results = await simulateApiCall(query);
  displayResults(results);
}

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", debounce(handleSearch, 500));
