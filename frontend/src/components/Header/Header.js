import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <nav className=" border-b mb-5 px-10 w-full flex flex-none fixed bg-white top-0 z-40">
        <picture className="flex flex-none pl-4 flex items-center box-border">
          <Link to="/">
            <img
              src="/logo192.png"
              alt="React SuperMarket"
              style={{ maxWidth: '45px' }}
            />
          </Link>
        </picture>
        <ul className="flex flex-auto items-center space-x-5 m-5">
          <li className="hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link to="/signin">Sign in</Link>
          </li>
        </ul>

        <ul className="flex flex-none px-6 items-center box-border">
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="#C4B5FD"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
