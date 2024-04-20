import "./partner-unit.css";

function PartnerUnit({partnerUnitIcon, PartnerUnitLink}){
    return(
        <div className = "partner__unit">
            <a href = {PartnerUnitLink}>{partnerUnitIcon}</a>
        </div>
    )
}

export default PartnerUnit