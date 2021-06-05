import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productListAction } from '../../actions/productAction';
import Card from '../../components/UI/Card/Card';
import Button from '../../components/UI/Button/Button';
import { Link } from 'react-router-dom';

const Main = props => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const { products } = productList;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  const productCarts = products.map(item => {
    return (
      <Card
        key={item.title}
        tag={item.type}
        title={item.title}
        id={item._id}
        img={`/assets/images/${item.filename}`}
      >
        <p>{item.description}</p>
        <p>
          <strong>Price:</strong> $ {item.price}
        </p>
        <Link to={`/cart/${item._id}/1`}>
          <Button text="Add To Cart" type="blue" />
        </Link>
      </Card>
    );
  });

  return (
    <div className="flex flex-wrap	flex-1 flex-none flex-grow md:flex-grow-0 justify-center">
      {productCarts}
    </div>
  );
};

export default Main;
