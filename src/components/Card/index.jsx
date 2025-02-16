import "./card.css"
import { Link } from "react-router-dom"

const Card = () => {
    return (
        <div className="card-wrapper">
        <div className="container">
            <div className="card-img">
                <img src="/images/gleice.jpg" alt="Descrição" />
            </div>
            <div className="card-content">
                <h2 className="card-title">Gleice Discord Bot</h2>
                <p className="card-description">
                    Personal project created to explore and expand my
                    programming knowledge. Through it, I am learning to develop
                    and integrate various technologies.
                </p>
                <div className="button-container">
                    <a
                        href="https://discord.com/oauth2/authorize?client_id=1306407860493877258&permissions=8&integration_type=0&scope=bot"
                        className="custom-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Add
                    </a>
                    <Link to="/commands" className="custom-btn secondary-btn">
                        Commands
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card
