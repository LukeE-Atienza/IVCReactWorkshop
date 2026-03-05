import heroImage from '../assets/watchcollection.png'
import { useState } from 'react'

//assets and default functions
//import ComponentName from './components/ComponentName.jsx'

const watches = [
    { model: "Casio G-Shock", reason: "Because the user is very active" },
    { model: "Rolex Submariner", reason: "Because the user swims a lot" }
]

export default function Hero() {
    //states
    //const [stateName, setState] = useState(defaultValue)
    const [isConsulting, setIsConsulting] = useState(false)
    const [recommendation, setRecommendation] = useState(null)

    const title = "Time Machine"
    const tagline = "AI that helps you build a watch collection"
    const ctaText = "Demo Now!"
    const gitHubText = "GitHub"

    function handleConsult() {
        //in handle functions, first change the states to what they need to be
        setIsConsulting(true)
        setRecommendation(null)

        //function getting a random watch
        //notice
        setTimeout(() => {
            const randomWatch = watches[Math.floor(Math.random() * watches.length)]
            setRecommendation(randomWatch)
            setIsConsulting(false)
        }, 2000)
    }

    return(
        <section className="hero">
            <div className="hero-content">
                <h1>{title}</h1>
                <p>{tagline}</p>
                <button onClick={(handleConsult)} disabled={isConsulting}>
                    {isConsulting ? "Consulting..." : `${ctaText}`}
                </button>
                <button>{gitHubText}</button>

                {isConsulting && (
                    <div className="ai-loader">Scannning our database</div>
                )}

                {recommendation && !isConsulting && (
                    <div className="ai-preview">
                        <span className="ai-badge">AI RECOMMENDATION</span>
                        <h3>{recommendation.model}</h3>
                        <p>{recommendation.reason}</p>
                    </div>
                )}
            </div>
            <img src={heroImage} alt="Watch collection image preview"></img>
        </section>
    );
}

//Notes:
//event handling and conditional rendering (JS review)
//for more event types: https://www.w3schools.com/jsref/dom_obj_event.asp
//<button event={(handleFunction)} disabled={state}
//  {state ? ShowThisIfTrue : ShowThisIfFalse}
//</button>
//

//conditional rendering
//rendering something if the state is set to true or just has something in geeneral
// {state && (codeIfTrue)}
//showing
// {state && state 2 && (codeIfTrue)}
