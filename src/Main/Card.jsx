const Card = ({ item, tanlovClick, flipped, disable }) => {
    const handleClick = () => {
        if (!disable) {
            tanlovClick(item)
        }
    }
    return (
        <div className='itemGame' >
            <div className={flipped ? "flipped" : ""}>
                {/* <p>{item.id}</p> */}
                <img className='korinish' src={item.src} alt="" />
                <img className='orqasi' onClick={handleClick}
                    src="https://i.pinimg.com/236x/55/0f/38/550f3848336dbbd81eaca6f7d1a19ffb.jpg" alt="" />
            </div>
        </div>
    )
}

export default Card
