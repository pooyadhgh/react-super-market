import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, removeFromCart } from '../../actions/cartAction';
import Button from '../../components/UI/Button/Button';

const Cart = props => {
  const productId = props.match.params.id;
  const productAmount = +props.match.params.amount
    ? +props.match.params.amount
    : 1;

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  Number.prototype.round = function (places) {
    return +(Math.round(this + 'e+' + places) + 'e-' + places);
  };
  const sum = cartItems
    .reduce((acc, curr) => acc + curr.price * curr.amount, 0)
    .round(2);

  useEffect(() => {
    if (productId) {
      dispatch(addTocart(productId, productAmount));
    }
  }, [dispatch, productId, productAmount]);

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  const cartProducts = cartItems.map(item => {
    return (
      <div
        key={item.id}
        className="min-w-full grid grid-cols-5 justify-items-start place-content-between gap-x-14 items-center	"
      >
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
          <p>Amount: {item.amount}</p>
        </div>

        <div>
          <Button
            onClick={() => removeFromCartHandler(item.id)}
            text="X"
            type="red"
          />
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap flex-row py-14 px-10">
      <div className="lg:w-2/3 md:w-full border-solid border-2 p-5 rounded">
        {cartProducts}
      </div>

      <div className="lg:w-1/4 text-center my-auto mx-auto">
        <h2 className="text-3xl	font-semibold">Total</h2>
        <p className="text-2xl my-2">$ {sum}</p>
        <Button text="Checkout" type="blue" />
      </div>
    </div>
  );
};

export default Cart;
