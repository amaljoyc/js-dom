/*
    adds an event listener to each of the delete button
*/
function deleteEachBook() {
  const buttons = document.querySelectorAll(".delete");

  buttons.forEach((button) =>
    button.addEventListener("click", function (event) {
      var li = event.target.parentElement;
      li.parentElement.removeChild(li);
    })
  );
}

/*
    adds an events listener to the ul to hadle the events bubbled up from each contained button
    much more efficient when compared to deleteEachBook() from above
*/
function deleteBook() {
  const ul = document.querySelector("#book-list ul");
  ul.addEventListener("click", function (event) {
    if (event.target.className === "delete") {
      var li = event.target.parentElement;
      ul.removeChild(li);
    }
  });
}

function addBook() {
  const addForm = document.forms["add-book"];
  const ul = document.querySelector("#book-list ul");
  addForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newBook = ul.children[0].cloneNode(true);
    newBook.children[0].textContent = addForm.children[0].value;
    ul.appendChild(newBook);
  });
}

deleteBook();
addBook();
