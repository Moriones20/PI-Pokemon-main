import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { searchById, searchByName } from "../../../redux/actions";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [idOrName, setIdOrName] = useState("");

  const onChange = (event) => {
    setIdOrName(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch(idOrName);
      setIdOrName("");
    }
  };

  const onSearch = () => {
      if (isNaN(idOrName)) return dispatch(searchByName(idOrName));
      dispatch(searchById(idOrName));
  };

  return (
    <div className="form">
      <button
        onClick={() => {
          onSearch();
          setIdOrName("");
        }}
      >
        <svg
          width="17"
          height="16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="search"
        >
          <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>

      <input
        type="text"
        className="input"
        placeholder="Search"
        required=""
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={idOrName}
      />
    </div>
  );
};

export default SearchBar;
