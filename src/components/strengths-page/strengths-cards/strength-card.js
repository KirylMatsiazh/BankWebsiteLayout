import './strength-card.css';

function StrengthCard({strengthCardIcon, strengthCardName, strengthCardDescription}){
    return(
        <div className = "strength__card">
            <div className = "strength__card__icon">
                {strengthCardIcon}
            </div>
            <h2 className = "strength__card__header">{strengthCardName}</h2>
            <p className = "strength__card __description">{strengthCardDescription}</p>
        </div>
    )
}

export default StrengthCard