import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import LogoFB2 from "../assets/LogoFB2.svg";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isReadyForAnimation, setIsReadyForAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 10);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReadyForAnimation(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const textClass = darkMode ? "text-white" : "text-gray-900";
  const linkHoverClass = darkMode ? "hover:text-blue-400" : "hover:text-blue-700";
  const hamburgerColorClass = darkMode ? "bg-white" : "bg-gray-900";

  const handleHashLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };


  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50
        ${textClass} p-2 md:px-4 lg:px-6
        transition-all duration-500 ease-in-out
        ${isReadyForAnimation ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
        ${(isScrolling || isMenuOpen)
            ? (darkMode ? "bg-gray-900/50 backdrop-blur-md shadow-md" : "bg-white/50 backdrop-blur-md shadow-md")
            : (darkMode ? "bg-transparent shadow-none backdrop-blur-none" : "bg-transparent shadow-none backdrop-blur-none")
        }
      `}
    >
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link to="#home" onClick={(e) => { e.preventDefault(); handleHashLinkClick('home'); }} className="flex items-center space-x-2 hover:scale-105 transform transition duration-300">
          <img src={LogoFB2} alt="Logo Facebook" className="h-6 md:h-8" />
          <span className="text-xl md:text-2xl font-bold">facebook</span>
        </Link>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-base font-semibold">
          <Link to="#whats-happening" onClick={(e) => { e.preventDefault(); handleHashLinkClick('whats-happening'); }} className={`transition transform hover:scale-105 ${linkHoverClass}`}>
            About
          </Link>
          <Link to="#features" onClick={(e) => { e.preventDefault(); handleHashLinkClick('features'); }} className={`transition transform hover:scale-105 ${linkHoverClass}`}>
            Features
          </Link>
          <Link to="#developers" onClick={(e) => { e.preventDefault(); handleHashLinkClick('developers'); }} className={`transition transform hover:scale-105 ${linkHoverClass}`}>
            Developers
          </Link>

          <button
            onClick={toggleDarkMode}
            className={`ml-4 lg:ml-6 p-1.5 rounded-full border-2 transition-colors duration-300 flex items-center justify-center
              ${darkMode ? "border-none bg-gray-800" : "border-gray-900 bg-white"}
              hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.95-.464l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 1.414zm-2.12-7.07l-.707-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 100-2H9a1 1 0 100 2h1zm6.464-1.464l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 011.414-1.414zm-12.028 0l-.707-.707a1 1 0 10-1.414 1.414l.707.707a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen((o) => !o)}>
          <div className={`w-6 h-0.5 ${hamburgerColorClass} mb-1 transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-6 h-0.5 ${hamburgerColorClass} mb-1 transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 ${hamburgerColorClass} transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden mt-2 transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        {[
          { label: "About", id: "whats-happening" },
          { label: "Features", id: "features" },
          { label: "Developers", id: "developers" },
        ].map((item) => {
          return (
            <a key={item.label} href={`#${item.id}`} onClick={(e) => { e.preventDefault(); handleHashLinkClick(item.id); }} className={`block py-2 text-center text-lg font-semibold transition transform hover:scale-105 ${linkHoverClass} ${textClass}`}>
              {item.label}
            </a>
          );
        })}
        <button
          onClick={() => {
            toggleDarkMode();
            setIsMenuOpen(false);
          }}
          className={`block w-full py-3 mt-4 rounded-md border-2 transition-colors duration-300 flex items-center justify-center space-x-2 text-lg font-semibold
            ${darkMode ? "border-none bg-gray-800 text-white" : "border-2 border-gray-900 bg-white text-gray-900"}
            hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.95-.464l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 1.414zm-2.12-7.07l-.707-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 100-2H9a1 1 0 100 2h1zm6.464-1.464l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 011.414-1.414zm-12.028 0l-.707-.707a1 1 0 10-1.414 1.414l.707.707a1 1 0 001.414-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </nav>
  );
}