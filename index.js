// Function to fetch books and render them to the DOM
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // Fetch request
    .then((response) => response.json()) // Parse the response as JSON
    .then((books) => renderBooks(books)); // Pass the JSON data to renderBooks
}

// Function to render the books to the DOM
function renderBooks(books) {
  const booksContainer = document.getElementById("books-container"); // Get the container element
  if (booksContainer) {
    const ul = document.createElement("ul"); // Create a list element for books
    books.forEach((book) => {
      const li = document.createElement("li"); // Create a list item for each book
      li.textContent = book.name; // Set the book title
      ul.appendChild(li); // Add the list item to the list
    });
    booksContainer.appendChild(ul); // Append the list of books to the container
  }
}

// Wait for the DOM to load before running fetchBooks
document.addEventListener("DOMContentLoaded", fetchBooks);
