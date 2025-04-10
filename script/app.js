function loadCategories() {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // convert promise to json
    .then((res) => res.json())
    // send data to displaywi
    .then((data) => displayCategories(data.categories));
}


function displayCategories(categories) {
  // Get the container
  const categoryContainer = document.getElementById("category-container");
  
  // Loop over categories
  for (let cat of categories) {
    console.log(cat);
    
    // Create and populate the category element inside the loop
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
    `;
    
    // Append the element
    categoryContainer.append(categoryDiv);
  }
}
loadCategories();
