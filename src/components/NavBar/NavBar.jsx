import Logo from "./Logo";
import Search from "./Search";

const NavBar = ({ children }) => {
  return (
    <nav className="grid grid-cols-1 gap-3 p-5 md:grid-cols-2 lg:grid-cols-3 place-items-start lg:place-items-center lg:py-4 rounded-xl bg-custom_primary">
      <Logo />
      <Search />

      {children}
    </nav>
  );
};

export default NavBar;
