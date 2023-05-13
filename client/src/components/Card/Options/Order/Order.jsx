import { useDispatch } from "react-redux";
import { orderCards } from "../../../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  return (
    <div>
      <select name="order" onChange={handleOrder}>
        <optgroup label="By Name"></optgroup>
          <option value="ASC_NAME">Ascendent</option>
          <option value="DESC_NAME">Descendent</option>
        <optgroup label="By attack"></optgroup>
          <option value="ASC_ATK">Ascendent</option>
          <option value="DESC_ATK">Descendent</option>
      </select>
    </div>
  );
};

export default Order;
