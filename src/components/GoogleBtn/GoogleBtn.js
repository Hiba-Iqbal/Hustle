import React from 'react'
import { connect } from 'react-redux'
import { googleSignin } from '../../Redux/auth/authActions'
import './GoogleBtn.css'

const GoogleBtn = ({googleSignin}) => {
    return (
        <div>
            <button onClick={googleSignin} >SignIn With Google</button>
        </div>
    )
}

var actions ={
    googleSignin
}

export default connect(null,actions)(GoogleBtn)
