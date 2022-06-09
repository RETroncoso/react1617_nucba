import "./App.css";
import Counter from "./components/Counter/Counter";
import Logo from "./components/logo/Logo";
import GlobalStyles from "./Styles/GlobalStyles";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
      <Logo />
      <GlobalStyles />
    </>
  );
}

export default App;
