import "./styles.css";
import { Text } from "../../Components/Text";
import { useState } from "react";
import ButtonStyle from "../../Components/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { CircularProgress } from "@material-ui/core";
import * as Yup from "yup";
import { useFormik } from "formik";

export function ForgotPassword() {
  const [load, setLoad] = useState<boolean>(false);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoad(true);

      const { email } = values;

      await api
        .post("/reset-password-request", {
          email,
        })
        .then((content) => {
          const headers = {
            Authorization: `Bearer ${content.data.ticket}`,
          };

          api.post("/reset-password-request/send-email", {}, { headers });

          setLoad(false);
          navigate(
            `/checkpoint/chellenge-reset?solicitation_token=${content.data.ticket}`
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <>
      <div className="container-forgot-password">
        <div className="container-content-forgot-password">
          <div className="continaer-lateral-form">
            <div className="container-form-forgot-password">
              <div className="container-forgot-password-content-title">
                <Text variant="font-bold headline">Esqueceu a senha?</Text>
                <Text variant="muthed font-regular body-small">
                  Redefina a senha em duas etapas rápidas
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
                </Box>

                <div className="container-forgot-password-content-buttons">
                  <ButtonStyle variant="medium-button">
                    {load ? <CircularProgress /> : "Redefinir Senha"}
                  </ButtonStyle>
                </div>
              </form>

              <div className="container-forgot-password-content-sign">
                <Text variant="muted font-regular caption">
                  <a href="/login"> Voltar</a>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
