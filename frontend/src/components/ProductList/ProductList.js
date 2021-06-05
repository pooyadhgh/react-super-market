import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const ProductList = props => {
  const productCarts = props.products.map(item => {
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
        <Button text="Add To Cart" type="blue" />
      </Card>
    );
  });

  return (
    <div className="flex flex-wrap	flex-1 flex-none flex-grow md:flex-grow-0 justify-center">
      {productCarts}
    </div>
  );
};

export default ProductList;
