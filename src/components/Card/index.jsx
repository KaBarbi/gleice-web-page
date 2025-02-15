import "./card.css"

const Card = () => {
    return (
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
                <div class="button-container">
                    <a
                        href="https://discord.com/oauth2/authorize?client_id=1306407860493877258&permissions=8&integration_type=0&scope=bot"
                        class="custom-btn"
                        target="_blank"
                    >
                        Add
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card
