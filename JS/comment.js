document.getElementById("comment-btn").addEventListener("click", function () {
  const inputComment = document.getElementById("input-field");
  const inputValue = inputComment.value;

  const commentContainer = document.getElementById("comment-container");

  const p = document.createElement("p");
  p.innerText = inputValue;
  commentContainer.appendChild(p);
  inputComment.value = "";
});
