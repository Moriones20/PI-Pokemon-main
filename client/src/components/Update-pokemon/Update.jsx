import "./Update.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isUpdate, setIsUpdate] = useState(false);

  const handlerUpdate = () => {
    setIsUpdate(true);
    if (isUpdate) {
      navigate(`/update/${id}`);
    }
  };


  return (
    <div className="btn-update">
      <button onClick={handlerUpdate}>EDIT</button>
    </div>
  );
};

export default Update;
