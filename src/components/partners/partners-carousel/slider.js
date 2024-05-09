import "./slider.css";

import React from "react";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



export default function Slider() {
    const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1500 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1500, min: 950 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 950, min: 564 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 564, min: 0 },
        items: 1
    }
};

const CustomDot = ({ onClick, ...rest }) => {
    const {
        active
    } = rest;

    return (
        <button
            className={active ? "active" : "inactive"}
            onClick={() => onClick()}
        >
        </button>
    );
};

return (
    <Carousel responsive={responsive}  showDots customDot={<CustomDot />} arrows={false} className="carousel_container">
        <img alt = '' src = './partners-imgs-public/googleLogo.png' className="carousel_item"></img>
        <img alt = '' src = './partners-imgs-public/linkedInLogo.png' className="carousel_item"></img>
        <img alt = '' src = './partners-imgs-public/payPalLogo.png' className="carousel_item"></img>
        <img alt = '' src = './partners-imgs-public/skypeLogo.png' className="carousel_item"></img>
        <img alt = '' src = './partners-imgs-public/samsungLogo.png' className="carousel_item"></img>
    </Carousel>
);
}