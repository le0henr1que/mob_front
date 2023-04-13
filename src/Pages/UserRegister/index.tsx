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
//@ts-ignore
import LogMob from "../../Assests/mob-white.svg"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function Register(){
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
      setIsChecked(event.target.checked);
    };
    return (
        <div className="container-login">
            <div className="container-content-login">
                <div className="continaer-lateral-logo">
                    <img src={LogMob}/>
                </div>

                <div className="continaer-lateral-form">
                    <div className="container-form-login">
                        <div className="container-login-content-title">
                            <Text variant="font-bold headline">Criar uma conta</Text>
                            <Text variant="muthed font-regular body-small">Utilize seus dados para cruar um novo acesso.</Text>
                        </div>
                        <form className="form-sign">
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                                >
                                    <TextField 
                                        id="full-name" 
                                        label="Nome" 
                                        variant="outlined" 
                                    />
                                    <TextField 
                                        id="email" 
                                        label="Email" 
                                        variant="outlined" 
                                    />
                                    <TextField 
                                        id="password" 
                                        label="Password" 
                                        variant="outlined" 
                                    />


                            </Box>

                            <div className="container-login-content-option">
                                <div className="private-check">
                                    <Checkbox
                                        checked={isChecked}
                                        onChange={handleChange}
                                        color="default"
                                        inputProps={{ 'aria-label': 'checkbox' }}
                                        // style={useStyles}
                                    />
                                    <Text variant="muted font-regular caption">
                                        Aceito os <a href="#">Termos e condições</a> e 
                                        autorizo o uso de meus dados de acordo com a <a href="#">Declaração de privacidade</a>
                                    </Text>
                                </div>
                              
                            </div>

                            
                            <div className="container-login-content-buttons">
                                <ButtonStyle variant="medium-button">Cadastrar</ButtonStyle>
                
                                {/* <GoogleSignIn  /> */}
                            </div>
                            
                        </form>
                        <div className="container-login-content-sign">
        
                            <Text variant="muted font-regular caption">
                                Já possui uma contaa?
                                <a href="/login">Login</a>
                            </Text>

                        </div>
                        
                    </div>
                </div>
                
                
            </div>
        </div>
       
    )
}