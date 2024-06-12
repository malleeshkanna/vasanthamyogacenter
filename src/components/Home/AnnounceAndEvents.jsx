import Slider from "react-slick";

function AnnounceAndEvents() {

    const VerticalSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        pauseOnHover: true,
        speed: 5000,
        autoplaySpeed: 2000,
    };

    var HorizontalSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return <div className="events-and-announcement mt-4">
        <div className="container p-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="announcement">
                        <div className="announce-header">
                            <h3>Announcement</h3>
                        </div>
                        <div className="announcement-body">
                            <Slider {...VerticalSettings}>
                                <div className="message">
                                    <h2>Malleesh</h2>
                                </div>
                                <div className="message">
                                    <h2>Kanna</h2>
                                </div>
                                <div className="message">
                                    <h2>Nagaraj</h2>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mt-5 mt-md-0">
                    <div className="announcement">
                        <div className="announce-header">
                            <h3>Announcement</h3>
                        </div>
                        <div className="announcement-body">
                            <Slider {...HorizontalSettings}>
                                {['', '', ''].map((el, index) => (
                                    <div className="p-3">
                                        <div class="card" >
                                            <img class="card-img-top" src="https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg" alt="Card image cap"></img>
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AnnounceAndEvents