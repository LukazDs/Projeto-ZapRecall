import React from "react"
import Card from "../Card/Card"
import logopequeno from "./logo-pequeno.png"
import getCards from "../../data/cards"
import Footer from "../Footer"

export default function CardsDisplay() {
    const dataCard = getCards()
    const [cont, setCont] = React.useState(0)
  
    function addOne () {
        setCont(cont + 1)
    }
    return (
        <>
            <div className="slogancards">
                <img src={logopequeno}></img>
                <span>ZapRecall</span>
            </div>
            <div className="cards">
                {dataCard.map((card, index) => <Card addOne={addOne} number={index + 1} key={index} hiddenAnswer={card.hiddenAnswer} hiddenQuestion={card.hiddenQuestion} question={card.initialQuestion} />)}
            </div>
            <Footer cont={cont}/>
        </>

    )
}