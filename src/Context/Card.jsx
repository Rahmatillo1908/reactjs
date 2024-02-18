
const Card = ({ item }) => {
    return (
        <div className="cardImage">
            <img src={item.image} alt="" />
            <div className="cardText">
                <h6>{item.title}</h6>
                <main>
                    <h4>{item.price}$</h4>
                    <button>Buy</button>
                </main>
            </div>
        </div>
    )
}

export default Card