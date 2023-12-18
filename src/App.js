import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
