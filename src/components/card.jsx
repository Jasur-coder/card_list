import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./card.css";
import Piece from "./card-piece";

function Card() {
    const [menu, setMenu] = useState([])

    async function getMenu() {
        await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setMenu(json))
    }

    useEffect(() => {
        getMenu()
    }, [])


    return (

            <div className="grid">
                {
                    menu.map(el => {
                        const rating = Math.round(el.rating.rate)
                        return (
                            <Piece key={el.id} price={el.price} description={el.description} title={el.title} image={el.image} rating={rating} />
                        )
                    })
                }
            </div>

    )
}

export default Card