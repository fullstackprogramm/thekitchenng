import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slider from '../slider/slider.component'


export class Specialdishes extends Component {
    render() {
        return (
            <section className="section">
                <div className="clearfix mb-5 pb-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 text-center heading-wrap">
                                <h2>Special Dishes</h2>
                                {/* <span className="back-text">Dishes</span> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Slider itemCount={3} fieldSlide="centernonloop" ></Slider>

            </section>
        )
    }
}

export default Specialdishes
