import { CCard } from '@coreui/react';
import { CCardImage } from '@coreui/react';
import { CCardBody } from '@coreui/react';
import { CCardText } from '@coreui/react';

export default function Timetable() {
    return <div className="time-table-section">
        <div className='container'>
            <h2 className='text-center'>Time table of Classes</h2>
            <div className="row mt-4 justify-content-center ">
                <div className="col-lg-4 col-md-6 p-3 mt-3 mt-md-0">
                    <CCard className='card-comp'>
                        <CCardImage orientation="top" className='titmetable-img' src="/home/yoga.jpg" />
                        <CCardBody>
                            <h3 className='text-center'> Yoga</h3>
                            <div className='card-text'>
                                <h6 className='fw-bold'>Women's</h6> 5.30 AM to 6.30 AM
                                <h6 className='fw-bold mt-3'>Men's </h6> 6.30 AM to 7.30 AM (Sat - Sun)
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className='admission-btn mt-3'><i className="fa-light fa-book-open-cover"></i>&nbsp;Join Now</button>
                            </div>
                        </CCardBody>
                    </CCard>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 p-3 mt-md-0">
                <CCard className='card-comp'>
                        <CCardImage orientation="top" className='titmetable-img' src="/home/bharathanatyam.webp" />
                        <CCardBody>
                            <h3 className='text-center'> Classical Dance</h3>
                            <div className='card-text'>
                                <h6 className='fw-bold'>Thursday</h6> 6.00 PM to 8.00 PM
                                <h6 className='fw-bold mt-3'>Sunday</h6> 8.00 AM to 10.00 AM
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className='admission-btn mt-3'><i className="fa-light fa-book-open-cover"></i>&nbsp;Join Now</button>
                            </div>
                        </CCardBody>
                    </CCard>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 p-3 mt-md-0">
                <CCard className='card-comp'>
                        <CCardImage orientation="top" className='titmetable-img' src="/home/drawing.webp" />
                        <CCardBody>
                            <h3 className='text-center'> Drawing</h3>
                            <div className='card-text'>
                                <h6 className='fw-bold'>Wednesday</h6> 5.00 PM to 7.00 AM
                                <h6 className='fw-bold mt-3'>Friday</h6> 5.00 PM to 7.00 AM
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className='admission-btn mt-3'><i className="fa-light fa-book-open-cover"></i>&nbsp;Join Now</button>
                            </div>
                        </CCardBody>
                    </CCard>
                </div>
            </div>
        </div>

    </div>
}