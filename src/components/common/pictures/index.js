import React from 'react';
import Img from "gatsby-image";


const images = (pic1, pic2) => {
    return (
        <>
            <MultiPics fluid={pic1} alt="ryan's photo2" />
            <MultiPics fluid={pic2} alt="ryan's photo3" /> 
        </>
    )
}