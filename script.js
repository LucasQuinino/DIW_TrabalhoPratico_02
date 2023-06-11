function searchBar() {
  var query = document.getElementById('searchBar').value;

  if (query != ``) {
    var apiUrl = 'https://diwserver.vps.webdock.cloud/products/search?query=' + query;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Process the response data
        displayResults(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  else
    clearResults();

}
function displayResults(data) {
  // Clear previous results
  var resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  // Display the results
  data.forEach(product => {
    var productElement = document.createElement('a');
    var imageElement = `<img src=${product.image} alt="" class='product-preview-img'>`

    productElement.textContent = product.title;
    productElement.innerHTML += imageElement;

    productElement.href = `detalhes.html?id=${product.id}&category=${product.category}`

    resultsContainer.appendChild(productElement);
  });

}

function clearResults() {
  var resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';
}

function redirectToSearchPageByCategory() {
  var selectElement = document.getElementById("category");
  var selectedOption = selectElement.selectedOptions[0];
  var selectedCategory = selectedOption.textContent;

  if (selectedCategory != "Category") {
    var searchPageUrl = `pesquisa.html?category=${selectedCategory}`;
    window.location.href = searchPageUrl;
  }


}

function redirectToSearchPageByTextInput() {
  var query = document.getElementById("searchBar").value;

  if (query != '') {
    var searchPageUrl = `pesquisa.html?query=${query}`;
    window.location.href = searchPageUrl;
  }

  function getRandomNumber(min, max) {
    // Calculate the range of the values
    const range = max - min + 1;
    
    // Generate a random number within the range and add the minimum value
    const randomNumber = Math.floor(Math.random() * range) + min;
    
    return randomNumber;
  }

}