import { useDispatch } from "react-redux";
import { searchById } from "../../../redux/actions";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");

  const onChange = (event) => {
    setId(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch(id);
      setId("");
    }
  };

  const onSearch = () => {
    dispatch(searchById(id));
  };

  return (
    <div>
      <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={id} />
      <button
        onClick={() => {
          onSearch();
          setId("");
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
