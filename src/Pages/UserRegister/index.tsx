import { Container } from "../../Components/Container";
import "./styles.css";
//@ts-ignore
import Pana from "../../Assests/pana.svg"
//@ts-ignore
import Google from "../../Assests/icon-google.svg"
import { Text } from "../../Components/Text";
import { Input } from "../../Components/Input";
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from "react";
import ButtonStyle from "../../Components/Button";
//@ts-ignore
import Rafiki1 from "../../Assests/rafiki1.svg"

export function Register(){

    return (
        // <Container>
            <div className="container-register">
                <img src={Rafiki1} className="first-image"/>
                
                <div className="container-register-content">
                    <div className="container-register-content-title ">
                        <Text variant="font-bold title-3">CRIAR UMA <span>CONTA</span></Text>
                        <Text variant="muthed font-regular body-small">Digite seus dados e crei uma conta mob!</Text>
                    </div>
                    <form className="form-sign">
                        <div className="container-register-content-input">
                            <label htmlFor="name">Nome Completo</label>
                            <Input type="name" variant="default" name="email" id="email" placeholder="Digite seu nome completo"/>
                        </div>
                        <div className="container-register-content-input">
                            <label htmlFor="email">Email</label>
                            <Input type="email" variant="default" name="email" id="email" placeholder="Digite seu email"/>
                        </div>
                        <div className="container-register-content-input">
                            <label htmlFor="password">Password</label>
                            <Input type="password" variant="default" name="password" id="password" placeholder="Digite sua senha"/>
                        </div>


                        <div className="container-register-content-buttons">
                            <ButtonStyle variant="large-button">Logar</ButtonStyle>
                        </div>
                    </form>
                    <div className="container-register-content-sign">
            
                        <Text variant="muted font-regular caption">
                            Já possui uma conta?
                            <a href="/login">Login!</a>
                        </Text>

                    </div>

                </div>
            </div>
        // </Container>
    )
}