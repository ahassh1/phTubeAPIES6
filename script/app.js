function loadCategories() {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // convert promise to json
    .then(res => res.json())
    // send data to display+
    .then(data => displayCategories(data.categories));
}


function displayCategories(categories) {
  // Get the container
  const categoryContainer = document.getElementById("category-container");
  
  // Loop over categories
  for (let cat of categories) {
    // console.log(cat);
    
    // Create and populate the category element inside the loop
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
    `;
    
    // Append the element
    categoryContainer.append(categoryDiv);
  }
}

function loadVideos(){
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos").then
  (res => res.json()).then
  (data=> displayVideos(data.videos))
}

const displayVideos =(videos)=>{
   const videoContainer = document.getElementById('video-container')

   videos.forEach(video =>{
    // console.log(video)
    const videoDiv = document.createElement('div')
    videoDiv.innerHTML=`
   
    <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    `
    videoContainer.append(videoDiv)
   })
}


loadCategories();
loadVideos()



// {
//   "category_id": "1001",
//   "video_id": "aaah",
//   "thumbnail": "https://i.ibb.co/hY496Db/coloer-of-the-wind.jpg",
//   "title": "Colors of the Wind",
//   "authors": [
//       {
//           "profile_picture": "https://i.ibb.co/6r4cx4P/ethen-clack.png",
//           "profile_name": "Ethan Clark",
//           "verified": true
//       }
//   ],
//   "others": {
//       "views": "233K",
//       "posted_date": "16090"
//   },
//   "description": "Ethan Clark's 'Colors of the Wind' is a vibrant musical exploration that captivates listeners with its rich, expressive melodies and uplifting rhythm. With 233K views, this song is a celebration of nature's beauty and human connection, offering a soothing and enriching experience for fans of heartfelt, nature-inspired music."
// }