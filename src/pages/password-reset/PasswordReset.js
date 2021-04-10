import React from 'react'
import "./passwordReset.style.css";
import { PasswordResetForm } from "../../components/password-resetform/PasswordResetForm";

export const PasswordReset = () => {
    return (
        <div className= "login-page bg-dark">
            <PasswordResetForm/>
        </div>
    )
}

export default PasswordReset;