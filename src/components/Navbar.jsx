import React from 'react';
import { BsHandbag } from 'react-icons/bs';
import { GrFavorite } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <div className="nav__container">
      <nav>
        <h2 className="nav__logo">
          Som<span>Market</span>
        </h2>
        <ul className="nav__items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="product">Products</Link>
          </li>

          <li>
            <Link to="cart" className="btn-cart">
              <div className="cart-count">{amount < 0 ? 0 : amount}</div>
              <BsHandbag fontSize={20} fill={'#0bb6be'} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
