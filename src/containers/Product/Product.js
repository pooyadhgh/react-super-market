import { useEffect, useState } from 'react';
import getAllProducts from '../../services/getAllProducts';
import Page from '../../components/Page/Page';

const Product = props => {
  const postId = props.match.params.id;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);
  const selectedProduct = products.filter(item => item.id === +postId);

  const productCarts = selectedProduct.map(item => {
    return (
      <Page
        key={item.title}
        tag={item.type}
        title={item.title}
        id={item.id}
        text={item.description}
        img={`/assets/images/${item.filename}`}
        price={item.price}
        rating={item.rating}
      ></Page>
    );
  });

  return <>{productCarts}</>;
};

export default Product;
