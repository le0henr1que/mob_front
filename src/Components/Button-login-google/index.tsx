import { useGoogleLogin } from "@react-oauth/google";
import "./styles.css";
//@ts-ignore
import Google from "../../Assests/icon-google.svg";

export default function GoogleSignIn({ onSendAccessToken }: any) {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => onSendAccessToken(tokenResponse),
  });

  return (
    <button className="button-login-google" onClick={() => login()}>
      <img src={Google} />
      Entrar com Google
    </button>
  );
}
