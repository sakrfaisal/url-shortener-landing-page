import { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="container px-5 flex items-center pt-10 mx-auto bg-white text-custom-grayish-violet relative z-40">
      <a href="#" className="text-3xl font-bold text-custom-dark-violet mr-8">
        Shortly
      </a>
      <button
        className="ml-auto relative w-8 h-5 flex flex-col justify-between items-center sm:hidden group"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        aria-expanded={isOpen}
        aria-controls="main-nav">
        <span
          className={`block h-1/6 w-full bg-custom-gray transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-1/6 w-full bg-custom-gray transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-1/6 w-full bg-custom-gray transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>
      <nav
        id="main-nav"
        className={`
          ${isOpen ? "flex" : "hidden"}
          flex-col items-center gap-8 bg-custom-dark-violet absolute left-5 right-5 top-24 p-8 rounded-lg text-center py-8 text-lg text-white duration-200 z-50
          sm:flex sm:flex-row sm:items-center sm:gap-8 sm:w-full sm:justify-center sm:bg-white sm:static sm:p-0 sm:rounded-none sm:text-sm sm:text-custom-gray sm:z-auto
        `}
        aria-hidden={!isOpen && window.innerWidth < 640}>
        <ul className="flex flex-col sm:flex-row gap-4 font-medium">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        {isOpen && window.innerWidth < 640 && <hr className="h-[1px] text-gray-600 w-full" />}
        <ul className="flex flex-col sm:flex-row items-center gap-4 font-medium sm:ml-auto">
          <li>Login</li>
          <li className="special">
            <a
              href="#"
              className="relative overflow-hidden w-fit px-5 py-2 rounded-full bg-custom-cyan text-white transition duration-300 group">
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition duration-300 pointer-events-none"></span>
              <span className="relative z-10">Sign up</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
