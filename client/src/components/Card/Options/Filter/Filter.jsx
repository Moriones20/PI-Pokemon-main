import { useDispatch, useSelector } from "react-redux";
import { filterCardsType, filterCardsCreated } from "../../../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();
  const Types = useSelector((state) => state.types);

  const handleFilterType = (event) => {
    dispatch(filterCardsType(event.target.value));
  };

  const handleFilterCreated = (event) => {
    dispatch(filterCardsCreated(event.target.value));
  };

  return (
    <div>
      <select name="filterType" onChange={handleFilterType}>
        <option value="all">Select a type</option>
        <option value="all">All</option>
        {Types?.map((type) => {
          return (
            <option value={type.name} key={type.id}>
              {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            </option>
          );
        })}
      </select>
      <select name="filterCreated" onChange={handleFilterCreated}>
        <option value="all">Select a root</option>
        <option value="all">All</option>
        <option value="API">API</option>
        <option value="DB">Database</option>
      </select>
    </div>
  );
};

export default Filter;
