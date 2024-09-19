import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './HomePage.css'

export default function HomePage(){
    useEffect(() => {
        // Apply styles for page1
        document.body.style.height = '100%';
        document.body.style.overflowY = 'hidden';
        document.body.style.maxWidth = '100%';
        document.body.style.overflowX = 'hidden';
        document.body.style.backgroundColor = '#F1EEED';
    
        return () => {
          // Reset styles when the component is unmounted
          document.body.style.height = '';
          document.body.style.overflowY = '';
          document.body.style.maxWidth = '';
          document.body.style.overflowX = '';
          document.body.style.fontFamily = '';
          document.body.style.backgroundColor = '';
        };
      }, []);
      

    return (
        <div className="home-page" id="HomePage">
            <div id="rectangleTop"></div>
            <div id="rectangleLeft"></div>
            <div id="rectangleRight"></div>
            <div id="rectangleBottom"></div>
            {/* <Gradient /> */}
            {/* <div id="rectangleOutline"></div>
            <div id="rectangleBorder"></div> */}
            <div id="circle"></div>

            <Link to="/contact">
              <button className='contact-button'>Contact me</button>
            </Link>
            
            <p className="about">
              Hi, I am <span className="title">Salar.</span> <br />
              I am an <span className="title">artist/graphic designer</span> specializing in poster/cover design. I work with traditional and digital mediums.
            </p>
        </div>
    )
}