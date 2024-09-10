// Simulate an API call
function simulateApiCall(query) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Hardcoded search results
            const allResults = [
                'Apple', 'Apricot', 'Application', 'Banana', 'Grape', 'Grapefruit', 'Lemon', 'Lime'
            ];
            // Filter results that include the query
            const filteredResults = allResults.filter(item => item.toLowerCase().includes(query.toLowerCase()));
            resolve(filteredResults);
        }, 1000); // Simulate a 1-second API response time
    });
}

// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Function to update the DOM with search results
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = results.map(item => <div class="result-item">${item}</div>).join('');
}

// Search handler
async function handleSearch(event) {
    const query = event.target.value;
    if (query.trim() === '') {
        displayResults([]); // Clear results if query is empty
        return;
    }
    const results = await simulateApiCall(query);
    displayResults(results);
}

// Attach event listener with debouncing
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', debounce(handleSearch, 500));