import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productPageAction } from '../../actions/productAction';
import Button from '../../components/UI/Button/Button';

const Product = props => {
  const postId = props.match.params.id;
  const dispatch = useDispatch();

  const productPage = useSelector(state => state.productPage);
  const { product } = productPage;

  useEffect(() => {
    dispatch(productPageAction(postId));
  }, [dispatch, postId]);

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={product.title}
              className="lg:w-1/3 my-6 w-full object-cover object-center rounded border border-gray-200"
              src={`/assets/images/${product.filename}`}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium py-1">
                {product.title}
              </h1>
              <h2 className="text-sm title-font text-gray-500 tracking-widest py-1">
                {product.tag}
              </h2>
              <div className="flex my-4">
                <span className="flex items-center">
                  <span className="text-gray-600">
                    Rating: {product.rating} / 5
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">{product.text}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-2">
                <div className="flex items-center">
                  <span className="mr-3">Amount</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="py-3 title-font font-medium text-2xl text-gray-900">
                  $ {product.price}
                </span>
                <div className="ml-auto">
                  <Button text="Add To Cart" type="blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
