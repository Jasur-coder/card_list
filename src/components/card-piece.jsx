import React from "react";
import { Rating } from "react-simple-star-rating";
import "./card.css";

function Piece({title, price, description, image, id, rating}) {
    return (
           
                    <div key={id} className="card">
                        <img src={image} alt={title} className="card-img" />
                        <div className="card-info">
                            <div className="card-info_top">
                                <h2 className="card-title">{title}</h2>
                                <span className="card-price">{price}$</span>
                            </div>
                            <p className="card-text">{description}</p>
                            <div className="card-rate">
                                <button className="card-btn">+</button>
                                <div className="star-rating">
                                    <Rating initialValue={rating} size={25} />
                                </div>
                            </div>
                        </div>
                    </div>

    )
}

export default Piece