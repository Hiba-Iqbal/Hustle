import React, { useState } from "react";
import { connect } from "react-redux";
import "../style/css/style.css";
import { signin } from "../../Redux/auth/authActions";
import SignOut from "../SignOut/SignOut";
import GoogleBtn from "../GoogleBtn/GoogleBtn";
import signinImage from "./../../images/login_SignUp/signin-image.png";

const Login = ({ signin }) => {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  var handleFormSubmit = (e) => {
    e.preventDefault();
    var cred = {
      email,
      password,
    };
    signin(cred);
  };
  return (
    <div className="main">
      <section className="sign-in">
        <div className="container" style={{ background: "white" }}>
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={signinImage} alt="sing up image"></img>
              </figure>
              <a
                style={{ color: "black" }}
                href="/signup"
                className="signup-image-link">
                Create an account
              </a>
            </div>

            <div className="signin-form">
              <h2 style={{ color: "#5658DD" }} className="form-title">
                Log In
              </h2>
              <form
                onSubmit={handleFormSubmit}
                method="POST"
                className="register-form"
                id="login-form">
                <div className="form-group">
                  <label htmlFor="your_name">
                    <i
                      className="fas fa-envelope"
                      style={{ fontSize: "15px" }}></i>
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="your_name"
                    id="your_name"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="your_pass">
                    <i className="fas fa-lock" style={{ fontSize: "15px" }}></i>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="your_pass"
                    id="your_pass"
                    placeholder="Password"
                  />
                </div>
                {/* <div className="form-group">
                            <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                            <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                        </div> */}
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log in"
                  />
                </div>
              </form>
              <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="socials">
                  <GoogleBtn />
                  {/* <li><a href="#"><i className="fab fa-google" style={{fontSize: '25px'}}></i></a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

var actions = {
  signin,
};

export default connect(null, actions)(Login);
