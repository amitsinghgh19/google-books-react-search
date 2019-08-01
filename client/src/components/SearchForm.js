import React from "react";

function SearchForm(props) {
  return (
    <div id="searchContainer">
      <center>
      <h3>Book Search</h3>
      <form id="bookSearch" class="col-sm-6">
        <label htmlFor="bookInput" form="bookSearch">
        Search the world's most extensive index of full-text books.
        </label>
        <input class="rounded" 
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
          id="searchBtn"
          type="submit"
          onClick={e => props.handleSearchClick(e)}
        ><i class="fas fa-search mx-2"></i>
        </button>
      </form>
      </center>
    </div>
  );
}

export default SearchForm;
