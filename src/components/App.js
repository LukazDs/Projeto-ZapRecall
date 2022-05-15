import { BrowserRouter, Route, Routes } from "react-router-dom"
import InitialDisplay from "./InitialDisplay/InitialDisplay"
import CardsDisplay from "./CardsDisplay/CardsDisplay"

export default function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<InitialDisplay />}></Route>
                    <Route path="/cardsdisplay" element={<CardsDisplay />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}