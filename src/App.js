import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Cart from './components/Cart';
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product">
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
