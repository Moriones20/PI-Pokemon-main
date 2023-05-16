import "./Order.css";
import { useDispatch } from "react-redux";
import { orderCards } from "../../../../redux/actions";
import { useState } from "react";

const Order = () => {
  const dispatch = useDispatch();
  const [isOpenOrder, setIsOpenOrder] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };
  const handleContainerOrder = () => {
    setIsOpenOrder(!isOpenOrder);
  };

  return (
    <div className="container-order">
      <div className="btn-order">
        <input
          type="button"
          onClick={handleContainerOrder}
          value={isOpenOrder ? "Order   -" : "Order   +"}
        />
      </div>
      {isOpenOrder && (
        <div className="container-orders">
          <label className="bold-name">By Name</label>
          <label>
            <input
              type="radio"
              name="filterOrder"
              value="ASC_NAME"
              onChange={handleOrder}
            />
            Ascending
          </label>
          <label>
            <input
              type="radio"
              name="filterOrder"
              value="DESC_NAME"
              onChange={handleOrder}
            />
            Descending
          </label>
          <label className="bold-attack">By Attack</label>
          <label>
            <input
              type="radio"
              name="filterOrder"
              value="ASC_ATK"
              onChange={handleOrder}
            />
            Ascending
          </label>
          <label>
            <input
              type="radio"
              name="filterOrder"
              value="DESC_ATK"
              onChange={handleOrder}
            />
            Descending
          </label>
        </div>
      )}
    </div>
  );
};

export default Order;
