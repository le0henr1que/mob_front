

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import "./styles.css"


export default function GoogleSignIn(){
  return (
    <GoogleOAuthProvider clientId="696316997048-1skfl6md5plvj3gmc5i84s57qn1l3ukm.apps.googleusercontent.com">
      <GoogleLogin
        useOneTap
        // width='900px'
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        
     />
 
    </GoogleOAuthProvider>
  )
}