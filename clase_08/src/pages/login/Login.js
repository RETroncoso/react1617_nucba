import Panel from "../../components/panel/Panel";
import FieldSet from "../../components/fieldSet/FieldSet";
import Button from "../../components/button/Button";
import {
  LoginFormStyled,
  LoginSectionStyled,
  LoginTitleStyled,
} from "./LoginStyles";
import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { handlerSubmit, form, isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [navigate, isAuth]);

  return (
    <LoginSectionStyled>
      <LoginTitleStyled>{"Unite a la comunidad pa...."}</LoginTitleStyled>
      <Panel>
        <LoginFormStyled>
          <FieldSet
            type="text"
            placeholder="Escribí tu username..."
            value={form.username}
            id="username"
            name="username"
            label="User"
            maxLength={10}
          />

          <FieldSet
            type="password"
            placeholder="Escribí tu contraseña..."
            value={form.password}
            id="password"
            name="password"
            label="Password"
            error="Este campo es requerido"
          />

          <Button
            primary
            type="submit"
            onClick={(e) => {
              handlerSubmit(e);
            }}
          >
            Enviar!
          </Button>
        </LoginFormStyled>
      </Panel>
    </LoginSectionStyled>
  );
}

export default Login;
