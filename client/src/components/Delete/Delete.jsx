import "./Delete.css";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router";
import { deletePokemon } from "../../redux/actions";
import { useState } from "react";

const Delete = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isDeleted, setIsDeleted] = useState(false);

  const handlerDelete = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this Pokemon?"
    );
    if (confirm) {
      dispatch(deletePokemon(id));
      setIsDeleted(true);
    }
  };

  if (isDeleted) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="btn-delete">
      <button onClick={handlerDelete}>DELETE</button>
    </div>
  );
};

export default Delete;
