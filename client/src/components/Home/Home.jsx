import "./Home.css";
import SearchBar from "./SearchBar/SearchBar";
import Card from "../Card/Card";
import Order from "../Card/Options/Order/Order";
import Filter from "../Card/Options/Filter/Filter";

const Home = () => {
  return (
    <div className="home">
      <div className="container-home">
        <div className="container-sidebar">
          <SearchBar />
          <Filter />
          <Order />
        </div>
        <Card />
      </div>
    </div>
  );
};

export default Home;
