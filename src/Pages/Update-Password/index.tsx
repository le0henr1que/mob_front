import { Container } from "../../Components/Container";
import "./styles.css";
//@ts-ignore
import Pana from "../../Assests/pana.svg";

import { Text } from "../../Components/Text";

import { useEffect, useState, useRef } from "react";
import ButtonStyle from "../../Components/Button";

//@ts-ignore
import LogMob from "../../Assests/mob-white.svg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import {
  redirect,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import match from "react-router-dom";
import api from "../../utils/api";
import {
  CircularProgress,
  Fade,
  IconButton,
  InputAdornment,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export function UpdatePassword() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("solicitation_token");
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const [load, setLoad] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const [open, setOpen] = useState(false);
  const validationSchema = Yup.object().shape({
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
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { password } = values;
      setLoad(true);

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const newPassword = password;

      await api
        .post("/reset-password-request/reset", { newPassword }, { headers })
        .then((content) => {
          navigate(`/login`);
        })
        .catch((error) => {
          console.log(error.response.data.message);
          setError(error.response.data.message);
          setOpen(true);
        });
    },
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target as HTMLFormElement);
  //   const data = Object.fromEntries(formData);

  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //   };

  //   const newPassword = data.newPassword;

  //   await api
  //     .post("/reset-password-request/reset", { newPassword }, { headers })
  //     .then((content) => {
  //       navigate(`/login`);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data.message);
  //       setError(error.response.data.message);
  //       setOpen(true);
  //     });
  // };

  const handleKeyPress = (event: any, nextInputRef: any) => {
    if (event.target.value.length === 1) {
      nextInputRef.current.focus();
    }
  };

  // useEffect(() => {}, []);

  return (
    <>
      <div className="container-challenge">
        <Snackbar
          TransitionComponent={Fade}
          open={open}
          autoHideDuration={6000}
          // onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          key="top right"
        >
          <Alert
            // onClose={handleClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            {error}
          </Alert>
        </Snackbar>
        <div className="container-content-challenge">
          <div className="continaer-lateral-form">
            <div className="container-form-challenge">
              <div className="container-challenge-content-title">
                <Text variant="font-bold headline">
                  Acabamos de enviar um código para seu e-mail
                </Text>
                <Text variant="muthed font-regular body-small">
                  Digite sua nova senha.
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

                <div className="container-challenge-content-buttons">
                  <ButtonStyle variant="medium-button">
                    {load ? <CircularProgress /> : "Redefinir Senha"}
                  </ButtonStyle>
                </div>
              </form>

              <div className="container-challenge-content-sign"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
