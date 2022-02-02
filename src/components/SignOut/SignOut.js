import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../../Redux/auth/authActions';
import "./signOut.css"

const SignOut = ({signout}) => {
    return(
        <div>
            <button className="signOut" onClick={signout} >Sign Out</button>
        </div>
    )
}
var actions = {
    signout
}

export default connect(null,actions)(SignOut)