import Card from "./Card"
import "./Main.css"
import { useEffect, useState } from "react"
const images = [
    { game: false, src: "https://i.pinimg.com/236x/dc/ce/5c/dcce5cd204f1e7e26959def3cc2a1b00.jpg" },
    { game: false, src: "https://i.pinimg.com/236x/91/52/9a/91529a7c0734cce3f93b0bfa49317699.jpg" },
    { game: false, src: "https://i.pinimg.com/236x/ba/ac/dd/baacdd7dc89990134fa6ee467f52dd9a.jpg" },
    { game: false, src: "https://i.pinimg.com/236x/1c/d0/a1/1cd0a1959652ed815fe07081d5fce505.jpg" },
    { game: false, src: "https://i.pinimg.com/236x/08/d1/28/08d12817a1c2e76e1af225450624dc50.jpg" },
    { game: false, src: "https://i.pinimg.com/236x/b8/51/82/b85182afd15a4c370201860018c3872a.jpg" },
    { game: false, src: "https://i.pinimg.com/236x/e3/3e/29/e33e29e7b36df3e837e6af584bed8447.jpg" },
    { game: false, src: "https://i.pinimg.com/236x/5d/55/2f/5d552fe4288705d8b951b3ac869bf00a.jpg" }
]
function Main() {
    const [cards, setCards] = useState([])
    const [urunish, setUrunish] = useState(0)
    const [tanlov1, setTanlov1] = useState(null)
    const [tanlov2, setTanlov2] = useState(null)
    const [disabled, setDisabled] = useState(false)


    const newGame = () => {
        const newsgame = [...images, ...images]
            .sort(() => Math.random() - 0.5)
            .map((item) => ({ ...item, id: Math.random() }))
        setCards(newsgame)
        setUrunish(0)
    }
    const tanlovClick = (element) => {
        tanlov1 ? setTanlov2(element) : setTanlov1(element)
    }

    useEffect(() => {
        if (tanlov1 && tanlov2) {
            setDisabled(true)
            if (tanlov1.src === tanlov2.src) {
                setCards(prev => {
                    return (
                        prev.map(card => {
                            if (card.src === tanlov1.src) {
                                return { ...card, game: true }
                            } else return card
                        })
                    )
                })
                qaytaUrunush()
            } else {
                setTimeout(() => {
                    qaytaUrunush()
                }, 1000);
            }
        }
    }, [tanlov1, tanlov2])


    const qaytaUrunush = () => {
        setTanlov1(null)
        setTanlov2(null)
        setUrunish(prev => prev + 1)
        setDisabled(false)
    }
    useEffect(() => {
        newGame()
    }, [])
    return (
        <div>
            <button onClick={newGame}>New Game</button>
            <div className="cardsGame" >
                {cards.map(item =>
                    <Card item={item} key={item.id} tanlovClick={tanlovClick}
                        flipped={item === tanlov1 || item === tanlov2 || item.game}
                        disable={disabled}
                    />
                )}
            </div>
            <h1>Urinishlar {urunish}</h1>
        </div>
    )
}
export default Main