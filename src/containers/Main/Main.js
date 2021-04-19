import { useEffect, useState } from 'react';
import getAllProducts from '../../services/getAllProducts';

const Main = props => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return <p>main</p>;
};

export default Main;
