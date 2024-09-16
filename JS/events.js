//changing color with onclick
function changeColor() {
  document.body.style.backgroundColor = "blue";
}

const makeOrange = document.getElementById("make-orange");
makeOrange.onclick = makeOrangeBtn;
function makeOrangeBtn() {
  document.body.style.backgroundColor = "orange";
}

//addEventListener
const makePurple = document.getElementById("make-purple");
makePurple.addEventListener("click", makePurpleBtn);
function makePurpleBtn() {
  document.body.style.backgroundColor = "purple";
}

//another
document.getElementById("make-green").addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

//handle events
function handleEvent() {
  const events = document.getElementById("handle-events");
  events.innerHTML = "Text Changed by Onclick function";
}
//another way
document
  .getElementById("event-listener")
  .addEventListener("click", function () {
    const events = document.getElementById("handle-events");
    events.innerHTML = "Text Changed by event Listener";
  });

//update input text field
document.getElementById("btn-update").addEventListener("click", function () {
  const inputField = document.getElementById("input-field");
  const inputText = inputField.value;

  const updateText = document.getElementById("update-text");
  updateText.innerHTML = inputText;
  inputField.value = "";
});

//adding comments
document.getElementById("btn-post").addEventListener("click", function () {
  const commentInput = document.getElementById("comments-input");
  const commentText = commentInput.value;

  const commentsDiv = document.getElementById("comments-div");

  const comment = document.createElement("p");
  comment.innerText = commentText;
  commentsDiv.appendChild(comment);
  commentInput.value = "";
});
