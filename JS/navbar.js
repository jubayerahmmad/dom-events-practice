const navContainer = document.getElementById("nav-container");

// const listItems = navContainer.getElementsByTagName("li");
const listItems = document.getElementsByTagName("li");

let lastClicked = null;

for (let item of listItems) {
  item.addEventListener("click", function (e) {
    if (lastClicked === null) {
      item.classList.add("bg-red-500");
      item.classList.add("text-white");
      //   item.style.backgroundColor = "red";
      //   item.style.color = "white";
      lastClicked = item;
    } else {
      lastClicked.classList.remove("bg-red-500");
      lastClicked.classList.remove("text-white");
      item.classList.add("bg-red-500");
      item.classList.add("text-white");
      lastClicked = item;

      //   lastClicked.style.backgroundColor = "transparent";
      //   lastClicked.style.color = "black";
      //   item.style.backgroundColor = "red";
      //   item.style.color = "white";
      //   lastClicked = item;
    }
  });
}
