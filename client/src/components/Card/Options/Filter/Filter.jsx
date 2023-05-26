import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { filterCardsType, filterCardsCreated } from "../../../../redux/actions";
import { useState } from "react";

const Filter = () => {
  const dispatch = useDispatch();
  const Types = useSelector((state) => state.types);
  const [isOpenType, setIsOpenType] = useState(false);
  const [isOpenCreate, setIsOpenCreate] = useState(false);

  const handleFilterType = (event) => {
    dispatch(filterCardsType(event.target.value));
  };

  const handleFilterCreated = (event) => {
    dispatch(filterCardsCreated(event.target.value));
  };

  const handleContainerType = () => {
    setIsOpenType(!isOpenType);
  };

  const handleContainerCreated = () => {
    setIsOpenCreate(!isOpenCreate);
  };

  return (
    <div className="container-filter">
      <div className="filter-type">
        <div className="btn-types">
          <input
            type="button"
            onClick={handleContainerType}
            value={isOpenType ? "Types   -" : "Types   +"}
          />
        </div>
        {isOpenType && (
          <div className="container-types">
            <label>
              <input
                type="radio"
                name="filterType"
                value="all"
                onChange={handleFilterType}
              />
              All
            </label>
            {Types?.map((type) => (
              <label key={type.id}>
                <input
                  type="radio"
                  name="filterType"
                  value={type.name}
                  onChange={handleFilterType}
                />
                {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="filter-root">
        <div className="btn-roots">
          <input
            type="button"
            onClick={handleContainerCreated}
            value={isOpenCreate ? "Roots   -" : "Roots   +"}
          />
        </div>
        {isOpenCreate && (
          <div className="container-roots">
            <label>
              <input
                type="radio"
                name="filterCreate"
                value="all"
                onChange={handleFilterCreated}
              />
              All
            </label>
            <label>
              <input
                type="radio"
                name="filterCreate"
                value="API"
                onChange={handleFilterCreated}
              />
              API
            </label>
            <label>
              <input
                type="radio"
                name="filterCreate"
                value="DB"
                onChange={handleFilterCreated}
              />
              Database
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
