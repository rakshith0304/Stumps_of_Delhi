import React, { useEffect } from "react";
import { gapi } from "gapi-script";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId = "774699601368-fq30dnh595kq06olp5bpn03qqhroh93h.apps.googleusercontent.com"; // Replace with your Google OAuth Client ID

const GoogleAuth = ({ setIsLoggedIn, setUsername, showLogin, showLogout }) => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const onLoginSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    setIsLoggedIn(true);
    setUsername(res.profileObj.name);
  };

  const onLoginFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  const onLogoutSuccess = () => {
    console.log("LOGOUT SUCCESS!");
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <div>
      {showLogin && (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login With Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={false}
        />
      )}
      {showLogout && (
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={onLogoutSuccess}
        />
      )}
    </div>
  );
};

export default GoogleAuth;
