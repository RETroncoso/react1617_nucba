import Counter from "./components/Counter/Counter";
import Logo from "./components/logo/Logo";
import { CountReducerProvider } from "./context/CountReducer";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <CountReducerProvider>
        <Counter />
      </CountReducerProvider>
      <Logo />
      <GlobalStyle />
    </>
  );
}

export default App;
