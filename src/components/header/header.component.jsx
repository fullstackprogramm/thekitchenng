import React, { Component } from 'react'
import Logo from '../../assets/bl.jpg'
import { Link, NavLink, withRouter } from 'react-router-dom'
// import '../../style.css'

class Header extends Component {
    render() {
        return (
            <header role="banner">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="container">
                        <img id="logo" src={Logo} />

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExample05">
                            <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link active" to="/menu">Menu</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link active" to="/signin">Login & SignUp</NavLink>
                                </li>
                            </ul>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item cta-btn">
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header)
