import { Container } from "../../Components/Container/index";
import Button from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Text } from "../../Components/Text";
import { Comment } from "../../Components/Comments";
import "./styles.css";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
//@ts-ignore
import pana from "../../Assests/pana.svg";
//@ts-ignore
import rafiki from "../../Assests/rafiki.svg";
//@ts-ignore
import Type from "../../Assests/Group25.svg";
import ButtonStyle from "../../Components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { Chart } from "../../Components/Chart";
//@ts-ignore
import LogMob from "../../Assests/Frame142.svg";
//@ts-ignore
import { Company } from "../../Components/Company";
import { StarRating } from "../../Components/StarRating";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import api from "../../utils/api";
//@ts-ignore
import Rafiki1 from "../../Assests/success.svg";

export function ConfirmEmail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("solicitation_token");

  const [message, setMessage] = useState();

  useEffect(() => {
    api
      .post(
        "/confirm-email/verify-token",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((content) => {
        setMessage(content.data.message);
        console.log(content);
      })
      .catch((error) => {
        setMessage(error.response.data.message);
        console.log(error);
      });
  }, [message]);

  return (
    <div className="container-confirmEmail">
      <div className="container-content-confirmEmail">
        <div className="continaer-lateral-form">
          <div className="container-form-confirmEmail">
            <div className="container-confirmEmail-content-title">
              <img src={Rafiki1} width={300} style={{ marginBottom: 25 }} />

              <img src={LogMob} />

              <Text variant="font-bold headline">Confirmação de Email</Text>

              <Text variant="muthed font-regular body-small">{message}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
