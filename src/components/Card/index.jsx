import ButtonAdd from "./add-btn"
import "./card.css"
import ButtonCmd from "./cmd-btn"

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
                <div className="button-container">
                    <ButtonAdd />
                    <ButtonCmd />
                </div>
            </div>
        </div>
    )
}

export default Card
