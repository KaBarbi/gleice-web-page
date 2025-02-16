import React from "react"
import { Link } from "react-router-dom"

const ButtonBack = () => {
    return (
        <div className="contact-container">
            <h3 className="contact-title-left">List of Commands</h3>
            <p className="contact-paragraph">
                Here you will find the complete list of commands available for
                Gleice Bot on Discord, along with their descriptions and usage
                examples.
            </p>
            <Link to="/" className="custom-btn back-btn">
                {"<<"} Return
            </Link>
        </div>
    )
}

export default ButtonBack
