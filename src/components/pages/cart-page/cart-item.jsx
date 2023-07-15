import React from "react";
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../../icons";

const CartItem = (props) => {
    const { name, image_url, price, quantity, decrease, _id, description, increase, removeProduct } = props;
    const product = {name, image_url, _id, price, quantity, description};
    return (
     <div>
           <div className="cart-item">
            <div className="item-image">
                <img src={image_url} alt="product" />
            </div>
            <div className="name-price">
                <h4>{name}</h4>
                <p>₦ {price * quantity}</p>
            </div>
            <div className="quantity">
                <p>{`Qty: ${quantity}`}</p>
            </div>
            <div className="btns-container">
                <button className="btn-increase" onClick={() => increase(product)}>
                    <PlusCircleIcon width="20px" />
                </button>
                {quantity === 1 && (
                    <button className="btn-trash" onClick={() => removeProduct(product)}>
                        <TrashIcon width="20px" />
                    </button>
                )}
                {quantity > 1 && (
                    <button className="btn-decrerase" onClick={() => decrease(product)} >
                        <MinusCircleIcon width="20px" />
                    </button>
                )}
            </div>
        </div>
        <div></div>
     </div>
    );
};

export default CartItem;
