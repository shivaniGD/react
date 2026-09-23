function SearchBox(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={props.search}
        onChange={(e) => props.onSearchChange(e.target.value)}
      />
      {props.search !== "" && (
        <button onClick={() => props.onSearchChange("")}>Clear</button>
      )}
    </div>
  );
}

export default SearchBox;
