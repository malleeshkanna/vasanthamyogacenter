import { useState } from "react";
import Slider from "react-slick";
import StartRating from "../../services/StartRating";

var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
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


export default function Testimonial() {

    const [testimonials, Settestimonials] = useState([
        {
            name: "Jeshwanth Jesh", message: `very peacefull place & kindfull master
            You & your's family can get a good atmosphere to learn a yoga 👍🏼👍🏼 …`, ratings: 5
        },
        {
            name: "Harini Santhosh", message: `Thank you so much for your endless effort master.....`, ratings: 5
        },
        {
            name: "Saravanan Thangavel", message: `Yoga class is very useful my experience thank you !`, ratings: 5
        }
    ])


    return <div className="testimonial-section pb-5">
        <div className="container">
            <div className="p-3">
                <h3 className="text-center">TESTIMONIAL</h3>
                <div className="mt-3">
                    <Slider {...settings}>
                        {testimonials?.map((val, index) => (
                            <div className="p-3" key={index}>
                                <div className="testimonial-card h-100">
                                    <h5>{val.name}</h5>
                                    <StartRating value={val.ratings} /><br />
                                    <div>
                                        <i>{val.message}</i>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </Slider>
                </div>
            </div>
        </div>

    </div>
}