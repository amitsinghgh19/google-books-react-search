import React from "react";

function SearchForm(props) {
  return (
    <div id="searchContainer">
      <center>
      <h3>Book Search</h3>
      <form id="bookSearch">
        <label htmlFor="bookInput" form="bookSearch">
          Enter a book to search:
        </label>
        <input
          type="text"
          name="bookInput"
          id="bookInput"
          form="bookSearch"
          onChange={e => props.handleChange(e)}
          placeholder="Search by Title, Author, Description, etc"
          required={true}
        />
        <br />
        <button
          className="search"
          type="submit"
          onClick={e => props.handleSearchClick(e)}
        >
          Search
        </button>
      </form>
      </center>
    </div>
  );
}

export default SearchForm;
