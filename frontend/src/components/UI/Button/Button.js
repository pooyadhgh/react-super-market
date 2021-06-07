const Button = props => {
  let btnClass = '';

  switch (props.type) {
    case 'blue':
      btnClass =
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4';
      break;
    case 'red':
      btnClass =
        'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-4';
      break;
    case 'green':
      btnClass =
        'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-4';
      break;
    default:
      btnClass =
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4';
  }

  return (
    <button onClick={props.onClick} className={btnClass}>
      {props.text}
    </button>
  );
};

export default Button;
