import './BrandingPage.css';
import { Link } from 'react-router-dom';

import zealCover from '../assets/Branding/Zeal/ZealGif.gif';
import creamCrumbCover from '../assets/Branding/Cream&Crumb/Cream&CrumbCover.jpg';

export default function BrandingPage(){
    return (
        <div className="branding-page">
            {/* <div id="rectangleTop"></div>
            <div id="rectangleLeft"></div>
            <div id="rectangleRight"></div>
            <div id="rectangleBottom"></div> */}

            <Link to="/contact">
                <button style={{backgroundColor:"#F1EEED"}} className='contact-button'>Contact me</button>
            </Link>

            <div className='branding-title-container'>
                <h1 className='heading'>Branding & Identity</h1>
            </div>

            <div className='projects-container'>
                <div className='project project-1'>
                    <a href='https://www.behance.net/gallery/195865813/Energy-Drink-Zeal-Brand-Identity-Packaging-Design' target='_blank'>
                        <img className='cover-image' src={zealCover} />
                    </a>
                </div>
                <div className='project project-2'>
                    <a href="https://www.behance.net/gallery/195722555/Cream-Crumb-Cookie-shop-logo-brand-identity-design" target='_blank'>
                        <img className='cover-image' src={creamCrumbCover} />
                    </a>
                </div>
            </div>
        </div>
    )
}