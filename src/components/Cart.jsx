import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, removeProduct } from '../features/cartSlice';
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartItems);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.amount * item.price;
    });
    return total;
  };

  if (cartItems.length <= 0) {
    return <div className="empty">Your Bag is Empty...</div>;
  }
  return (
    <div className="cart__container">
      {cartItems?.map((item) => (
        <div className="cart" key={item.id}>
          <div className="first-col">
            <img src={item.image} alt={item.title} />
            <h4>{item.title.slice(0, 20)}</h4>
          </div>
          <div className="second-col">
            <button
              onClick={() => {
                if (item.amount <= 0) {
                  dispatch(removeProduct(item.id));
                }
                dispatch(decrease(item.id));
              }}
              className="decrease"
            >
              -
            </button>
            <span>{item.amount}</span>
            <button
              onClick={() => dispatch(increase(item.id))}
              className="increase"
            >
              +
            </button>
          </div>
          <div className="third-col">
            <h4>${item.price}</h4>
          </div>
          <div className="four-col">
            <button
              onClick={() => dispatch(removeProduct(item.id))}
              className="remove"
            >
              X
            </button>
          </div>
        </div>
      ))}
      <div className="total">Subtotal: ${calculateTotal().toString()}</div>
    </div>
  );
};

export default Cart;
