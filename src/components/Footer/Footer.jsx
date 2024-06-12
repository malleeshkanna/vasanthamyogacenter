import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="p-3">
                <div className="row">
                    <div className="col-md-6 col-lg-3 d-flex align-items-center justify-content-center ">
                        <img src="/common/vyc-logo.png" className='vyc-logo' alt="Vasantham Yoga Center" />
                    </div>
                    <div className="col-md-6 col-lg-3 mt-5 mt-md-0 d-flex align-items-center justify-md-content-center ">
                        <div>
                            <h4><i className="fa-light fa-link"></i>&nbsp;Menu Links</h4>
                            <div className='mt-3'>
                                <Link to="/">
                                    <p><i className="fa-light fa-house"></i>&nbsp;&nbsp;Home</p>
                                </Link>
                                <Link>
                                    <p><i className="fa-light fa-address-card"></i>&nbsp;&nbsp;About Us</p>
                                </Link>
                                <Link to="/gallery">
                                    <p><i className="fa-light fa-camera"></i>&nbsp;&nbsp;Gallery</p>
                                </Link>
                                <Link>
                                    <p><i className="fa-light fa-calendar-star"></i>&nbsp;&nbsp;Events</p>
                                </Link>
                                <Link>
                                    <p><i className="fa-light fa-phone"></i>&nbsp;&nbsp;Contact US</p>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-3 mt-3 mt-md-0 d-flex justify-md-content-center ">
                        <div>
                            <h4><i className="fa-light fa-thumbs-up"></i>&nbsp;Social Links</h4>
                            <div className='mt-3'>
                                <p>
                                    <a href='https://www.facebook.com/vasanthamyogacenter/' target='_blank'><i className="fa-brands fa-facebook-f"></i>&nbsp;&nbsp;Facebook</a>

                                </p>
                                <p>
                                    <a href='https://www.instagram.com/vasantham_yoga_center/' target='_blank'><i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;Instagram</a>

                                </p>
                                <p>
                                    <a href='https://wa.link/jflny2' target='_blank'><i className="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;Send Message on Whatsapp</a>

                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-3 mt-3 mt-md-0 d-flex justify-md-content-center ">
                        <div>
                            <h4><i className="fa-light fa-location-dot"></i>&nbsp;Address</h4>
                            <div className='mt-3'>
                                <p>No.9 Periyannan Chitiyar Complex</p>
                                <p>1st Floor, Nethimedu Bus Stop Opp</p>
                                <p>Near HP Pertrol Bunk</p>
                                <p><i className="fa-light fa-phone"></i>&nbsp;<a href='tel://+917092026756'>+91 70920 26756</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;