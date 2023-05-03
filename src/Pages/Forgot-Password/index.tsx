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
      <div className="container-login">
        {/* <div className="container-content-login"> */}
        {/* <div className="continaer-lateral-logo">
            <img src={LogMob} />
          </div> */}

        <div className="continaer-lateral-form">
          <div className="container-form-login">
            <div className="container-login-content-title">
              <Text variant="font-bold headline">Bem vindo de volta</Text>
              <Text variant="muthed font-regular body-small">
                Utilize sua credencial Mob para realizar o acesso.
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
                />
              </Box>

              <div className="container-login-content-option">
                <div className="remember-check-password">
                  {/* <Checkbox
                      checked={isChecked}
                      onChange={handleChange}
                      color="default"
                      inputProps={{ "aria-label": "checkbox" }}
                      // style={useStyles}
                    />
                    <Text variant="muted font-regular caption">
                      Lembrar senha
                    </Text> */}
                </div>
                <div className="forgot-password">
                  <a href="/forgot" className="link">
                    <Text variant="muted font-regular caption">
                      Esqueci a senha
                    </Text>
                  </a>
                </div>
              </div>
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
              <div className="container-login-content-buttons">
                <ButtonStyle variant="medium-button">
                  {/* {load ? <CircularProgress /> : "Logar"} */}
                </ButtonStyle>
              </div>
            </form>
            <div className="container-login-content-buttons">
              {/* <GoogleSignIn onSendAccessToken={handleLoginWithGoogle} /> */}
            </div>
            <div className="container-login-content-sign">
              <Text variant="muted font-regular caption">
                Não possui conta?
                <a href="/cadastrar">Criar conta gratis!</a>
              </Text>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
