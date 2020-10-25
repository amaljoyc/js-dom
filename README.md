# js-dom

learning from https://www.youtube.com/watch?v=FIORjGvT0kk&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V

## for selection

- document.getElementById("book-list")
- document.getElementsByClassName("title")
- document.querySelector("#book-list .title");
- document.querySelectorAll(".title");

## for editing / adding

editing text

```
const mytitle = document.querySelector("#book-list .title");
mytitle.textContent += "...!!";
```

editing html

```
const bookList = document.querySelector("#book-list");
bookList.innerHTML += "<p>Listed above are the books you must read!</p>";
```

## events

to add an event listener,

```
myElement.addEventListener('click', function(event) {
    console.log(e.target)
})
```

Note: above, the `myElement` is an already saved variable using the querySelector.

## attribute methods

- getAttribute
- setAttribute
- hasAttribute
- removeAttribute

## DOMContentLoaded event

this event can be used to wait until the DOM is fully loaded before using your dom methods. This is especially useful when you do not have your script at the bottom of html page, but at the header and it executes before the DOM is ready.

So basically, waiting for this event to be fired, and then executing all your DOM specific logic.

```
document.addEventListener('DOMContentLoaded', function(event) {
    ...
})
```
