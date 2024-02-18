import "./Game.css"
import { useState, useEffect } from "react"
import Card from "./Card"
const cardImage = [
  { game: false, "src": "https://i.pinimg.com/236x/91/52/9a/91529a7c0734cce3f93b0bfa49317699.jpg" },
  { game: false, "src": "https://i.pinimg.com/236x/ba/ac/dd/baacdd7dc89990134fa6ee467f52dd9a.jpg" },
  { game: false, "src": "https://i.pinimg.com/236x/1c/d0/a1/1cd0a1959652ed815fe07081d5fce505.jpg" },
  { game: false, "src": "https://i.pinimg.com/236x/08/d1/28/08d12817a1c2e76e1af225450624dc50.jpg" },
  { game: false, "src": "https://i.pinimg.com/236x/b8/51/82/b85182afd15a4c370201860018c3872a.jpg" },
  { game: false, "src": "https://i.pinimg.com/236x/e3/3e/29/e33e29e7b36df3e837e6af584bed8447.jpg" },
]

function Main() {
  const [cards, setCars] = useState([])
  const [urunish, setUrunish] = useState(0)
  const [tanlov1, setTanlov1] = useState(null)
  const [tanlov2, setTanlov2] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const yangiOyin = () => {
    const yangiCard = [...cardImage, ...cardImage]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    setCars(yangiCard)
    setUrunish(0)
  }
  console.log(cards, urunish);

  const tanlovClick = (card) => {
    tanlov1 ? setTanlov2(card) : setTanlov1(card)
  }

  // useEffect(() => {
  //   if (tanlov1 && tanlov2) {
  //     setDisabled(true)
  //     if (tanlov1.src === tanlov2.src) {
  //       setCars(prev => {
  //         return prev.map(card => {
  //           if (card.src === tanlov1.src) {
  //             return { ...card, game: true }
  //           } else {
  //             return card
  //           }
  //         })
  //       })
  //       qaytaUrinish()
  //     } else {
  //       setTimeout(() => qaytaUrinish(), 1000)
  //     }
  //   }
  // }, [tanlov1, tanlov2])


  // const qaytaUrinish = () => {
  //   setTanlov1(null)
  //   setTanlov2(null)
  //   setUrunish(prev => prev + 1)
  //   setDisabled(false)
  // }

  // useEffect(() => {
  //   yangiOyin()
  // }, [])
  return (
    <div className="app" >
      <h3>Magic Match</h3>
      <button onClick={yangiOyin} >New Game</button>
      <div className="cardGrid">
        {cards.map((card) => (
          <Card card={card} tanlovClick={tanlovClick} key={card.id}
            flipped={card === tanlov1 || card === tanlov2 || card.game}
            disabled={disabled} />
        ))}
      </div>
      <h1>Urinishlar {urunish}</h1>
    </div>
  )
}

export default Main