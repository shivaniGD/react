import { useState } from "react";

function AddBook(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "" || author.trim() === "") {
      setError("Enter both title and author");
      return;
    }

    props.onAdd(title.trim(), author.trim());
    setTitle("");
    setAuthor("");
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a book</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Add</button>
    </form>
  );
}

export default AddBook;
