import Card from "../Card/Card"
import logopequeno from "./logo-pequeno.png"
import getCards from "../../data/cards"

export default function CardsDisplay() {
    let dataCard = getCards() 
    return (
        <div className="cards">
            <div className="slogancards">
                <img src={logopequeno}></img>
                <span>ZapRecall</span>
            </div>
            {dataCard.map((card, index) => <Card key={index} hiddenAnswer={card.hiddenAnswer} hiddenQuestion={card.hiddenQuestion} question={card.initialQuestion}/>)}
        </div>
    )
}