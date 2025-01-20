import './PosterPage.css'

import poster1 from '../assets/Posters/SteveLacy.jpg';
import poster2 from '../assets/Posters/feelthefear.jpg';
import poster3 from '../assets/Posters/uns.jpg';
import poster4 from '../assets/Posters/Whiplash.jpg';
import poster5 from '../assets/Posters/AdidasSambaPoster.jpg';
import poster6 from '../assets/Posters/AfterHours.jpg';
import poster7 from '../assets/Posters/HarryAndHisHorse.jpg';
import poster8 from '../assets/Posters/kimYejiposter.jpg';
import poster9 from '../assets/Posters/MuhammadAliPoster.jpg';
import poster10 from '../assets/Posters/TheGirlWithAPearlEaring.jpg';
import poster11 from '../assets/Posters/tyler.jpg';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const posters = [poster1, poster4, poster7, poster10];
const posters2 = [poster2, poster11, poster8, poster5];
const posters3 = [poster3, poster6, poster9];
const posters4 = [poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8, poster9, poster10];

export const POSTERS = posters.map((poster, index) => ({
  id: index,
  url: poster,
}));

export const POSTERS2 = posters2.map((poster, index) => ({
    id: index,
    url: poster,
}));

export const POSTERS3 = posters3.map((poster, index) => ({
    id: index,
    url: poster,
}));

export const POSTERS4 = posters4.map((poster, index) => ({
  id: index,
  url: poster,
}));

export default function PosterPage() {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.height = '100%';
    document.body.style.overflowY = 'scroll';
    document.body.style.maxWidth = '100%';
    document.body.style.overflowX = 'hidden';
    document.body.style.backgroundColor = '#F1EEED';

    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;

        loadImg.onload = () => resolve(image.url);
        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(POSTERS.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log('Failed to load images', err));
  }, []);

  return (
    <div className="poster-page" id="PosterPage">
        {/* <Link to="/contact">
            <button style={{backgroundColor:"#F1EEED"}} className='contact-button'>Contact me</button>
        </Link> */}
        <Link to="/contact">
            <button style={{backgroundColor:"#F1EEED"}} className='contact-button'>Contact me</button>
        </Link>

      <div className="posters">
        <p className="heading">Poster Exploration</p>
        <div className="poster-columns">
          <div className="column">
            {imgsLoaded ? (
              POSTERS.map((image) => (
                <img className="poster" key={image.id} src={image.url} alt={`Poster ${image.id + 1}`} />
              ))
            ) : (
              <h1>Loading images...</h1>
            )}
          </div>
          <div className="column">
            {imgsLoaded ? (
              POSTERS2.map((image) => (
                <img className="poster" key={image.id} src={image.url} alt={`Poster ${image.id + 1}`} />
              ))
            ) : (
              <h1>Loading images...</h1>
            )}
          </div>
          <div className="column">
            {imgsLoaded ? (
              POSTERS3.map((image) => (
                <img className="poster" key={image.id} src={image.url} alt={`Poster ${image.id + 1}`} />
              ))
            ) : (
              <h1>Loading images...</h1>
            )}
          </div>
        </div>

        <div className='mobile-poster-column'>
          <div className="mobile-column">
              {imgsLoaded ? (
                POSTERS4.map((image) => (
                  <img className="poster" key={image.id} src={image.url} alt={`Poster ${image.id + 1}`} />
                ))
              ) : (
                <h1>Loading images...</h1>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}
