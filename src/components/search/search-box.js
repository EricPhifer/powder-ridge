import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { connectSearchBox } from "react-instantsearch-dom";

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (
    <form className={className}>
      <input
        className="SearchInput"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
      <AiOutlineSearch className="SearchIcon"/>
    </form>
  )
)