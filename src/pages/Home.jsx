import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../features/productSlice';
import Products from '../components/Products';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className="layout">
      <Products />
    </div>
  );
};

export default Home;
