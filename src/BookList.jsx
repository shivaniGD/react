import BookItem from "./BookItem";

function BookList(props) {
  if (props.books.length === 0) {
    return <p className="empty">No books found.</p>;
  }

  return (
    <ul>
      {props.books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onToggle={props.onToggle}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
}

export default BookList;
