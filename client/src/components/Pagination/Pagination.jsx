import { useState } from "react";
import { ReactComponent as ArrowLeftCircle } from "../../Assets/arrow-left-circle.svg";
import { ReactComponent as ArrowRightCircle } from "../../Assets/arrow-right-circle.svg";

const Pagination = ({ page, setPage, max }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPage(parseInt(page) + 1);
  };

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    setPage(parseInt(page) - 1);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      const pageNumber = parseInt(event.target.value);
      if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > max) {
        setPage(1);
        setInput(1);
      } else {
        setPage(pageNumber);
        setInput(pageNumber);
      }
    }
  };

  const onChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <button disabled={page === 1 || page < 1} onClick={previousPage}>
        <ArrowLeftCircle />
      </button>
      <input
        name="page"
        onKeyDown={onKeyDown}
        onChange={onChange}
        autoComplete="off"
        value={input}
      />
      <p> de {max} </p>
      <button disabled={page === max || page > max} onClick={nextPage}>
        <ArrowRightCircle />
      </button>
    </div>
  );
};

export default Pagination;
