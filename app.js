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
/**
 * adds new book into the list very easily using the clone of another book and overwriting the content
 */
function addBookUsingClone() {
  const addForm = document.forms["add-book"];
  const ul = document.querySelector("#book-list ul");

  addForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const value = addForm.children[0].value;
    const newBook = ul.children[0].cloneNode(true);
    newBook.children[0].textContent = value;
    ul.appendChild(newBook);
  });
}

/**
 * adds new book into the list by creating the new elements from scratch
 */
function addBook() {
  const addForm = document.forms["add-book"];
  const ul = document.querySelector("#book-list ul");

  addForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const value = addForm.children[0].value;

    // create elements
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    // attach the created elements
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    ul.appendChild(li);

    // add the form submitted value into the bookName
    bookName.textContent = value;
    deleteBtn.textContent = "delete";

    // add necessary styles into the new elements
    // can also be done using `bookName.classList.add("name")` if there are multiple classes
    bookName.className = "name";
    deleteBtn.className = "delete";

    // also add a green color for the newly added bookname
    bookName.style.color = "green";
  });
}

deleteBook();
addBook();
