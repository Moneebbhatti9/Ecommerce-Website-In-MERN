import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home/Home";
import store from "./Components/Store/Store";
import Cart from "./Screens/Cart/Cart";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
