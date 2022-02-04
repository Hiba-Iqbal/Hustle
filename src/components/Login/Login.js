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
    <div class="main">
      <section class="sign-in">
        <div class="container">
          <div class="signin-content">
            <div class="signin-image">
              <figure>
                <img src={signinImage} alt="sing up image"></img>
              </figure>
              <a href="/signup" class="signup-image-link">
                Create an account
              </a>
            </div>

            <div class="signin-form">
              <h2 class="form-title">Log In</h2>
              <form
                onSubmit={handleFormSubmit}
                method="POST"
                class="register-form"
                id="login-form">
                <div class="form-group">
                  <label for="your_name">
                    <i class="fas fa-envelope" style={{ fontSize: "15px" }}></i>
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
                <div class="form-group">
                  <label for="your_pass">
                    <i class="fas fa-lock" style={{ fontSize: "15px" }}></i>
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
                {/* <div class="form-group">
                            <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                            <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                        </div> */}
                <div class="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    class="form-submit"
                    value="Log in"
                  />
                </div>
              </form>
              <div class="social-login">
                <span class="social-label">Or login with</span>
                <ul class="socials">
                  <GoogleBtn />
                  {/* <li><a href="#"><i class="fab fa-google" style={{fontSize: '25px'}}></i></a></li> */}
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
