function Library() {
  this.books = [];

  this.addBook = function (bookName, bookAuthor, bookYear, bookId) {
    this.books.push({
      name: bookName,
      author: bookAuthor,
      year: bookYear,
      id: bookId,
    });
  };

  this.printBookInfo = function (bookId) {
    const book = this.books.find((book) => book.id === bookId);
    if (book) {
      console.log(
        `Name: ${book.name}, Author: ${book.author}, Year: ${book.year}`
      );
    } else {
      console.log("Book not found");
    }
  };

  this.printAllBooks = function () {
    this.books.forEach((book) => {
      console.log(
        `ID: ${book.id}, Name: ${book.name}, Author: ${book.author}, Year: ${book.year}`
      );
    });
  };
}

let myLibrary = new Library();

myLibrary.addBook("Kobzar", "Taras Shevchenko", 1840, 1);
myLibrary.addBook("Haidamaky", "Taras Shevchenko", 1841, 2);
myLibrary.addBook("Faded Leaves", "Ivan Franko", 1896, 3);
myLibrary.addBook("Forest Song", "Lesya Ukrainka", 1911, 4);

myLibrary.printBookInfo(3);

myLibrary.printAllBooks();
