import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const menu = [
    { to: '/', name: 'Home' },
    { to: '/add', name: 'Add' },
  ];

  const links = menu.map((l) => (
    <NavLink
      key={l.name}
      to={l.to}
      className="block py-3 px-4 hover:bg-gray-600 transition duration-200 ease-in"
    >
      {l.name}
    </NavLink>
  ));

  return (
    <header className="sticky top-0 bg-gray-700 text-white">
      <nav className="container flex flex-row items-center">
        <div className="text-lg font-semibold pr-4">PERN TODO BASIC</div>
        {links}
      </nav>
    </header>
  );
};

export default Navbar;
