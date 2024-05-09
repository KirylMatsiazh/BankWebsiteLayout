import "./strengths-page.css";
import StrengthCard from "./strengths-cards/strength-card.js";

import { VscAccount } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";
import { VscVmRunning } from "react-icons/vsc";
import { VscSymbolMisc } from "react-icons/vsc";
import { VscOrganization } from "react-icons/vsc";
import { VscPersonAdd } from "react-icons/vsc";
import { VscRocket } from "react-icons/vsc";
import { VscSignIn } from "react-icons/vsc";
import { VscSourceControl } from "react-icons/vsc";



function StrengthsPage(){
    return(
        <div className = "strengths__page">
            <div className="text__content">
                <h1 className = "strengths__header">Creating Extraordinary Customer Experience</h1>
                <p className = "strengths__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat nisi venenatis, pharetra erat eu, egestas nisl. Suspendisse a leo velit.</p>
            </div>
            
            <div className = "strengths__cards">
                <StrengthCard strengthCardIcon={<VscExtensions />} strengthCardName='Integration' strengthCardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt finibus augue, vel gravida quam vehicula nec.'/>
                <StrengthCard strengthCardIcon={<VscVmRunning />} strengthCardName='Demonstration' strengthCardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt finibus augue, vel gravida quam vehicula nec.'/>
                <StrengthCard strengthCardIcon={<VscSymbolMisc />} strengthCardName='Diversity' strengthCardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt finibus augue, vel gravida quam vehicula nec.'/>
                <StrengthCard strengthCardIcon={<VscOrganization />} strengthCardName='Teamwork' strengthCardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt finibus augue, vel gravida quam vehicula nec.'/>
                <StrengthCard strengthCardIcon={<VscPersonAdd />} strengthCardName='Collaboration' strengthCardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt finibus augue, vel gravida quam vehicula nec.'/>
                <StrengthCard strengthCardIcon={<VscRocket />} strengthCardName='Technology' strengthCardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt finibus augue, vel gravida quam vehicula nec.'/>
                <StrengthCard strengthCardIcon={<VscSignIn />} strengthCardName='Corporate' strengthCardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt finibus augue, vel gravida quam vehicula nec.'/>
                <StrengthCard strengthCardIcon={<VscSourceControl />} strengthCardName='Digital' strengthCardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt finibus augue, vel gravida quam vehicula nec.'/>
            </div>
        </div>
    )
}

export default StrengthsPage