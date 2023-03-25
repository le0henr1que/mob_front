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

export function Login(){
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
      setIsChecked(event.target.checked);
    };

    return (
        // <Container>
            <div className="container-login">
                <img src={Pana} className="first-image"/>
                <div className="container-login-content">
                    <div className="container-login-content-title">
                        <Text variant="font-bold title-3">BEM VINDO DE <span>VOLTA</span></Text>
                        <Text variant="muthed font-regular body-small">Digite seus dados para acessar</Text>
                    </div>
                    <form className="form-sign">
                        <div className="container-login-content-input">
                            <label htmlFor="email">Email</label>
                            <Input type="email" variant="default" name="email" id="email" placeholder="Digite seu email"/>
                        </div>
                        <div className="container-login-content-input">
                            <label htmlFor="password">Password</label>
                            <Input type="password" variant="default" name="password" id="password" placeholder="Digite sua senha"/>
                        </div>

                        <div className="container-login-content-option">
                            <div className="remember-password">
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
                                <a href="/forgot" className="link"><Text variant="muted font-regular caption">Forgot password</Text></a>
                            </div>
                        </div>
                        <div className="container-login-content-buttons">
                            <ButtonStyle variant="large-button">Logar</ButtonStyle>
                            <button className="button-login-google">
                                <img src={Google}/>
                                Sign in with Google
                            </button>
                        </div>
                    </form>
                    <div className="container-login-content-sign">
            
                        <Text variant="muted font-regular caption">
                            Não possui conta?
                            <a href="/register">Criar conta gratis!</a>
                        </Text>

                    </div>

                </div>
            </div>
        // </Container>
    )
}