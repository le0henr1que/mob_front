import "./styles.css";
import { Text } from "../../Components/Text";
import { useEffect, useState } from "react";
import ButtonStyle from "../../Components/Button";
//@ts-ignore
import LogMob from "../../Assests/mob-white.svg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../context/AuthContext";
import { UserInterface } from "../../@types";
import {
  CircularProgress,
  Fade,
  IconButton,
  InputAdornment,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import * as Yup from "yup";
import { useFormik } from "formik";

export function Register() {
  const { register, AuthError, login, authState } = useAuth();
  const [load, setLoad] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string>();

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    name: Yup.string()
      .required("O nome é obrigatório")
      .min(2, "O nome deve ter no mínimo 2 caracteres")
      .max(50, "O nome deve ter no máximo 50 caracteres"),
    password: Yup.string()
      .required("A senha é obrigatória")
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        "A senha deve conter pelo menos uma letra e um número"
      ),

    confirmPassword: Yup.string()
      .required("A confirmação de senha é obrigatória")
      .oneOf([Yup.ref("password")], "As senhas devem ser iguais"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoad(true);

      const { email, password, name } = values;

      const userDataRegister: UserInterface = {
        email,
        password,
        name,
        accepted_terms: true,
      };

      await register(userDataRegister)
        .then(async (content) => {
          const userLogin: UserInterface = {
            email,
            password,
          };

          await login(userLogin)
            .then((content) => {
              navigate("/");
              setLoad(false);
            })
            .catch((error) => {
              setOpen(true);
              setError(error.response.data.message);
              setLoad(false);
            });

          setOpen(false);
          setLoad(false);
        })
        .catch((error) => {
          setOpen(true);
          setError(error.response.data.message);
          setLoad(false);
        });
    },
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigate("/");
    }
  });

  return (
    <div className="container-register">
      <Snackbar
        TransitionComponent={Fade}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        key="top right"
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
      <div className="container-content-register">
        <div className="continaer-lateral-logo-register">
          <img src={LogMob} />
        </div>

        <div className="continaer-lateral-form">
          <div className="container-form-register">
            <div className="container-register-content-title">
              <Text variant="font-bold headline">Criar uma conta</Text>
              <Text variant="muthed font-regular body-small">
                Utilize seus dados para cruar um novo acesso.
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
                  id="name"
                  name="name"
                  label="Nome"
                  fullWidth
                  variant="outlined"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(formik.touched.name && formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
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
                  helperText={formik.touched.password && formik.errors.password}
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

                <TextField
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirmação de Senha"
                  variant="outlined"
                  type="password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={Boolean(
                    formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                  )}
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
              </Box>

              <div className="container-register-content-option">
                <Text variant="muted font-regular caption">
                  Ao clicar em cadastre-se, você aceita os{" "}
                  <a href="#">termos e condições</a>,{" "}
                  <a href="#">Política de Privacidade</a> e a{" "}
                  <a href="#">Política de Cookies</a> do mob!.
                </Text>
              </div>

              <div className="container-register-content-buttons">
                <ButtonStyle variant="medium-button">
                  {load ? <CircularProgress /> : "Cadastre-se"}
                </ButtonStyle>
              </div>
            </form>

            <div className="container-register-content-sign">
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
