import './welcome-page.css';

function WelcomePage(){
    return(
        <div className = 'welcome__page'>
            <nav className ="welcome__nav">
                    <div className="welcome__nav__item">
                        <a href="#">RETAIL</a>
                    </div>
                    <div className="welcome__nav__item">
                        <a href="#">SME</a>
                    </div>
                    <div className="welcome__nav__item">
                        <a href="#">CORPORATE</a>
                    </div>
                    <div className="welcome__nav__item">
                        <a href="#">ABOUT US</a>
                    </div>
                    <div className="welcome__nav__item">
                        <a href="#">COVID-19</a>
                    </div>
                    <div className="welcome__nav__item">
                        <a href="#">CAMPGAINS</a>
                    </div>

            </nav>

            <div className = "welcome__content">
                <div className = "welcome__header">
                    <div className = "header__container">
                        <h1 className = "header">Chase Your</h1>
                        <h1 className = "header">Dreams With Us</h1>
                    </div>
                    <div className = "description__container">
                        <p className = "description">The harder you work for something, the greater</p>
                        <p className = "description">you'll fell, when you achieve it</p>
                    </div>
                

                    <div className = "welcome__header__btns">
                        <button className = "btn" id = "apply__online">Apply online</button>
                        <button className = "btn" id = "loan__calculator">Loan calculator</button>
                    </div>
                </div>

                <div className = "quick__access">
                    <button className = "quick__access__btn" id = "car__loans">Car Loans</button>
                    <button className = "quick__access__btn" id = "home__loan">Home Loan</button>
                </div>
            </div>

            
        </div>
    )
}
export default WelcomePage