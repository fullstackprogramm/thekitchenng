import React, { Component } from 'react'
import Carousels from '../carousels/carousels.component'
import Specialdishcarousel from '../carousels/specialdishcarousel.component'
import Hero1 from '../../assets/hero_1.jpg'
import Hero2 from '../../assets/hero_2.jpg'
import Dish1 from '../../assets/dishes_1.jpg'
import Dish2 from '../../assets/dishes_2.jpg'
import Dish3 from '../../assets/dishes_3.jpg'
import Dish4 from '../../assets/dishes_4.jpg'
import Dish5 from '../../assets/dishes_5.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Slider extends Component {
    constructor() {
        super()

        this.state = {
            homeSlides: [
                {
                    slideTitle: 'Expert Chefs',
                    slideExplantion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.',
                    slideImage: Hero1
                },
                {
                    slideTitle: 'Best Dishes',
                    slideExplantion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.',
                    slideImage: Hero2
                },
                {
                    slideTitle: 'Best Dishes',
                    slideExplantion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.',
                    slideImage: Hero2
                }
            ],
            specialSlides: [
                {
                    name: "Organic tomato salad",
                    image: Dish1,
                    price: "#1250.00"
                },
                {
                    name: "Baked broccoli",
                    image: Dish2,
                    price: "#3000.00"
                },
                {
                    name: "Spicy meatballs",
                    image: Dish3,
                    price: "#2800.00"
                },
                {
                    name: "Eggplant parmigiana",
                    image: Dish4,
                    price: "#3200.00"
                }

            ]

        }
    }

    render() {
        if (this.props.fieldSlide == 'home-slider') {
            return (
                <OwlCarousel className={`${this.props.fieldSlide ? this.props.fieldSlide : ""} owl-carousel`} margin={10} items={this.props.itemCount} nav loop autoplay>

                    {
                        this.state.homeSlides.map(slide => {
                            return <Carousels slideTitle={slide.slideTitle} slideExplantion={slide.slideExplantion} slideImage={slide.slideImage} />
                        })
                    }
                </OwlCarousel>
            )
        }
        if (this.props.fieldSlide == 'centernonloop') {
            return (
                <OwlCarousel className={`${this.props.fieldSlide ? this.props.fieldSlide : ""} owl-carousel`} margin={10} items={this.props.itemCount} nav>

                    {
                        this.state.specialSlides.map(slide => {
                            return <Specialdishcarousel key={Math.random()} price={slide.price} name={slide.name} image={slide.image} />
                        })
                    }
                </OwlCarousel>
            )
        }

        else {
            return null
        }

    }
}

export default Slider
