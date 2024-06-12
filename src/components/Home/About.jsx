function About() {
    return (
        <div className="about-section">
            <div className="p-3">
                <h3 className='text-center'>ABOUT THE CENTER</h3>
                <div className='container mt-4'>
                    <div className="row">
                        <div className="col-md-6 mt-3 mt-md-0">
                            <div className="image-container">
                                <a href='https://maps.app.goo.gl/2S6VkhRfthCR4jMN6' target='_blank'><img src="/home/vyc-collage.webp" alt="about-img" className="about-img" /></a>
                                <div className="img-overlay">
                                    <div className='d-flex justify-content-center'>
                                        <div>
                                            <p className='text-center'><i className="fa-light fa-map-location-dot p-4"></i></p>
                                            <p className='text-center'>google Map View</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3 mt-md-0">
                            <p>
                                <i className="fa-solid fa-quote-left"></i>&nbsp;Vasantham Yoga Center, boasting six branches across Salem,
                                has established itself as a beacon of excellence in the field of yoga.
                                Demonstrating a high level of expertise and commitment to the practice,
                                the center has earned an impressive tally of over 30+ gold medals, 30+ silver medals,
                                and 30+ bronze medals in various competitions. This remarkable achievement highlights
                                the center's dedication to nurturing talent and promoting the physical and mental well-being
                                of its students. With a large and growing student base, Vasantham Yoga Center continues to
                                inspire and cultivate a passion for yoga, making a significant impact on the community and the
                                lives of many individuals.&nbsp;<i className="fa-solid fa-quote-right"></i>
                            </p>
                            <div className="mt-3 d-flex justify-content-center">
                                <button className='admission-btn'><i className="fa-light fa-book-open-cover"></i>&nbsp;Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;