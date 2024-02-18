const Card = ({ card, tanlovClick, flipped, disabled }) => {
    const handleClick = () => {
        if (!disabled) {
            tanlovClick(card)
        }
    }
    return (
        <div className="cards">
            <div className={flipped ? "flipped" : ""}>
                <img className="korinish" src={card.src} alt="" />
                <img className="orqasi" onClick={handleClick}
                    src='https://i.pinimg.com/236x/ed/ad/42/edad4295c8a3a50ae36d30e4a8fef8c3.jpg' alt="" />
            </div>
        </div>
    )
}
export default Card;