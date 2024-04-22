import "./strengths-page.css";
import StrengthCard from "./strengths-cards/strength-card.js";

function StrengthsPage(){
    return(
        <div className = "strengths__page">
            <div className="text__content">
                <h1 className = "strengths__header">Creating Extraordinary Customer Experience</h1>
                <p className = "strengths__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat nisi venenatis, pharetra erat eu, egestas nisl. Suspendisse a leo velit.</p>
            </div>
            
            <div className = "strengths__cards">
                <StrengthCard/>
                <StrengthCard/>
                <StrengthCard/>
                <StrengthCard/>
                <StrengthCard/>
                <StrengthCard/>
            </div>
        </div>
    )
}

export default StrengthsPage