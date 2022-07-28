const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

function inputValue() {
  return input.value.length;
}

function createElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  const buttonDone = document.createElement("button");
  buttonDone.appendChild(document.createTextNode("Done!"));
  li.appendChild(buttonDone);
  buttonDone.onclick = underlineParent;

  const buttonDelete = document.createElement("button");
  buttonDelete.appendChild(document.createTextNode("Delete!"));
  li.appendChild(buttonDelete);
  buttonDelete.onclick = removeParent;
}

function underlineParent(e) {
  event.target.parentNode.classList.toggle("done");
}

function removeParent(e) {
  e.target.parentNode.remove();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListClick() {
  if (inputValue() > 0) {
    createElement();
  }
}

function addListKey(e) {
  if (inputValue() > 0 && event.which === 13) {
    createElement();
  }
}

button.addEventListener("click", addListClick);
input.addEventListener("keypress", addListKey);
