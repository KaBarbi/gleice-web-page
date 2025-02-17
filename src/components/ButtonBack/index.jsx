import React from "react"
import { Link } from "react-router-dom"
import "./buttonback.css";

const ButtonBack = () => {
    return (
        <div className="contact-container">
            <h3 className="contact-title-left">List of Commands</h3>
            <p className="contact-paragraph">
                Here you will find the complete list of commands available for
                Gleice Bot on Discord, along with their descriptions and usage
                examples.
            </p>
            <Link to="/" className="custom-button">
                <div className="custom-button-icon">
                    <svg width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path>
                        <path fill="#000000" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path>
                    </svg>
                </div>
                <p className="button-text">Return</p>
            </Link>
        </div>
    )
}

export default ButtonBack
