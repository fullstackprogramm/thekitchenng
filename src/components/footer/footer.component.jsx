import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer" role="contentinfo">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-4 mb-5">
                            <h3>About Us</h3>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et dolor blanditiis
                    consequuntur ex voluptates perspiciatis omnis unde minima expedita.</p>
                            <ul className="list-unstyled footer-link d-flex footer-social">
                                <li><a href="#" className="p-2"><span className="fa fa-twitter"></span></a></li>
                                <li><a href="#" className="p-2"><span className="fa fa-facebook"></span></a></li>
                                <li><a href="#" className="p-2"><span className="fa fa-linkedin"></span></a></li>
                                <li><a href="#" className="p-2"><span className="fa fa-instagram"></span></a></li>
                            </ul>

                        </div>
                        <div className="col-md-5 mb-5">
                            <div className="mb-5">
                                <h3>Opening Hours</h3>
                                <p><strong className="d-block">Sunday-Thursday</strong> 5AM - 10PM</p>
                            </div>
                            <div>
                                <h3>Contact Info</h3>
                                <ul className="list-unstyled footer-link">
                                    <li className="d-block">
                                        <span className="d-block">Address:</span>
                                        <span className="text-white">34 Street Name, City Name Here, Nigeria</span></li>
                                    <li className="d-block"><span className="d-block">Telephone:</span><span className="text-white">+234 812 779
                          136</span></li>
                                    <li className="d-block"><span className="d-block">Email:</span><span className="text-white">info@yourmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 mb-5">
                            <h3>Quick Links</h3>
                            <ul className="list-unstyled footer-link">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Disclaimers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-md-center text-left">
                            <p> Copyright &copy; TheKitchen {new Date().getFullYear()} </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
