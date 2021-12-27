import React, { useState } from 'react'
import { connect } from 'react-redux'
import { auth } from '../../Firebase/firebase'
import { signup } from '../../Redux/auth/authActions'
import '../style/css/style.css'
const SignUp = ({signup}) => {

    var [fullName , setFullName] = useState("")
    var [email , setEmail] = useState("")
    var [password , setPassword] = useState("")

    var handleFormSubmit=(e)=>{
        e.preventDefault();
       var cred ={
            fullName,
            email,
            password
        }
        signup(cred)
    }
return (
    <div>
    <div class="main">
    <section class="signup">
    <div class="container">
        <div class="signup-content">
            <div class="signup-form">
                <h2 class="form-title">Sign up</h2>
                <form onSubmit={handleFormSubmit} method="POST" class="register-form" id="register-form">
                    <div class="form-group">
                        <label for="name"><i class="fas fa-user" style={{fontSize: '15px'}}></i></label>
                        <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} name="name" id="name" placeholder="Your Name"/>
                    </div>
                    <div class="form-group">
                        <label for="email"><i class="fas fa-envelope" style={{fontSize: '15px'}}></i></label>
                        <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" placeholder="Your Email"/>
                    </div>
                    <div class="form-group">
                        <label for="pass"><i class="fas fa-lock" style={{fontSize: '15px'}}></i></label>
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="pass" id="pass" placeholder="Password"/>
                    </div>
                    {/* <div class="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                    </div> */}
                    <div class="form-group form-button">
                        <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                    </div>
                </form>
            </div>
            <div class="signup-image">
                <figure>
                    <img  src={require("../../images/login_SignUp/signup-image.jpg")} alt="sing up image"></img></figure>
                <a href="/login" class="signup-image-link">I am already member</a>
            </div>
        </div>
    </div>
</section>
    </div>
        </div>
    )
}

var actions = {
    signup
}

export default connect(null,actions)(SignUp)
