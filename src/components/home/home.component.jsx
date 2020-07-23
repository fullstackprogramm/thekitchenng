import React, { Component } from 'react'
import Header from '../header/header.component'
import Slider from '../slider/slider.component'
import Specialdishes from '../specialdishes/specialdishes.component'
import Testimonials from '../Testimonials/testimonials.component'
import Footer from '../footer/footer.component'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider itemCount={1} fieldSlide="home-slider" />
                <Specialdishes />
                <Testimonials />
                <Footer/>
            </div>

        )
    }
}

export default Home
