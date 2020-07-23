import React, { Component } from 'react'
import Header from '../header/header.component'
import Slider from '../slider/slider.component'
import Footer from '../footer/footer.component'

class Signin extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider itemCount={1} fieldSlide="home-slider" />
                <section className="section">
                    <div className="clearfix mb-5 pb-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 text-center heading-wrap">
                                    <h2>Get Started</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <form action="#" method="post">
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <h4 className="text-center" style={{ fontWeight: 'bold', color: 'black' }}>SIGN UP</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label for="name">Name</label>
                                            <input type="text" id="name" className="form-control " />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label for="phone">Phone</label>
                                            <input type="text" id="phone" className="form-control " />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <label for="email">Email</label>
                                            <input type="email" id="email" className="form-control " />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label for="password">Password</label>
                                            <input type="password" id="password" className="form-control " />
                                        </div>

                                        <div className="col-md-6 form-group">
                                            <label for="confirm">Confirm Password</label>
                                            <input type="password" id="password" className="form-control " />
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className=" col-md-6 form-check">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" /> I agree to the <mark>Terms and Condition</mark>
                                            </label>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="submit" value="Create Account" className="btn btn-primary" />
                                        </div>

                                    </div>
                                </form>
                            </div>

                            <div className="col-lg-6 pl-2 pl-lg-5">

                                <div className="col-md-8 mx-auto contact-form-contact-info">
                                    <form action="#" method="post">

                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <h4 className="text-center" style={{ fontWeight: 'bold', color: 'black' }}>LOGIN</h4>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <label for="email / number">Mobile no or Email</label>
                                                <input type="email number" id="email/number" className="form-control " />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <label for="password">Password</label>
                                                <input type="password" id="password" className="form-control " />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <p>Forgot Password?</p>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <input type="submit" value="LOGIN" className="btn btn-primary" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <button><a className="social" href="www.facebook.com"><i aria-hidden="true" className="fa fa-facebook" data-toggle="tooltip" title="Facebook"></i></a> Login with facebook</button>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <button><a className="social" href="www.gmail.com"><i aria-hidden="true" className="fa fa-google-plus" data-toggle="tooltip" title="google-plus"></i></a> Sign in with google</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>
                <Footer />
            </div>
        )
    }
}

export default Signin
