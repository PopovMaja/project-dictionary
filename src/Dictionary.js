import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definiton`);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search} className="formKeyword">
        <input
          type="search"
          onChange={handleKeywordChange}
          className="inputKeyword"
        />
      </form>
    </div>
  );
}
