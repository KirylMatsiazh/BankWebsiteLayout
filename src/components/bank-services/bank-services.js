import './bank-services.css';
import ServiceCard from './service cards/service-card';

export default function BankServices(){
    return(
        <div className = 'bank_services_container'>
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula placerat sapien vel dictum.</p>
            <div className='services_card_container'>
                <ServiceCard serviceCardImageSource={'./servises-imgs/serv1.png'} serviceCardName={'IPDC SAVING SCHEMES'}/>
                <ServiceCard serviceCardImageSource={'./servises-imgs/serv2.png'} serviceCardName={'IPDC PERSONAL LOAN'}/>
                <ServiceCard serviceCardImageSource={'./servises-imgs/serv3.png'} serviceCardName={'IPDC DEPOSIT SCHEMES'}/>
                <ServiceCard serviceCardImageSource={'./servises-imgs/serv4.png'} serviceCardName={'IPDC AUTO LOAN'}/>
            </div>
        </div>
    )
}