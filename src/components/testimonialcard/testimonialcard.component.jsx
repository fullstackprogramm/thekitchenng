import React, { Component } from 'react'

class Testimonialcard extends Component {
    render() {
        return (
            <div class="col-md-4">
                <blockquote class="testimonial">
                    <p>{this.props.testimony}</p>
                    <div class="d-flex author">
                        <img src={this.props.image} alt="" class="mr-4" />
                        <div class="author-info">
                            <h4>{this.props.name}</h4>
                            <p>{this.props.company}</p>
                        </div>
                    </div>
                </blockquote>
            </div>
        )
    }
}

export default Testimonialcard
