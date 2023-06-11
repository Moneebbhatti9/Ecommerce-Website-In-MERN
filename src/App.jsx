import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { Provider } from "react-redux";
import Store from "./Components/Store/Store";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
