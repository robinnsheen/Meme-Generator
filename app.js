const formElement = document.querySelector("form");
const urlInput = document.querySelector("#formGroupUrl");
const upperTextInput = document.querySelector("#formGroupUpperText");
const lowerTextInput = document.querySelector("#formGroupLowerText");
const memeSection = document.querySelector("#meme-section");





formElement.addEventListener("submit", function(event) {
  event.preventDefault();
  const newMeme = makeMeme(urlInput.value, upperTextInput.value, lowerTextInput.value);
  const overlay = createElementWithClass("div", "overlay");
  const overlayText = createElementWithClass("div", "remove-btn");
  overlayText.innerText = "x";
  newMeme.appendChild(overlay);
  overlay.appendChild(overlayText);

  memeSection.appendChild(newMeme);
  upperTextInput.value = "";
  lowerTextInput.value = "";
  urlInput.value = "";

});

memeSection.addEventListener("click", function(e) {
  if (e.target.className === "overlay") {
    e.target.parentElement.remove();
  }

  if (e.target.className === "remove-btn") {
    e.target.parentElement.parentElement.remove();
  }
});

function makeMeme(urlInput, upperTextInput, lowerTextInput) {
  const meme = createElementWithClass("div", "meme-item");
  const memeImage = document.createElement("img");
  const upperTextPara = createElementWithClass("p", "upper-text");
  const lowerTextPara = createElementWithClass("p", "lower-text");

  memeImage.src = urlInput;

  const upperNode = document.createTextNode(upperTextInput);
  const lowerNode = document.createTextNode(lowerTextInput);

  upperTextPara.appendChild(upperNode);
  lowerTextPara.appendChild(lowerNode);

  meme.appendChild(memeImage);
  meme.appendChild(upperTextPara);
  meme.appendChild(lowerTextPara);

  return meme;
}

function createElementWithClass(type, className) {
  const element = document.createElement(type);
  element.className = className;
  return element;
}


