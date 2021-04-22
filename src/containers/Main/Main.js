import { useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import getAllProducts from '../../services/getAllProducts';

const Main = props => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return <ProductList products={products} />;
};

export default Main;
