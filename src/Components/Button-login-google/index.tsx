import React from "react";

interface GoogleSignInProps {
  clientId: string;
  onSuccess: (credential: any) => void;
}

class GoogleSignIn extends React.Component<GoogleSignInProps> {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    
    // script.onload = () => {
    //   const gIdOnload = document.getElementById("g_id_onload");

    //   window.google.accounts.id.initialize({
    //     client_id: this.props.clientId,
    //     callback: this.props.onSuccess,
    //   });
      
    //   window.google.accounts.id.prompt((notification:any) => {
    //     console.log(notification);
    //   });
    // };
    // document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <div id="g_id_onload"></div>
        <div className="g_id_signin" data-type="standard"></div>
      </div>
    );
  }
}

export default GoogleSignIn;