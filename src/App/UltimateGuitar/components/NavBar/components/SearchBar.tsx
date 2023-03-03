import React, { useState } from "react";
import "../style.scss";

function SearchBar() {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchChange = (text: string) => {
    setSearchText(text);
  };

  return (
    <div id="ult-guitar-nav-search-bar">
      <input
        value={searchText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleSearchChange(e.currentTarget.value)
        }
        placeholder="Enter artist name or song title"
      />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
