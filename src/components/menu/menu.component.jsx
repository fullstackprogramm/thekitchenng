import React, { Component } from 'react'
import { Markup } from 'interweave';
import Header from '../header/header.component'
import Slider from '../slider/slider.component'
import Dish4 from '../../assets/dishes_4.jpg'
import Footer from '../footer/footer.component'


export class Menu extends Component {
    constructor() {
        super()
        this.state = {
            foods: [
                {
                    category: 'Salads',
                    dishes: [
                        {
                            name: 'Chicken Salad',
                            price: 2999,
                            desc: 'Chicken brushed herbs, Lettuce, tomatoes,carrot,juicy chicken,Cucumber,apple,nuts,red bell pepper,eggs served with cilantro vinaigerette.'
                        },
                        {
                            name: 'Fish Salad',
                            price: 2999,
                            desc: 'Carrot,juicy chicken,Cucumber,apple,nuts,red bell pepper,eggs served with cilantro vinaigerette.'
                        }
                    ],
                    toppings: [
                        {
                            category: 'Fillings',
                            additives: [
                                {
                                    name: 'BEEF(170G)',
                                    price: 500
                                },
                                {
                                    name: 'CHICKEN(160G)',
                                    price: 500
                                },
                                {
                                    name: 'FISH(80G)',
                                    price: 500
                                },
                                {
                                    name: 'SALAD SAUCE',
                                    price: 0
                                }
                            ]
                        },
                        {
                            category: 'VEGETABLES',
                            additives: [
                                {
                                    name: 'LETTUCE',
                                    price: 200
                                },
                                {
                                    name: 'TOMATOES	',
                                    price: 200
                                },
                                {
                                    name: 'CARROT',
                                    price: 300
                                },
                                {
                                    name: 'APPLE',
                                    price: 150
                                }
                            ]
                        }
                    ]

                },
                {
                    category: 'Breakfast',
                    dishes: [
                        {
                            name: 'Egg Pizza',
                            price: 2999,
                            desc: 'Chicken brushed herbs, Lettuce, tomatoes,carrot,juicy chicken,Cucumber,apple,nuts,red bell pepper,eggs served with cilantro vinaigerette.'
                        },
                        {
                            name: 'Special Omelete',
                            price: 2999,
                            desc: 'Carrot,juicy chicken,Cucumber,apple,nuts,red bell pepper,eggs served with cilantro vinaigerette.'
                        },
                        {
                            name: 'Egg Sushi',
                            price: 2999,
                            desc: 'Lettuce, tomatoes,carrot,juicy chicken,Cucumber,apple,nuts,red bell pepper,eggs served with Cucumber,apple,nuts,red bell pepper,eggs served with cilantro vinaigerette.'
                        },
                    ],
                    toppings: [
                        {
                            category: 'Fillings',
                            additives: [
                                {
                                    name: 'SAUSAGE(120G)',
                                    price: 500
                                },
                                {
                                    name: 'CHICKEN(160G)',
                                    price: 500
                                },
                                {
                                    name: 'FISH(80G)',
                                    price: 500
                                }
                            ]
                        },
                        {
                            category: 'VEGETABLES',
                            additives: [
                                {
                                    name: 'POTATOES',
                                    price: 200
                                },
                                {
                                    name: 'TOMATOES	',
                                    price: 200
                                },
                                {
                                    name: 'CARROT',
                                    price: 200
                                },
                                {
                                    name: 'PLAINTAIN',
                                    price: 500
                                },
                                {
                                    name: 'NUTS',
                                    price: 150
                                },
                                {
                                    name: 'RED BELL PEPPER',
                                    price: 700
                                },
                                {
                                    name: 'CUCUMBER',
                                    price: 200
                                },
                                {
                                    name: 'ORANGE',
                                    price: 200
                                },
                                {
                                    name: 'EGGS',
                                    price: 100
                                },
                                {
                                    name: 'CEDAR CHEESE',
                                    price: 500
                                }
                            ]
                        }
                    ]

                }
            ],
            currentString: ''
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Slider itemCount={1} fieldSlide="home-slider" />
                <div className="container">
                    {
                        this.state.foods.map(food => {
                            return (
                                <div className="row">
                                    <div className="col-md-12 text-center heading-wrap">
                                        <h2>{food.category}</h2>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="top">{food.category}</h4>
                                        <ul>
                                            {
                                                food.dishes.map(dish => {
                                                    let currentString = `<li style={{ fontFamily: 'monotype corsiva', fontSize: '19px', color: 'red' }}>${dish.name} </li> 
                                                    <p className="price" style={{ float: 'right' }}>N${dish.price}</p>
                                                    <p>${dish.desc}</p>`
                                                    return <Markup content={currentString} />
                                                })
                                            }

                                        </ul>

                                        {
                                            food.toppings.map(topping => {
                                                return (
                                                    <table className="table table-options">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col" className="text-dark">ADD {topping.category}</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                topping.additives.map(additive => {
                                                                    return (
                                                                        <tr style={{ width: '40%' }}>
                                                                            <td>{additive.name}</td>
                                                                            <td className="price">{additive.price === 0 ? 'FREE' : `N${additive.price}`}</td>
                                                                            <td> <i className="fa fa-plus-circle text-success"></i></td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className="col-sm-6">
                                        <img src={Dish4} style={{ height: '100%' }} />
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* <div className="row">
                        <div className="col-md-6">
                            <h4 className="top">Breakfast</h4>
                            <ul>
                                <li style={{ fontFamily: 'monotype corsiva', fontSize: '19px', color: 'black' }}>Egg Pizza </li>
                                <p className="price" style={{ float: 'right' }}>N2999</p>
                                <p>Eggs, red,green bell pepper, milk, onion and the Kitchen's Special formula</p>
                                <p className="star">Comes with two free optional fillings *</p>
                                <li style={{ fontFamily: 'monotype corsiva', fontSize: '19px', color: 'black' }}>Special Omelete</li>
                                <p className="price" style={{ float: 'right' }}>N2999</p>
                                <p> Mixed with grated carrots, green onion, green and red <wbr /> red ball pepper.</p>
                                <p className="star">Comes with two free optional fillings *</p>
                                <li style={{ fontFamily: 'monotype corsiva', fontSize: '19px', color: 'black' }}>Egg Sushi</li>
                                <p className="price" style={{ float: 'right' }}>N2999</p>
                                <p>Irish potatoes, onion, milk and the Kitchen's Special<wbr /> formula.</p>
                                <p className="star">Comes with two free optional fillings *</p>

                            </ul>
                            <table className="table table-options">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-dark">ADD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>BEEF(170G)</td>
                                        <td className="price">N500</td>
                                        <td> <i className="fa fa-plus-circle text-success"></i></td>
                                    </tr>
                                    <tr>
                                        <td>CHICKEN(160G)</td>
                                        <td className="price">N500</td>
                                        <td> <i className="fa fa-plus-circle text-success"></i></td>
                                    </tr>
                                    <tr>
                                        <td>FISH(80G)</td>
                                        <td className="price">N500</td>
                                        <td> <i className="fa fa-plus-circle text-success"></i></td>
                                    </tr>
                                    <tr>
                                        <td>SALAD SAUCE</td>
                                        <td className="price">FREE</td>
                                        <td> <i className="fa fa-plus-circle text-success"></i></td>
                                    </tr>

                                </tbody>
                            </table>
                            <table className="table table-options">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-dark">ADD VEGETABLES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>LETTUCE</td>
                                        <td className="price">N200</td>
                                        <td> <i className="fa fa-plus-circle text-success"></i></td>
                                    </tr>
                                    <tr>
                                        <td>TOMATOES</td>
                                        <td className="price">N200</td>
                                        <td> <i className="fa fa-plus-circle text-success"></i></td>
                                    </tr>
                                    <tr>
                                        <td>CARROT</td>
                                        <td className="price">N300</td>
                                        <td> <i className="fa fa-plus-circle text-success"></i></td>
                                    </tr>
                                    <tr>
                                        <td>APPLE</td>
                                        <td className="price">N150</td>
                                        <td> <i className="fa fa-plus-circle text-success"></i></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <div className="col-sm-6">
                            <img src={Dish4} style={{ height: '100%' }} />
                        </div>
                    </div> */}
                </div>
                <Footer/>  
            </div >
        )
    }
}

export default Menu
