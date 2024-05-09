import './service-card.css';

export default function ServiceCard({serviceCardImageSource, serviceCardName}){
    return(
        <div className='service_card'>
            <img alt = '' src = {serviceCardImageSource}/>
            <h3>{serviceCardName}</h3> 
        </div>
    )
}