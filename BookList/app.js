//Book Constructor
function Book(title,author,isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//UI Constructor
function  UI(){}

// Adding book to table
UI.prototype.addBookToList = function(book){
  const list = document.getElementById("book-list");
  // Create tr element
  const row = document.createElement("tr");
  // Insert cols
  row.innerHTML = `
    <td> ${book.title} </td>
    <td> ${book.author} </td>
    <td> ${book.isbn} </td>
    <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message,className){
  // Create div
  const div = document.createElement("div");
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message))
  // Get parent
  const container = document.querySelector(".container")
  // Get form
  const form = document.querySelector("#book-form")
  //Insert alert
  container.insertBefore(div,form);
  // Timeout
  setTimeout(function(){
    document.querySelector(".alert").remove();
  },2000)
}
// Delete book
UI.prototype.deleteBook = function(target){
  if(target.className==="delete"){
    target.parentElement.parentElement.remove();
  }
}
// Clear Fields
UI.prototype.clearFields = function (){
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}
//Event Listeners
document.getElementById("book-form").addEventListener("submit",
  function(e){
    const title = document.getElementById("title").value,
          author = document.getElementById("author").value,
          isbn = document.getElementById("isbn").value;

    // Instantiate book
    const book = new Book(title,author,isbn);
    // Instantiate UI object
    const ui = new UI();
    
    // Validate
    if(title===""||author===""|| isbn===""){
     // Error alert
     ui.showAlert("Please fill in all fields","error");
    }
    else{
      // Add book to list
      ui.addBookToList(book);
      // Clear Fields
      ui.clearFields();
      // Success alert
      ui.showAlert("Book Added","success")
    }
    
    e.preventDefault();
  }
);

// Event listener for delete book
document.querySelector("#book-list").addEventListener("click",function(e){
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert("Book Deleted Successfully","success")
  e.preventDefault();
})