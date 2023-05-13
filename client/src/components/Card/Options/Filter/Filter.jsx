import { useDispatch } from "react-redux";
import { filterCards } from "../../../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select name="filter" onChange={handleFilter}>
        <option value="">Choose a type</option>
        <option value="all">all</option>
        <option value="normal">normal</option>
        <option value="fighting">fighting</option>
        <option value="rock">rock</option>
        <option value="bug">bug</option>
        <option value="poison">poison</option>
      </select>
    </div>
  );
};

export default Filter;
