const Main = ({ children, className }) => {
  return (
    <main
      className={`container flex flex-col flex-1 gap-5 mx-auto overflow-hidden md:flex-row ${className}`}
    >
      {children}
    </main>
  );
};

export default Main;
