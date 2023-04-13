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
import  GoogleSignIn  from "../../Components/Button-login-google"
//@ts-ignore
import LogMob from "../../Assests/mob-white.svg"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function Login(){
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
      setIsChecked(event.target.checked);
    };
    function handleSuccess(){
        console.log("teste")
      }

    return (
        // <Container>
            <div className="container-login">
                <div className="container-content-login">
                    <div className="continaer-lateral-logo">
                        <img src={LogMob}/>
                    </div>

                    <div className="continaer-lateral-form">
                        <div className="container-form-login">
                            <div className="container-login-content-title">
                                <Text variant="font-bold headline">Bem vindo de volta</Text>
                                <Text variant="muthed font-regular body-small">Utilize sua credencial Mob para realizar o acesso.</Text>
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
                                
                                        <TextField id="email" label="Email" variant="outlined" />
                                        <TextField 
                                            id="password" 
                                            label="Password" 
                                            variant="outlined" 
                                        />

        
                                </Box>

                                <div className="container-login-content-option">
                                    <div className="remember-check-password">
                                        <Checkbox
                                            checked={isChecked}
                                            onChange={handleChange}
                                            color="default"
                                            inputProps={{ 'aria-label': 'checkbox' }}
                                            // style={useStyles}
                                        />
                                        <Text variant="muted font-regular caption">Lembrar senha</Text>
                                    </div>
                                    <div className="forgot-password">
                                        <a href="/forgot" className="link"><Text variant="muted font-regular caption">Esqueci a senha</Text></a>
                                    </div>
                                </div>

                                
                                <div className="container-login-content-buttons">
                                    <ButtonStyle variant="medium-button">Logar</ButtonStyle>
                    
                                    <GoogleSignIn  />
                                </div>
                                
                            </form>
                            <div className="container-login-content-sign">
            
                                 <Text variant="muted font-regular caption">
                                     Não possui conta?
                                     <a href="/cadastrar">Criar conta gratis!</a>
                                 </Text>

                             </div>

                        </div>
                    </div>
                    
                    
                </div>
            </div>

                // <img src={Pana} className="first-image"/>
                // <div className="container-login-content">
                //     <div className="container-login-content-title">
                //         <Text variant="font-bold title-3">BEM VINDO DE <span>VOLTA</span></Text>
                //         <Text variant="muthed font-regular body-small">Digite seus dados para acessar</Text>
                //     </div>
                //     <form className="form-sign">
                //         <div className="container-login-content-input">
                //             <label htmlFor="email">Email</label>
                //             <Input type="email" variant="default" name="email" id="email" placeholder="Digite seu email"/>
                //         </div>
                //         <div className="container-login-content-input">
                //             <label htmlFor="password">Password</label>
                //             <Input type="password" variant="default" name="password" id="password" placeholder="Digite sua senha"/>
                //         </div>

                //         <div className="container-login-content-option">
                //             <div className="remember-check-password">
                //                 <Checkbox
                //                     checked={isChecked}
                //                     onChange={handleChange}
                //                     color="default"
                //                     inputProps={{ 'aria-label': 'checkbox' }}
                //                     // style={useStyles}
                //                 />
                //                 <Text variant="muted font-regular caption">Lembrar senha</Text>
                //             </div>
                //             <div className="forgot-password">
                //                 <a href="/forgot" className="link"><Text variant="muted font-regular caption">Esqueci a senha</Text></a>
                //             </div>
                //         </div>
                //         <div className="container-login-content-buttons">
                //             <ButtonStyle variant="large-button">Logar</ButtonStyle>
            
                //             <GoogleSignIn  />
                //         </div>
                //     </form>
                //     <div className="container-login-content-sign">
            
                //         <Text variant="muted font-regular caption">
                //             Não possui conta?
                //             <a href="/cadastrar">Criar conta gratis!</a>
                //         </Text>

                //     </div>

                // </div> 
        //     </div> 
        //  </Container> 
    )
}