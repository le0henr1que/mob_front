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
import { CircularProgress, Fade, Snackbar } from "@material-ui/core";
import { Alert } from "@mui/material";

export function UpdatePassword() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("solicitation_token");
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const [load, setLoad] = useState<boolean>(false);

  const [open, setOpen] = useState(false);

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const newPassword = data.newPassword;

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
  };

  const handleKeyPress = (event: any, nextInputRef: any) => {
    if (event.target.value.length === 1) {
      nextInputRef.current.focus();
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="container-challenge">
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

              <form className="form-sign" onSubmit={handleSubmit}>
                <div className="new-password">
                  <TextField
                    id="newPassword"
                    name="newPassword"
                    label="Nova senha"
                    variant="outlined"
                    type="password"
                    // inputRef={input6Ref}
                    // inputProps={{ maxLength: 1 }}
                  />
                </div>
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
                <div className="container-challenge-content-buttons">
                  <ButtonStyle variant="medium-button">
                    {load ? <CircularProgress /> : "Redefinir Senha"}
                  </ButtonStyle>
                </div>
              </form>

              <div className="container-challenge-content-sign">
                {/* <Text variant="muted font-regular caption">
                  Se não encontrar o e-mail na sua caixa de entrada, verifique a
                  pasta de spam.
                </Text> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
