import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" exact element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
