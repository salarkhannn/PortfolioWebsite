import './posterPage.css'

import poster1 from '../assets/Posters/SteveLacy.jpg';
import poster2 from '../assets/Posters/feelthefear.jpg';
import poster3 from '../assets/Posters/uns.jpg';
import poster4 from '../assets/Posters/Whiplash.jpg';
import poster5 from '../assets/Posters/AdidasSambaPoster.jpg';
import poster6 from '../assets/Posters/AfterHours.jpg';
import poster7 from '../assets/Posters/HarryAndHisHorse.jpg';
import poster8 from '../assets/Posters/KimYejiPoster.jpg';
import poster9 from '../assets/Posters/MuhammadAliPoster.jpg';
import poster10 from '../assets/Posters/TheGirlWithAPearlEaring.jpg';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const posters = [poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8, poster9, poster10];


export default function PosterPage(){
    useEffect(() => {
        document.body.style.height = '100%';
        document.body.style.overflowY = 'scroll';
        document.body.style.maxWidth = '100%';
        document.body.style.overflowX = 'hidden';
        document.body.style.backgroundColor = '#F1EEED';
    })

    return (
        <div className="poster-page" id="PosterPage">

            {/* <div id="rectangleTop"></div>
            <div id="rectangleLeft"></div>
            <div id="rectangleRight"></div>
            <div id="rectangleBottom"></div> */}
            
            <Link to="/contact">
                <button style={{backgroundColor:"#F1EEED"}} className='contact-button'>Contact me</button>
            </Link>

            <div className='posters'>
                <p className='heading'>Poster Exploration</p>
                <div className='poster-columns'>
                    <div className='column'>
                        {posters.filter((_, index) => index % 3 === 0).map((imgSrc, index) => (
                            <img className='poster' key={index} src={imgSrc} alt={`Poster ${index + 1}`} />
                        ))}
                    </div>
                    <div className='column'>
                        {posters.filter((_, index) => index % 3 === 1).map((imgSrc, index) => (
                            <img className='poster' key={index} src={imgSrc} alt={`Poster ${index + 1}`} />
                        ))}
                    </div>
                    <div className='column'>
                        {posters.filter((_, index) => index % 3 === 2).map((imgSrc, index) => (
                            <img className='poster' key={index} src={imgSrc} alt={`Poster ${index + 1}`} />
                        ))}
                    </div>
                </div>
            </div>
            {/* <div id="circle1"></div> */}
            {/* <button className='contact-button'>Contact me</button> */}
        </div>
    )
}