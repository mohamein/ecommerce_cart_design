import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsStar } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
const Product = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
  const API_URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    const getProduct = async () => {
      const resp = await axios.get(`${API_URL}/${id}`);
      const data = await resp.data;
      setProduct(data);
    };
    getProduct();
  }, [id]);

  return (
    <div className="product__container">
      <div className="left__content">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="right__content">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="contents">
          <span>
            <BsStar fill="#0b1516" />
            {product.rating?.rate}
          </span>
          <h4>${product.price}</h4>
        </div>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="add_Cart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
