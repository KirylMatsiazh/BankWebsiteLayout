import React from 'react';
import './welcome-page.css';
import { SocialIcon } from 'react-social-icons'
import { BsCarFrontFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";

const WelcomePage = () => {
    return (
        <div className='welcome__page'>
                <nav className='navigation'>
                    <a className='nav__link' href = "#">RETAIL</a>
                    <a className='nav__link' href = "#">SME</a>
                    <a className='nav__link' href = "#">CORPORATE</a>
                    <a className='nav__link' href = "#">ABOUT US</a>
                    <a className='nav__link' href = "#">COVID-19</a>
                    <a className='nav__link' href = "#">CAMPAIGNS</a>
                </nav>

                <div className='main__content'>
                    <div className='contents'>
                        <div className='content__text'>
                            <p className='text__header'>Chase Your<br/>Dream With Us</p>
                            <p className='text__description'>The harder you work for something, the greater you feel, when you achieve it.</p>
                        </div>

                        <div className='btns'>
                            <button className='btn'>Apply online</button>
                            <button className='btn'>Loan calculator</button>
                        </div>
                        
                    </div>
                    
                </div>


                <div className='additional__btns'>
                    <div className="background-image"></div>
                    <button className='additional__btn' id ='car__loans'><BsCarFrontFill /> Car Loans</button>
                    <button className='additional__btn' id ='home__loan'><BsFillHouseFill /> Home loan</button>
                </div>

                <footer className='contact__info'>
                    <SocialIcon className='social__link' url="https://twitter.com"/>
                    <SocialIcon className='social__link' url="https://youtube.com"/>
                    <SocialIcon className='social__link' url="https://linkedin.com"/>
                    <SocialIcon className='social__link' url="https://facebook.com"/>
                </footer>
        </div>
    );
};

export default WelcomePage;