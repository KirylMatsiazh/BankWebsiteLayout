import './news-subscription.css';

export default function NewsSubscription(){
    return(
        <div className='news_subscription'>
            <h1>Newsletter</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae erat sagittis, ultricies velit a, dictum nibh.</p>
            <form action = 'server.cs'>
                <input className='email_input' placeholder='Your email'></input>
                <button className='news_subscription_submit' type = 'submit'>SUBSCRIBE</button>
            </form>
        </div>
    )
}