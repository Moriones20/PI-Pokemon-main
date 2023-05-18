import "./App.css";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const showNav = () => {
    return !(location.pathname === "/" || location.pathname === "/404");
  };

  return (
    <div className="App">
      {showNav() && <Nav />}
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
