import React, { Component } from 'react'

class Specialdishcarousel extends Component {
    render() {
        return (
            <div>
                <a href="#" className="item-dishes">
                    <div className="text">
                        <p className="dishes-price">{this.props.price}</p>
                        <h2 className="dishes-heading">{this.props.name}</h2>
                    </div>
                    <img src={this.props.image} alt="" className="img-fluid" />
                </a>
            </div>
        )
    }
}

export default Specialdishcarousel
