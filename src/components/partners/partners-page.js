import "./partners-page.css";
import PartnerUnit from "./partner-unit/partner-unit.js";

function PartnersPage(){
    return(
        <div className = "partners__page">
            <h2 className = "partners__header">Business Partners</h2>
            <div className = "partners">
                <PartnerUnit/>
                <PartnerUnit/>
                <PartnerUnit/>
                <PartnerUnit/>
                <PartnerUnit/>
                <PartnerUnit/>
                <PartnerUnit/>
            </div>
        </div>
    )
}

export default PartnersPage