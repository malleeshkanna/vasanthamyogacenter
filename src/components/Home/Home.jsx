import { CCarousel } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';
import './Home.css'
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import About from './About';
import AnnounceAndEvents from './AnnounceAndEvents';
import Asanas from './Asanas';
import Timetable from './Timetable';
import Testimonial from './Testimonial';

function Home() {
    const [carouselArr, setCarouselArr] = useState([
        { imgsrc: '/carousel/carousel-2.webp', desc: "Effective communication in yoga fosters collaboration and enhances team productivity." },
        { imgsrc: '/carousel/carousel-1.webp', desc: "Bharatanatyam, a timeless tradition of grace, storytelling, and divine rhythm, captures the soul of India's cultural heritage." },
        { imgsrc: "/carousel/carousel-3.webp", desc: "Drawing is the artist's most direct and spontaneous expression, a line that tells a story from heart to hand." }])

    return (
        <div className='homeMaster'>
            <Helmet>
                <title>Home - Vasantham Yoga Center</title>
                <meta name="description" content="Vasantham Yoga Center - Salem, Tamilnadu" />
                <meta name="keywords" content="best yoga center salem,best yoga center,yoga center" />
                <link rel="canonical" href="https://vasanthamyogacenter.com/home" />
            </Helmet>
            <div className="carousel-section">
                <CCarousel controls transition="crossfade" indicators>
                    {carouselArr.map((slide, index) => (
                        <CCarouselItem key={index}>
                            <div className="image-container">
                                <img src={slide.imgsrc} alt={"Slide " + index} className="image" />
                                <div className="text-overlay">
                                    <p>{slide.desc}</p>
                                </div>
                            </div>
                        </CCarouselItem>
                    ))}
                </CCarousel>
            </div>
            <About />
            <AnnounceAndEvents />
            <div className="parallax">
                <div>
                    <h3 className='text-center text-white text-uppercase'>Apply for admission and start your classes today !</h3>
                    <div className="d-flex justify-content-center">
                    <Link to="/admission" className='admission-btn mt-3'><i className="fa-light fa-book-open-cover"></i>&nbsp;Click Here</Link>
                    </div>
                </div>
            </div>
            <Asanas />
            <Timetable/>
            <Testimonial/>
        </div>
    )
}

export default Home