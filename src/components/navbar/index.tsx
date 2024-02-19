import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full py-[20px] h-28 border-b border-grey-600 flex justify-center bg-white z-10 shadow-sm">
      <div className=" max-w-[1440px] md:flex md:flex-row md:items-center w-[95%] md:justify-between">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="App Logo" className="h-16 inline" />
          </a>
          {isMenuOpen ? (
            <IoMdClose
              className="text-5xl mx-2 md:hidden block cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <IoMdMenu
              className="text-5xl mx-2 md:hidden block cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        <ul
          className={`flex flex-col md:flex-row gap-10 ml-0 pb-10 md:gap-8 z-[-1] md:z-auto md:static absolute bg-white w-full md:w-auto left-0 py-4 md:py-0 md:pl-0 pl-9 md:opacity-100 transition-all ease-in duration-500 md:shadow-none shadow-md ${
            isMenuOpen
              ? "opacity-100 top-24"
              : "opacity-0 md:opacity-100 top-full md:top-0"
          }`}
        >
          <li>
            <a
              href="#offers"
              className="text-gray-900 text-lg hover:text-dark-blue duration-300"
            >
            Our Offers
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-900 text-lg hover:text-dark-blue duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-900 text-lg hover:text-dark-blue duration-300"
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
