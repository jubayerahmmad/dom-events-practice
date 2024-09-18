//!onclick
// let count = document.getElementById("count");
// function increaseCount() {
//   //   let currentCount = parseInt(count.innerText);
//   let currentCount = Number(count.innerText);
//   currentCount++;
//   count.innerText = currentCount;
// }
// function decreaseCount() {
//   let currentCount = parseInt(count.innerText);
//   currentCount--;
//   count.innerText = currentCount;
// }

//!addEventListener
const count = document.getElementById("count");
const counter = document.getElementById("counter");

const increaseBtn = document.getElementsByClassName("increase-btn")[0];
const decreaseBtn = document.getElementsByClassName("decrease-btn")[0];
counter.addEventListener("click", function () {
  if (increaseBtn.getAttribute("disabled") == null) {
    increaseBtn.setAttribute("disabled", true);
    decreaseBtn.setAttribute("disabled", true);
    counter.classList.add("bg-red-500");
  } else {
    increaseBtn.removeAttribute("disabled");
    decreaseBtn.removeAttribute("disabled");
    counter.classList.remove("bg-red-500");
  }
});

increaseBtn.addEventListener("click", function (event) {
  let currentCount = Number(count.innerText);
  currentCount++;
  count.innerText = currentCount;
  event.stopPropagation(); // stops the event from bubbling up to the parent element
});

decreaseBtn.addEventListener("click", function (event) {
  let currentCount = Number(count.innerText);
  currentCount--;
  count.innerText = currentCount;
  event.stopPropagation(); // stops the event from bubbling up to the parent element
});
