let button = document.querySelector("button");
let reset = document.querySelector("#reset");
let imageContainer = document.getElementById("img-div");
imageContainer.appendChild(button);

button.addEventListener("click", (e) => {
   e.preventDefault();
    getDogPhoto();
})

reset.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("reset").reset();
});

function getDogPhoto() {    
    
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
            imageContainer.innerHTML += `
            <ul>
                <li style = "list-style: none">
                    <img src = ${data.message}>
                </li>
            </ul>
            `;
      }).catch(error => console.log(error));
}

