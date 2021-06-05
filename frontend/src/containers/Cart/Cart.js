import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../../actions/cartAction';
import Button from '../../components/UI/Button/Button';

const Cart = props => {
  const productId = props.match.params.id;
  console.log(props.match);
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addTocart(productId));
    }
  }, [dispatch, productId]);

  const cartProducts = cartItems.map(item => {
    return (
      <div className="grid grid-cols-5 justify-items-start place-content-between gap-1 items-center	">
        <div className="w-20 h-20  my-2">
          <img
            className="w-full object-cover h-20 rounded"
            src={`/assets/images/${item.image}`}
            alt={item.title}
          />
        </div>

        <div>
          <p>{item.title}</p>
        </div>

        <div>
          <p>$ {item.price}</p>
        </div>
        <div>
          <Button text="X" type="red" />
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap flex-row py-14 px-10">
      <div className="lg:w-2/3 md:w-full border-solid border-2 p-5 rounded">
        {cartProducts}
      </div>

      <div className="lg:w-1/4 my-5 mx-5 ">
        <h2 className="text-3xl	font-semibold">Total:</h2>
        <p className="text-2xl my-2">$ 200</p>
        <Button text="Checkout" type="blue" />
      </div>
    </div>
  );
};

export default Cart;
