type NavBurgerProps = {
  toggleDrawer: () => void;
};

const NavBurger = ({ toggleDrawer }: NavBurgerProps) => {
  return (
    <>
      <nav className="zindex-max block bg-white shadow">
        <div className="fixed top-10 right-6 burger" onClick={toggleDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 bg-gray-200 duration-200 p-1.5 bg-gray-100 hover:bg-gray-200 h-12 w-12 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.620"
              d="M4 6h16M4 12h8m-8 6h16"
            ></path>
          </svg>
        </div>
      </nav>
    </>
  );
};

export default NavBurger;
