import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Carousels extends Component {

    render() {

        const divStyle = {
            backgroundImage: 'url(' + this.props.slideImage + ')',
        };

        return (
            
                <div className="slider-item" style={divStyle}>

                    <div className="container">
                        <div className="row slider-text align-items-center justify-content-center">
                            <div className="col-md-8 text-center col-sm-12">
                                <h1>{this.props.slideTitle}</h1>
                                <p className="mb-5">{this.props.slideExplantion}</p>
                                <p><Link to="/menu" className="btn btn-white btn-outline-white">ORDER NOW</Link></p>
                            </div>
                        </div>
                    </div>

                </div>
        )
    }

}

export default Carousels