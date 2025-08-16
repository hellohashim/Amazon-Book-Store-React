import React from "react";
import style from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={`flex-grow-1 d-flex justify-content-center ms-3 ${style["nav-search-bar-container"]}`}>
      <form action="" className={style["nav-search-bar"]}>
        <div className="input-group">

          {/* Dropdown button */}
          
          <button
            className={`btn dropdown-toggle hide-on-mobile ${style["dropdown-toggle"]}`}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">option1</a></li>
            <li><a className="dropdown-item" href="#">option2</a></li>
            <li><a className="dropdown-item" href="#">option3</a></li>
            <li><a className="dropdown-item" href="#">option4</a></li>
          </ul>

          {/* Search input */}
          <input
            type="search"
            className={`form-control border-0 text-dark ${style["nav-search-bar-text"]}`}
            placeholder="Search Amazon"
          />

          {/* Search icon button */}
          <button className={`btn border-0 ${style["nav-search-bar-button"]}`} type="button">
            <i className="bi bi-search"></i>
          </button>

        </div>
      </form>
    </div>
  );
}

export default SearchBar;
