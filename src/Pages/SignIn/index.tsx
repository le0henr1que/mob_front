// import "./styles.scss"
import { Button, Container } from "@material-ui/core";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export function SignIn(){
    return (
        <Container maxWidth="md">            
            <h1>Acesse sua conta</h1>

            <span>Utilizando autenticação social</span>
            <br />
            <GoogleOAuthProvider 
                clientId=""
            >
                <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                />
                         
            </GoogleOAuthProvider>
            

            {/* <Button variant="contained" type="button" className="button"> 
                Entrar Com Google
            </Button> */}
        </Container>
    )
}