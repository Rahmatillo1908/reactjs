import Card from "./Card"
const Cards = ({ XO, onClick }) => {
    return (
        <div className="cards" >
            {
                XO.map((value, index) => {
                    return <Card key={index} value={value} 
                    onClick={() => value === null && onClick(index)} />
                })
            }
        </div>
    )
}

export default Cards