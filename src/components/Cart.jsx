import React from 'react';
import {useSelector} from "react-redux";
import product from "./Product";


const Cart = () => {
    const cart = useSelector(state => state.handleCart)
    const handleClick =()=> {
        cart.reduce((ac,el)=> ac + el.qty * el.price, 0)
    }
    console.log(cart)
    return (
        <div className="container">
            <div className="row">
                {cart.map(el => (
                    <div key={el.id}>
                        <div className="col-md-4   align-items: center;">
                            <img src={el.image} alt={el.title}
                                 height={200} width={180}/>
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw--bold">
                                {product.qty} X * {product.price}
                            </p>
                            <button className="btn btn-outline-dark me-4"
                                    onClick={() => handleClick()}
                            >
                                <i className="fa fa-minus"></i>
                            </button>

                            <button className="btn btn-outline-dark"
                                    onClick={() =>handleClick()}
                            >
                                <i className="fa fa-plus"></i>
                            </button>

                        </div>


                    </div>

                ))}
            </div>


        </div>


    );
};

export default Cart;