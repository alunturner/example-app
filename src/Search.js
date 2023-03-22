import React from "react";
import SearchButton from "./SearchButton";

const Search = (props) => {
  const { searchFunction } = props;

  const [searchInput, setSearchInput] = React.useState("");

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form
            className="form-group search-box"
            onSubmit={(e) => {
              // this stops that page refreshing
              e.preventDefault();
              searchFunction(searchInput);
            }}
          >
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
