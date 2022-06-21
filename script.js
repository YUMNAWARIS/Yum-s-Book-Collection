// Delete Books to the list
const list = document.querySelector("#bookList");
list.addEventListener('click', function (e) {
    if (e.target.className == "dltBtn") {
        let li = e.target.parentElement;
        list.removeChild(li);
    }
})

// Add new Book
const form = document.forms['add']
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = form.querySelector("input[type='text']").value

    if (value != "") {
        // create element
        let li = document.createElement("li");
        let span = document.createElement("span");
        let button = document.createElement("button");

        // setting values and attributes
        li.classList.add("book");
        span.textContent = value;
        span.classList.add("title");
        button.classList.add("dltBtn");
        button.textContent = "Delete"

        // appending 
        li.appendChild(span);
        li.appendChild(button);
        document.getElementById("bookList").appendChild(li)

        // clearing input field
        form.querySelector("input[type='text']").value = null
    }
})

// search
const searchForm = document.forms["search-form"]
searchForm.addEventListener('keyup', (e)=>{
    let val = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");
    Array.from(books).forEach((book)=>{
        let title = book.firstElementChild.textContent;
        let index = title.toLowerCase().indexOf(val);
        if(index!=-1){
            book.style.display = 'flex';           
        }else{
            book.style.display = 'none';

        }

    })
})

