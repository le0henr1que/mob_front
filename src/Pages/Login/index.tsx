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
import GoogleSignIn from "../../Components/Button-login-google";
//@ts-ignore
import LogMob from "../../Assests/mob-white.svg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../context/AuthContext";
import { UserInterface } from "../../@types";
import { Alert, Snackbar } from "@mui/material";
import { Button, Fade, Grow, Slide, SnackbarOrigin } from "@material-ui/core";
import { redirect, useNavigate } from "react-router-dom";

export function Login() {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, loginError } = useAuth();
  const [error, setError] = useState<string>();

  const [open, setOpen] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setOpen(false);
  };

  const handleChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
  };
  // const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email) {
      setEmailEmpty(true);
      return;
    } else {
      setEmailEmpty(false);
    }
    if (!password) {
      setPasswordEmpty(true);
      return;
    } else {
      setPasswordEmpty(false);
    }

    const userDataLogin: UserInterface = {
      email,
      password,
    };

    const handleLogin = await login(userDataLogin);

    // alert(redirect)
  };

  useEffect(() => {
    loginError && setOpen(true);
  });

  return (
    // <Container>
    <div className="container-login">
      <div className="container-content-login">
        <div className="continaer-lateral-logo">
          <img src={LogMob} />
        </div>

        <div className="continaer-lateral-form">
          <div className="container-form-login">
            <div className="container-login-content-title">
              <Text variant="font-bold headline">Bem vindo de volta</Text>
              <Text variant="muthed font-regular body-small">
                Utilize sua credencial Mob para realizar o acesso.
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
                  error={loginError || (emailEmpty && true)}
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                {emailEmpty && (
                  <p className="input-helper">Insira um endereço de e-mail.</p>
                )}
                <TextField
                  //@ts-ignore
                  error={loginError || (passwordEmpty && true)}
                  name="password"
                  id="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                {passwordEmpty && (
                  <p className="input-helper">Insira uma senha.</p>
                )}
              </Box>

              <div className="container-login-content-option">
                <div className="remember-check-password">
                  <Checkbox
                    checked={isChecked}
                    onChange={handleChange}
                    color="default"
                    inputProps={{ "aria-label": "checkbox" }}
                    // style={useStyles}
                  />
                  <Text variant="muted font-regular caption">
                    Lembrar senha
                  </Text>
                </div>
                <div className="forgot-password">
                  <a href="/forgot" className="link">
                    <Text variant="muted font-regular caption">
                      Esqueci a senha
                    </Text>
                  </a>
                </div>
              </div>

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
                  {loginError}
                </Alert>
              </Snackbar>
              <div className="container-login-content-buttons">
                <ButtonStyle variant="medium-button">Logar</ButtonStyle>

                <GoogleSignIn />
              </div>
            </form>
            <div className="container-login-content-sign">
              <Text variant="muted font-regular caption">
                Não possui conta?
                <a href="/cadastrar">Criar conta gratis!</a>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
