import React from "react";
import { Rating } from "react-simple-star-rating";
import "./card.css";

function Piece({title, price, }) {
    return (
        <div className="grid">
            {menu.map(el => {
              

                return (
                    <div key={el.id} className="card">
                        <img src={el.image} alt={el.title} className="card-img" />
                        <div className="card-info">
                            <div className="card-info_top">
                                <h2 className="card-title">{el.title}</h2>
                                <span className="card-price">{el.price}$</span>
                            </div>
                            <p className="card-text">{el.description}</p>
                            <div className="card-rate">
                                <button className="card-btn">+</button>
                                <div className="star-rating">
                                    <Rating initialValue={rating} size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Piece