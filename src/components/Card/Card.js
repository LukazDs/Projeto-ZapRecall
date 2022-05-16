import React from "react";
import setinha from "./setinha.png"

export default function Card(props) {
    const [ChangeStateInitial, setChangeStateInitial] = React.useState(true);
    const [cardQuestion, setcardQuestion] = React.useState(props.hiddenQuestion)
    const [icon, setIcon] = React.useState("play-outline")
    const [cardBlocked, setCardBlocked] = React.useState(false)
    const [colorIcon, setColorIcon] = React.useState("black")
    const [cont, setCont] = React.useState(0)
    const iconList = []

    console.log(iconList)

    return (
        <div className="card-user">
            <div className={`card-face-initial ${!ChangeStateInitial ? "blocked" : ""}`} onClick={() => {(!cardBlocked) ? setChangeStateInitial(false) : setChangeStateInitial(true); setcardQuestion(props.hiddenQuestion)}}>
                <span>{props.question} {props.number}</span>
                <ion-icon name={icon} Style={`color: ${colorIcon};`}></ion-icon>
            </div>
            <div className={`card-face-second ${ChangeStateInitial ? "blocked" : ""}`}>
                <span>{cardQuestion}</span>
                {
                    (cardQuestion === props.hiddenQuestion) ? 
                    <img src={setinha} onClick={() => setcardQuestion(props.hiddenAnswer)}></img> 
                    : <div className="interaction-container">
                        <div className="dont-know" Style={"background-color:#FF3030;"} onClick={() => {setChangeStateInitial(true); setIcon("close-circle"); setCardBlocked(true); setColorIcon("#FF3030"); props.addOne();}}>
                            <span>Não lembrei</span>
                        </div>
                        <div className="think-know" Style={"background-color:#FF922E;"} onClick={() => {setChangeStateInitial(true); setIcon("help-circle"); setCardBlocked(true); setColorIcon("#FF922E"); props.addOne();}}>
                            <span>Quase não lembrei</span>
                        </div>
                        <div className="know" Style={"background-color:#2FBE34;"} onClick={() => {setChangeStateInitial(true); setIcon("chevron-down-circle"); setCardBlocked(true); setColorIcon("#2FBE34"); props.addOne();}}>
                            <span>Zap!</span>
                        </div>
                    </div>
                }
            </div>
            
        </div>
        
    )
}
