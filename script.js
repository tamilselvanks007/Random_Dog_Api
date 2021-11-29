const dog_btn = document.getElementById("dog_btn");
const dog_image = document.getElementById("dog_image");

dog_btn.addEventListener("click", getRandomDog);

function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      dog_image.innerHTML = `<img src=${data.url} alt="dog" />`;
    });
}
