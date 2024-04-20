import "./strengths.css";
import StrengthCard from "./strengths-cards/strength-card.js";

function StrengthsPage(){
    return(
        <div className = "strengths__page">
            <h1 className = "strengths__header">Creating Extraordinary Customer Experience</h1>
            <p className = "strengths__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat nisi venenatis, pharetra erat eu, egestas nisl.<br/> Suspendisse a leo velit. Donec commodo feugiat ante, sit amet aliquet tortor ultrices vel.</p>
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