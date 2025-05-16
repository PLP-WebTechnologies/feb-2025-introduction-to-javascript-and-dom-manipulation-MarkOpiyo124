function changeText() {
  const paragraph = document.getElementById("description");
  paragraph.textContent = "The paragraph text has been changed dynamically!";
}

function changeColor() {
  const box = document.getElementById("color-box");
  box.style.color = "white";
  box.style.backgroundColor = "teal";
  box.style.padding = "10px";
  box.style.borderRadius = "5px";
}

function addElement() {
  const list = document.getElementById("item-list");
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newItem);
}

function removeElement() {
  const list = document.getElementById("item-list");
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  }
}
