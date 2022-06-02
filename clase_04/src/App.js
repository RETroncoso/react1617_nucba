import logo from "./logo.svg";
import "./App.css";
import GeneralWrapper from "./Components/GeneralWrapper/GeneralWrapper";
import ContenedorChico from "./Components/ContenedorChico/ContenedorChico";
import EjemploOnClick from "./Components/EjemploOnClick/EjemploOnClick";
import EjemploOnChange from "./Components/EjemploOnChange/EjemploOnChange";
import EjemploUseReducer from "./Components/EjemploUseReducer/EjemploUseReducer";

function App() {
  return (
    <GeneralWrapper>
      <ContenedorChico>
        {/* <EjemploOnClick /> */}
        {/* <EjemploOnChange /> */}
        <EjemploUseReducer />
      </ContenedorChico>
    </GeneralWrapper>
  );
}

export default App;
