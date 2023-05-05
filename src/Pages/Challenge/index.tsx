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

import { redirect, useNavigate } from "react-router-dom";

export function Chellenge() {
  return (
    // <Container>
    <>
      <div className="container-challenge">
        {/* <div className="container-content-challenge"> */}
        {/* <div className="continaer-lateral-logo">
            <img src={LogMob} />
          </div> */}
        <div className="container-content-challenge">
          <div className="continaer-lateral-form">
            <div className="container-form-challenge">
              <div className="container-challenge-content-title">
                <Text variant="font-bold headline">
                  Acabamos de enviar um código para seu e-mail
                </Text>
                <Text variant="muthed font-regular body-small">
                  Insira o código de verificação de 6 dígitos enviado para
                  t*****@gmail.com.
                </Text>
                <a href="/checkpoint/forgot-password">Alterar</a>
              </div>

              <form className="form-sign">
                {/* <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { 
                      m: 6, 
                      width: "100%", 
                      display:"flex", 
                      flexDirection:"row" ,
                      justifyContent:"center",
                      alignItems:"center"
                    },
                  }}
                  noValidate
                  autoComplete="off"
                > */}
                <div className="input-challenge">
                  <TextField
                    id="challenge-number-one"
                    name="challenge-number-one"
                    // label="Email"
                    type="challenge-number-one"
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                    // onFocus
                    autoFocus
                  />

                  <TextField
                    id="challenge-number-two"
                    name="challenge-number-two"
                    // label="Email"
                    type="challenge-number-two"
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                  />
                  <TextField
                    id="challenge-number-trhee"
                    name="challenge-number-trhee"
                    // label="Email"
                    type="challenge-number-trhee"
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                  />
                  <TextField
                    id="challenge-number-four"
                    name="challenge-number-four"
                    // label="Email"
                    type="challenge-number-four"
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                  />
                  <TextField
                    id="challenge-number-five"
                    name="challenge-number-five"
                    // label="Email"
                    type="challenge-number-five"
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                  />
                  <TextField
                    id="challenge-number-six"
                    name="challenge-number-six"
                    // label="Email"
                    type="challenge-number-six"
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                  />
                  {/* </Box> */}
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
                <div className="container-challenge-content-buttons">
                  <ButtonStyle variant="medium-button">Enviar</ButtonStyle>
                </div>
              </form>

              <div className="container-challenge-content-sign">
                <Text variant="muted font-regular caption">
                  Se não encontrar o e-mail na sua caixa de entrada, verifique a
                  pasta de spam.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
