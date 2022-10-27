import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../features/productSlice';
import { GrFavorite } from 'react-icons/gr';
import { Link } from 'react-router-dom';
const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  const { isLoading, products, isError } = useSelector(
    (state) => state.products
  );

  if (isLoading) {
    return (
      <div className="loading">
        <h2>LOADING.....</h2>
      </div>
    );
  }

  return (
    <div className="wrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <Link style={{ textDecoration: 'none' }} to={`product/${product.id}`}>
            <div className="card__image">
              <img src={product.image} alt={product.title} />
            </div>
          </Link>

          <div className="card__body">
            <h3>{product.title.slice(0, 30)}</h3>
            <h4 className="price">${product.price}</h4>

            <div className="addCart">
              <button className="add_Cart">Add To Cart</button>
              <GrFavorite fontSize={22} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
