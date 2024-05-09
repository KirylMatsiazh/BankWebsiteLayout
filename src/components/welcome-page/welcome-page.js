import React from 'react';
import './welcome-page.css';
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

                <section className='header_section'>
                    <div className='header_section_left'>
                        <h3>Chase Your Dream With Us</h3>
                        <p>The harder you work for something, the greater <br/>you'll feel, when you achieve it.</p>
                        <div className='btns'>
                            <button className='apply_btn'>APPLY ONLINE</button>
                            <button className='loan_btn'>LOAN CALCULATOR</button>
                        </div>
                    </div>
                    <div className='header_section_right'>
                        <div className='header_img_container'>
                            <button className='header_section_hover_btn' id = 'car'><BsCarFrontFill className='btn_icon' />Car Loans</button>
                            <button className='header_section_hover_btn' id = 'home'><BsFillHouseFill className='btn_icon' />Home Loans</button>
                        </div>
                        
                    </div>
                </section>
        </div>
    );
};

export default WelcomePage;