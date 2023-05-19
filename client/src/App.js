import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Landing from "./components/Landing/Landing";
import NotFound from "./components/NotFound/NotFound";
import FormCreate from "./components/Form-create/Form";
import FormUpdate from "./components/Form-update/Form-update";
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
        <Route path="/update/:id" element={<FormUpdate />} />
        <Route path="/create" element={<FormCreate />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
