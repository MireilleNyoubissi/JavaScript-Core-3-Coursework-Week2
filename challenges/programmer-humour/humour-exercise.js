
function getImage() {
    fetch("https://xkcd.now.sh/?comic=latest")
      .then((response) => response.json())
      .then((data) => {
        let imageContainer = document.getElementById("img-div");
        let image = document.createElement("img");
        image.setAttribute("src", data.img);
        imageContainer.appendChild(image);
      })
      .catch((error) => console.log(error));
}

getImage();
