import React, { Component } from 'react'
import Person1 from '../../assets/person_1.jpg'
import Person2 from '../../assets/person_2.jpg'
import Person3 from '../../assets/person_3.jpg'
import Testimonialcard from '../testimonialcard/testimonialcard.component'

class Testimonials extends Component {
    constructor() {
        super()

        this.state = {
            testimonies: [
                {
                    name: "Yemi Alade",
                    company: "CEO, XYZ Company",
                    testimony: "\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequiatque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fugasunt.\"",
                    image: Person1
                },
                {
                    name: "Aliko Dangote",
                    company: "CEO, Dangote Companies",
                    testimony: "\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequiatque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fugasunt.\"",
                    image: Person2
                },
                {
                    name: "Elon Musk",
                    company: "CEO, Tesla Auto",
                    testimony: "\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, obcaecati? Quis eum minus, sequiatque quisquam ducimus aliquam veritatis nobis cum iusto neque enim explicabo maxime natus doloribus, fugasunt.\"",
                    image: Person3
                }
            ]
        }
    }
    render() {
        return (
            <section>
                <div className="clearfix mb-5 pb-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 text-center heading-wrap">
                                <h2>Testimonial</h2>
                                {/* <span className="back-text">Testimonial</span> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {
                        this.state.testimonies.map(testimony=>{
                            return <Testimonialcard name={testimony.name} company={testimony.company} testimony={testimony.testimony} image={testimony.image}/>
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Testimonials
