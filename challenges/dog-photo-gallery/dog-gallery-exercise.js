let button = document.querySelector("button");
let reset = document.querySelector("#reset");
let imageContainer = document.getElementById("img-div");



button.addEventListener("click", (e) => {
  e.preventDefault();  
  getDogPhoto(); 
})

// reset.addEventListener("click", (e) => {
//   e.preventDefault();
//   document.getElementById("reset").reset();
// });

function getDogPhoto(){
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
       createDogPhoto(data.message)     
    }).catch(error => "error")
} 

function createDogPhoto(photo) {
  let ul = document.createElement("ul");
  imageContainer.appendChild(ul);
  let li = document.createElement("li");
  li.style.listStyle = "none";
  ul.appendChild(li);
  let image = document.createElement("img");
  image.src = photo;
  image.width = "200";
  li.appendChild(image);
}


