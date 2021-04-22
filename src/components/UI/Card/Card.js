const Card = props => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 w-96">
        <img
          className="w-full object-cover h-48"
          src={props.img}
          alt={props.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>

          <div className="my-3 flex flex-wrap -m-1">
            <span className=" bg-gray-200 rounded-full px-2 font-bold text-sm leading-loose ">
              {props.tag}
            </span>
          </div>

          <div className="text-gray-700 text-base">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
