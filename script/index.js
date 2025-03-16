function loadCategories(){
//    fetch the data 

fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
.then((res)=>res.json())
.then((data) => displayCatagories(data.categories));
}
function displayCatagories(categories){
    console.log(categories);
}
loadCategories()