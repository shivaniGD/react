import { useState } from "react";
import SearchBox from "./SearchBox";
import AddBook from "./AddBook";
import BookList from "./BookList";
import "./App.css";

const startBooks = [
  { id: 1, title: "Atomic Habits", author: "James Clear", read: true },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", read: false },
  { id: 3, title: "Wings of Fire", author: "A. P. J. Abdul Kalam", read: true },
  { id: 4, title: "Deep Work", author: "Cal Newport", read: false },
];

function App() {
  const [books, setBooks] = useState(startBooks);
  const [search, setSearch] = useState("");
  const [onlyUnread, setOnlyUnread] = useState(false);

  function addBook(title, author) {
    const newBook = { id: Date.now(), title: title, author: author, read: false };
    setBooks([...books, newBook]);
  }

  function toggleRead(id) {
    setBooks(
      books.map((b) => (b.id === id ? { ...b, read: !b.read } : b))
    );
  }

  function deleteBook(id) {
    setBooks(books.filter((b) => b.id !== id));
  }

  const shown = books.filter((b) => {
    const match = b.title.toLowerCase().includes(search.toLowerCase());
    if (onlyUnread) {
      return match && !b.read;
    }
    return match;
  });

  const readCount = books.filter((b) => b.read).length;

  return (
    <div className="box">
      <h2>My Books</h2>

      {books.length > 0 && readCount === books.length ? (
        <p className="ok">You have read everything!</p>
      ) : (
        <p>
          {readCount} of {books.length} read
        </p>
      )}

      <SearchBox search={search} onSearchChange={setSearch} />

      <label className="check">
        <input
          type="checkbox"
          checked={onlyUnread}
          onChange={(e) => setOnlyUnread(e.target.checked)}
        />
        Show only unread
      </label>

      <BookList books={shown} onToggle={toggleRead} onDelete={deleteBook} />

      <AddBook onAdd={addBook} />
    </div>
  );
}

export default App;
