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
    <div>
      <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={idOrName} />
      <button
        onClick={() => {
          onSearch();
          setIdOrName("");
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
