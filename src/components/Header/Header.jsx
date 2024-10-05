import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-yellow-400 font-bold"
      : "hover:text-yellow-400 transition duration-300 font-bold";
  };
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Visit Ethiopia
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link to="/about" className={getLinkClass("/about")}>
              About
            </Link>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-90 flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col space-y-6 text-2xl">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={getLinkClass("/")}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={getLinkClass("/about")}
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
