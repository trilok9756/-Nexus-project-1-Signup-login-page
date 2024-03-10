import React from 'react'
import "../styles/style.css"

import paneer from "../Assets/paneer.jpg"
import briyani from "../Assets/briyani.jpg"
import fish from "../Assets/fish.jpg"
import naan from "../Assets/naan.jpg"
import drinks from "../Assets/drinks.jpg"
import chickengravy from "../Assets/chickengravy.jpg"
import Egg from "../Assets/Egg.jpg"
import fried from "../Assets/fried.jpg"

function Menu() {
    const menuItems = [
        {
            logo: briyani,
            Name: "Chicken Briyani",
            Rate: "Price - 250"
        },
        {
            logo: fish,
            Name: "Fish Curry",
            Rate: "Price - 150"
        },
        {
            logo: paneer,
            Name: "paneer Masala",
            Rate: "Price - 120"
        },
        {
            logo: chickengravy,
            Name: "Chicken Gravy",
            Rate: "Price - 150"
        },
        {
            logo: naan,
            Name: "Butter Naan",
            Rate: "Price - 100"
        },
        {
            logo: drinks,
            Name: "Mojito",
            Rate: "Price - 150"
        },
        {
            logo: Egg,
            Name: "Egg Gravy",
            Rate: "Price - 100"
        },
        {
            logo: fried,
            Name: "Fried Rice",
            Rate: "Price - 150"
        }
    ]
    return (
        <>
            <div className="menu-section" id='menu'>
                <div className="titles">
                    <p className="title">Our Dishes</p>
                    <p className="title-text"> Our Dishes, a Fusion of Passion and Precision</p>
                </div>
                <div className="card-section">
                    {
                        menuItems.map((items, index) => (
                            <div className="card" key={index}>
                                <div className="cardimg-layer">
                                    <div className="card-img">
                                        <img src={items.logo} alt="menu-img" width="200px" height="200px" className='card-image' />
                                    </div>
                                </div>
                                <div className="card-details">
                                    <p className="card-title">{items.Name}</p>
                                    <p className="card-rate">{items.Rate}</p>
                                </div>
                                <div className="cardbtn-layer">
                                    <button className="card-btn">Place Order</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Menu