function BookItem({ book, onToggle, onDelete }) {
  return (
    <li>
      <span className={book.read ? "done" : ""}>{book.title}</span> by{" "}
      {book.author}
      {book.read && <span className="tag"> (Read)</span>}
      <br />
      <button onClick={() => onToggle(book.id)}>
        {book.read ? "Mark unread" : "Mark read"}
      </button>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </li>
  );
}

export default BookItem;
