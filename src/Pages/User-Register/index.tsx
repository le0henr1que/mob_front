import { Container } from "../../Components/Container";
import "./styles.css";
//@ts-ignore
import Pana from "../../Assests/pana.svg";
//@ts-ignore
import Google from "../../Assests/icon-google.svg";
import { Text } from "../../Components/Text";
import { Input } from "../../Components/Input";
import Checkbox from "@material-ui/core/Checkbox";
import { useEffect, useState } from "react";
import ButtonStyle from "../../Components/Button";
//@ts-ignore
import Rafiki1 from "../../Assests/rafiki1.svg";
//@ts-ignore
import LogMob from "../../Assests/mob-white.svg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../context/AuthContext";
import { UserInterface } from "../../@types";
import { CircularProgress, Fade, Snackbar } from "@material-ui/core";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [isChecked, setIsChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { register, AuthError, login, authState } = useAuth();
  const [redirect, setRedirect] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);

  const [open, setOpen] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [nameEmpty, setNameEmpty] = useState(false);

  const handleChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
  };

  const navigate = useNavigate();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoad(true);

    if (!name) {
      setNameEmpty(true);
      setLoad(false);
      return;
    }
    setNameEmpty(false);
    if (!email) {
      setEmailEmpty(true);
      setLoad(false);
      return;
    }
    setEmailEmpty(false);
    if (!password) {
      setPasswordEmpty(true);
      setLoad(false);
      return;
    }
    setPasswordEmpty(false);

    const userDataRegister: UserInterface = {
      email,
      password,
      name,
      accepted_terms: true,
    };

    await register(userDataRegister);
    setRedirect(true);

    setLoad(false);
  };

  useEffect(() => {
    AuthError && setOpen(true);

    if (redirect && !AuthError) {
      const userLogin: UserInterface = {
        email,
        password,
      };

      login(userLogin);
    }

    if (authState.isAuthenticated) {
      navigate("/");
    }
  });

  return (
    <div className="container-login">
      <div className="container-content-login">
        <div className="continaer-lateral-logo">
          <img src={LogMob} />
        </div>

        <div className="continaer-lateral-form">
          <div className="container-form-login">
            <div className="container-login-content-title">
              <Text variant="font-bold headline">Criar uma conta</Text>
              <Text variant="muthed font-regular body-small">
                Utilize seus dados para cruar um novo acesso.
              </Text>
            </div>
            <form className="form-sign" onSubmit={handleSubmit}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  //@ts-ignore
                  error={AuthError || (nameEmpty && true)}
                  id="full-name"
                  name="full-name"
                  label="Nome"
                  variant="outlined"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                {nameEmpty && <p className="input-helper">Insira seu nome.</p>}
                <TextField
                  //@ts-ignore
                  error={AuthError || (emailEmpty && true)}
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                />
                {emailEmpty && (
                  <p className="input-helper">Insira um endereço de e-mail.</p>
                )}
                <TextField
                  //@ts-ignore
                  error={AuthError || (passwordEmpty && true)}
                  id="password"
                  name="password"
                  label="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  variant="outlined"
                  type="password"
                />
                {passwordEmpty && (
                  <p className="input-helper">Insira uma senha.</p>
                )}
              </Box>

              <div className="container-login-content-option">
                <Text variant="muted font-regular caption">
                  Ao clicar em cadastre-se, você aceita os
                  <a href="#">termos e condições</a>, a
                  <a href="#">Política de Privacidade</a> e a
                  <a href="#">Política de Cookies</a> do mob!.
                </Text>
              </div>

              <div className="container-login-content-buttons">
                <ButtonStyle variant="medium-button">
                  {load ? <CircularProgress /> : "Cadastre-se"}
                </ButtonStyle>
              </div>
            </form>

            <Snackbar
              TransitionComponent={Fade}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              key="top right"
            >
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
              >
                {AuthError}
              </Alert>
            </Snackbar>

            <div className="container-login-content-sign">
              <Text variant="muted font-regular caption">
                Já possui uma conta?
                <a href="/login">Login</a>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
