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

import { redirect, useNavigate } from "react-router-dom";

export function ForgotPassword() {
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

              <form className="form-sign">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    autoFocus
                  />
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
                    Redefinir Senha
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
