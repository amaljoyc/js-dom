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
