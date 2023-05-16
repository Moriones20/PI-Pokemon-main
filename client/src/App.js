import "./App.css";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
