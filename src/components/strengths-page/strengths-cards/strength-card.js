import './strength-card.css';
import React from 'react';

function StrengthCard({strengthCardIcon, strengthCardName, strengthCardDescription}){
    const iconStyle = {
        color: '#ED017F',
        fontSize: 55
    };
    
    return(
        <div className = "strength__card">
            {React.cloneElement(strengthCardIcon, { style: iconStyle })}
            <h2 className = "strength__card__header">{strengthCardName}</h2>
            <p className = "strength__card__content">{strengthCardDescription}</p>
        </div>
    )
}

export default StrengthCard