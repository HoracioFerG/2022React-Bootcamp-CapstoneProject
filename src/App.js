import { Provider } from "react-redux";

import store from "./store/store";
import "./App.css";
import { Homepage } from "./pages/HomePage";

function App() {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}

export default App;
