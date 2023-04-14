

import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin} from '@react-oauth/google';
import "./styles.css"
//@ts-ignore
import Google from "../../Assests/icon-google.svg"

export default function GoogleSignIn(){
  const login = useGoogleLogin({
    
    onSuccess: tokenResponse => console.log(tokenResponse),
  });
  
  return (
    // <GoogleOAuthProvider clientId="696316997048-1skfl6md5plvj3gmc5i84s57qn1l3ukm.apps.googleusercontent.com">
    <button className="button-login-google" onClick={() => login()}>
        <img src={Google}/>
        Entrar com Google
    </button>
    //   <div
    //   onClick={() => login()}
    //     // width='900px'
       
       
        
    //  >sim</div>
 
    // </GoogleOAuthProvider>
  )
}