const NavBar = ({ children, className }) => {
  return (
    <nav
      className={`container grid grid-cols-1 gap-3 p-5 mx-auto md:grid-cols-2 lg:grid-cols-3 place-items-start lg:place-items-center lg:py-4 rounded-xl bg-custom_primary ${className}`}
    >
      {children}
    </nav>
  );
};

export default NavBar;
