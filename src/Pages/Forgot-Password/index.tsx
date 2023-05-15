import { Container } from "../../Components/Container";
import "./styles.css";
//@ts-ignore
import Pana from "../../Assests/pana.svg";

import { Text } from "../../Components/Text";

import { useEffect, useState } from "react";
import ButtonStyle from "../../Components/Button";

//@ts-ignore
import LogMob from "../../Assests/mob-white.svg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { redirect, useNavigate, useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import { CircularProgress } from "@material-ui/core";
import { error } from "console";

export function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);
  const [emailEmpty, setEmailEmpty] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoad(true);

    if (!email) {
      setEmailEmpty(true);
      setLoad(false);
      return;
    } else {
      setEmailEmpty(false);
    }

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
  };

  return (
    // <Container>
    <>
      <div className="container-forgot-password">
        {/* <div className="container-content-forgot-password"> */}
        {/* <div className="continaer-lateral-logo">
            <img src={LogMob} />
          </div> */}
        <div className="container-content-forgot-password">
          <div className="continaer-lateral-form">
            <div className="container-form-forgot-password">
              <div className="container-forgot-password-content-title">
                <Text variant="font-bold headline">Esqueceu a senha?</Text>
                <Text variant="muthed font-regular body-small">
                  Redefina a senha em duas etapas rápidas
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
                    error={emailEmpty && true}
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    autoFocus
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {emailEmpty && (
                    <p className="input-helper">
                      Insira um endereço de e-mail.
                    </p>
                  )}
                </Box>

                {/* 
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
                  </Snackbar> */}
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
