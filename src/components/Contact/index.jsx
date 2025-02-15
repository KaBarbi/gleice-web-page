import "./contact.css"

const Contact = () => {
    return (
        <div className="contact-container">
            <h3 className="contact-title-left">Contact Me</h3>
            <p className="contact-paragraph">
                Feel free to try and help me improve this project. For
                questions, suggestions, or reporting issues, contact me through
                the means below:
            </p>
            <div className="contact-info">
                <p>
                    <strong>Email: </strong>
                    <a
                        href="mailto:seuemail@example.com"
                        className="contact-link"
                    >
                        kauebarbicode@gmail.com
                    </a>
                </p>
                <p>
                    <strong>Discord: </strong>
                    <span className="contact-discord">bs_barbi</span>
                </p>
            </div>
        </div>
    )
}

export default Contact
