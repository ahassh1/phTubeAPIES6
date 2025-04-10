
function removeActiveClass() {
  const activeButtons = document.getElementsByClassName("active");
  for (let btn of activeButtons) {
    btn.classList.remove("active");
  }
}




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
    <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
    `;
    
    // Append the element
    categoryContainer.append(categoryDiv);
  }
}

function loadVideos(){
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
  .then(res => res.json())
  .then(data=>{
    removeActiveClass()
   
    document.getElementById('btn-all').classList.add('active')

    displayVideos(data.videos)
  })
}




const displayVideos =(videos)=>{
   const videoContainer = document.getElementById('video-container');
   videoContainer.innerHTML="";

   if(videos.length== 0){
    videoContainer.innerHTML =`
      <div class="py-20 col-span-full flex flex-col justify-center items-center ">
    <img class="" src="./assets/Icon.png" alt="">
    <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
   </div>
    `;
    return;
   }

   videos.forEach(video =>{
    // console.log(video)
    const videoDiv = document.createElement('div')
    videoDiv.innerHTML=`

    <!-- //card section design start -->
    <div class="card bg-base-100 shadow-sm">
      <figure class="relative">
        <img class="w-full h-[160px] object-cover"
          src="${video.thumbnail}"
          alt="Shoes" />
          <span class="absolute bottom-2 right-3 bg-black text-white px-2 rounded-sm text-xs">3hrs 56 min ago</span>
      </figure>
      <div class="flex px-0 gap-3 py-5">
        <div class="profile">
          <div class="avatar">
            <div class="ring-primary ring-offset-base-100 w-7 rounded-full ring ring-offset-2">
              <img src="${video.authors[0].profile_picture}" />
            </div>
          </div>
        </div>
        <div class="intro">
          <h1 class="text-xl font-bold">Building a Winning UX Strategy Using the Kano Model</h1>
          <p class="text-sm text-gray-400 font-semibold flex gap-1 text-[15px] my-1 ">${video.authors[0].profile_name}
          <img class="w-5 h-5" src="https://img.icons8.com/?size=64&id=eZo3c88c63il&format=png" alt="">
        </p>
        <p class="text-sm text-gray-400 font-semibold" >${video.others.views}</p>
        </div>
      </div>
    </div>

    `
    videoContainer.append(videoDiv)
   })
}



const loadCategoryVideos = (id)=> {
  const url=`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(url)

  fetch(url)
  .then(res => res.json())
  .then(data =>{

    removeActiveClass();

    const clickedButton = document.getElementById(`btn-${id}`)
    clickedButton.classList.add('active')
    console.log(clickedButton)
    displayVideos(data.category)

  })
}

loadCategories();




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




{/* <div class="card bg-base-100 shadow-sm">
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
</div> */}