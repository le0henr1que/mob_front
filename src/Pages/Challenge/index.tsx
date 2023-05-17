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

export function Chellenge() {
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
    setLoad(true);
    const {
      challengeNumberOne,
      challengeNumberTwo,
      challengeNumberTrhee,
      challengeNumberFour,
      challengeNumberFive,
      challengeNumberSix,
    } = data;
    const codeChallenge = `${challengeNumberOne}${challengeNumberTwo}${challengeNumberTrhee}${challengeNumberFour}${challengeNumberFive}${challengeNumberSix}`;

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    await api
      .post("/reset-password-request/verify", { codeChallenge }, { headers })
      .then((content) => {
        navigate(`/checkpoint/update-password?solicitation_token=${token}`);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setError(error.response.data.message);
        setOpen(true);
        setLoad(false);
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
                  Um email de redefinição de senha foi enviado para o endereço
                  fornecido.
                </Text>
                <a href="/checkpoint/forgot-password" className="link">
                  <Text variant="muthed font-regular body-small">Alterar</Text>
                </a>
              </div>

              <form className="form-sign" onSubmit={handleSubmit}>
                <Text variant="muthed font-regular body">código</Text>
                <div className="input-challenge">
                  <TextField
                    id="challengeNumberOne"
                    name="challengeNumberOne"
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                    inputRef={input1Ref}
                    onChange={(event) => handleKeyPress(event, input2Ref)}
                    autoFocus
                  />

                  <TextField
                    id="challengeNumberTwo"
                    name="challengeNumberTwo"
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                    inputRef={input2Ref}
                    onChange={(event) => handleKeyPress(event, input3Ref)}
                  />
                  <TextField
                    id="challengeNumberTrhee"
                    name="challengeNumberTrhee"
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                    inputRef={input3Ref}
                    onChange={(event) => handleKeyPress(event, input4Ref)}
                  />
                  <TextField
                    id="challengeNumberFour"
                    name="challengeNumberFour"
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                    inputRef={input4Ref}
                    onChange={(event) => handleKeyPress(event, input5Ref)}
                  />
                  <TextField
                    id="challengeNumberFive"
                    name="challengeNumberFive"
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                    inputRef={input5Ref}
                    onChange={(event) => handleKeyPress(event, input6Ref)}
                  />
                  <TextField
                    id="challengeNumberSix"
                    name="challengeNumberSix"
                    variant="outlined"
                    inputRef={input6Ref}
                    inputProps={{ maxLength: 1 }}
                  />
                </div>

                <Snackbar
                  TransitionComponent={Fade}
                  open={open}
                  autoHideDuration={6000}
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  key="top right"
                >
                  <Alert severity="error" sx={{ width: "100%" }}>
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
