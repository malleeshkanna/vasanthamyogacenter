import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Asanas() {
    const [toggler, setToggler] = useState(false);
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/1000/600/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/1000/600/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/1000/600/",
        },
    ];

    return (
        <div className="asanas-gallery-section p-3">
            <div className="container">
                <div className="p-3  ">
                    <h3 className="text-center">ASANAS GALLERY</h3>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ImageGallery items={images} autoPlay={true} originalHeight={"400"} originalWidth={"400"} />
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-center">
                        <div>
                            <p className="text-justify">
                                At Vasantham Yoga Center, we offer a wide range of asanas to enhance flexibility, strength, and mental clarity. Our expert instructors ensure proper alignment and safety, catering to both beginners and advanced practitioners. Emphasizing breath control and mindfulness, our practice reduces stress, improves posture, and boosts overall health. Join us to experience the transformative power of yoga in a supportive environment.
                            </p>
                            <div className="mt-3 d-flex justify-content-center">
                                <button className='admission-btn'><i className="fa-light fa-camera"></i>&nbsp;See More Photographs</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Asanas;