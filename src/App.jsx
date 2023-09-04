import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./Components/Store/Store";
import CircularProgress from "@mui/material/CircularProgress"; // Import CircularProgress from Material-UI
import "./App.css";
import SignIn from "./Screens/Signin/Signin";
import Signup from "./Screens/Signup/Signup";

const Home = lazy(() => import("./Screens/Home/Home"));
const Cart = lazy(() => import("./Screens/Cart/Cart"));
const OrderScreen = lazy(() => import("./Screens/Order/OrderScreen"));

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Suspense
          fallback={
            <div
              className="loader-container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
              }}
            >
              <CircularProgress />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<OrderScreen />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Suspense>
      </Provider>
    </Router>
  );
}

export default App;
