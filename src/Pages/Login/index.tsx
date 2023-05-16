import "./styles.css";

//@ts-ignore
import Google from "../../Assests/icon-google.svg";
import { Text } from "../../Components/Text";
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
import {
  CircularProgress,
  Fade,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { login, AuthError, authState, loginGoogle } = useAuth();
  const [error, setError] = useState<string>();
  const [load, setLoad] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    password: Yup.string().required("A senha é obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoad(true);

      const { email, password } = values;

      const userLogin: UserInterface = {
        email,
        password,
      };

      await login(userLogin)
        .then((content) => {
          setOpen(false);
          setLoad(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error.response.data.message);
          if (!AuthError) {
            setError(
              "Ocorreu um erro inesperado, tente novamente mais tarde ou entre em contato com o suporte mob!."
            );
          }
          setOpen(true);
          setLoad(false);
        });
    },
  });

  const handleLoginWithGoogle = async (infoUser: any) => {
    setLoad(true);
    await loginGoogle(infoUser.access_token);
    setLoad(false);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate("/");
    }
  });

  return (
    <>
      <div className="container-login">
        <Snackbar
          TransitionComponent={Fade}
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          key="top right"
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="error"
            sx={{ width: "300px" }}
          >
            {AuthError}
          </Alert>
        </Snackbar>
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

              <form className="form-sign" onSubmit={formik.handleSubmit}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                    label="Senha"
                    id="password"
                    name="password"
                    variant="outlined"
                    value={formik.values.password}
                    type={showPassword ? "text" : "password"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(
                      formik.touched.password && formik.errors.password
                    )}
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleTogglePassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <div className="container-login-content-option">
                  <div className="forgot-password">
                    <a href="/checkpoint/forgot-password" className="link">
                      <Text variant="muted font-regular caption">
                        Esqueci a senha
                      </Text>
                    </a>
                  </div>
                </div>

                <div className="container-login-content-buttons">
                  <ButtonStyle variant="medium-button">
                    {load ? <CircularProgress /> : "Logar"}
                  </ButtonStyle>
                </div>
              </form>
              <div className="container-login-content-buttons">
                <GoogleSignIn onSendAccessToken={handleLoginWithGoogle} />
              </div>
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
    </>
  );
}
