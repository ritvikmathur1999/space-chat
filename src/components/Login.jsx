import React from "react";
// import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";
// import applogo from "./static/s.png";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <img src={require("./static/sn.gif")} alt="applogo" height="170px" />
        <h3>Sign in with</h3>
        <div className="login-button">
          <div
            className="login-button google"
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }
          >
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="gl"
            />
          </div>
          <div
            className="login-button facebook"
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
            }
          >
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="fblg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
