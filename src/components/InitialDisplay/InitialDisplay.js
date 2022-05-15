import { Link } from "react-router-dom"
import logo from "./logo.png"
export default function InitialDisplay() {

    return (
        <div className="display">
            <div className="content-slogan">
                <img src={logo}></img>
                <p>ZapRecall</p>
            </div>
            <Link to={"/cardsdisplay"}><button className="button-initial"><p>Iniciar Recall!</p></button></Link>

        </div>
    )
}