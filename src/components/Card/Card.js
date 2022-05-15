import React from "react";
import setinha from "./setinha.png"

export default function Card(props) {

    const [ChangeStateInitial, setChangeStateInitial] = React.useState(true);
    const [cardQuestion, setcardQuestion] = React.useState(props.hiddenQuestion)

    return (
        <div className="card-user">
            <div className={`card-face-initial ${!ChangeStateInitial ? "blocked" : ""}`} onClick={() => setChangeStateInitial(false)}>
                <span>{props.question}</span>
                <ion-icon name="heart"></ion-icon>
            </div>
            <div className={`card-face-second ${ChangeStateInitial ? "blocked" : ""}`}>
                <span>{cardQuestion}</span>
                {
                    (cardQuestion === props.hiddenQuestion) ? 
                    <img src={setinha} onClick={() => 
                    setcardQuestion(props.hiddenAnswer)}></img> 
                    : <div className="interaction-container">
                        <div className="dont-know" Style={"background-color:#FF3030;"} onClick={() => setChangeStateInitial(true)}>
                            <span>Não lembrei</span>
                        </div>
                        <div className="think-know" Style={"background-color:#FF922E;"} onClick={() => setChangeStateInitial(true)}>
                            <span>Quase não lembrei</span>
                        </div>
                        <div className="know" Style={"background-color:#2FBE34;"} onClick={() => setChangeStateInitial(true)}>
                            <span>Zap!</span>
                        </div>
                    </div>
                }
            </div>
        </div>
        
    )
}
