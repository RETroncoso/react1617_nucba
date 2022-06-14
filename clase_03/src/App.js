import logo from "./logo.svg";
import "./App.css";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import EjemploEnLinea from "./components/EjemploEnLinea/EjemploEnLinea";
import EjemploObjetos from "./components/EjemploObjetos/EjemploObjetos";
import EjemploModule from "./components/EjemploModule/EjemploModule";
import EjemplosStyled from "./components/EjemplosStyled/EjemplosStyled";
import { StyledPorProps } from "./components/EjemplosStyled/ElementosEjemplosStyled";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import Counter from "./components/Contador/Counter";

function App() {
  return (
    <>
      <AppWrapper>
        <p>Este contenedor tiene estilos mediante una hoja CSS</p>
        <EjemploEnLinea></EjemploEnLinea>
        <EjemploObjetos></EjemploObjetos>
        <EjemploModule></EjemploModule>
        <EjemplosStyled />
        <StyledPorProps font="1.5rem" color="cyan">
          Este es un h3 styled por props
        </StyledPorProps>
      </AppWrapper>
      {/* <GlobalStyle /> */}
    </>
    // <Counter />
  );
}

export default App;
