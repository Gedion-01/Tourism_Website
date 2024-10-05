import { Link, useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation();
  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-yellow-400"
      : "hover:text-yellow-400 transition duration-300";
  };
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Visit Ethiopia</h3>
            <p>Discover the beauty, history, and culture of Ethiopia.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className={getLinkClass("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={getLinkClass("/about")}>
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className={getLinkClass("/destinations")}>
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <p className="hover:text-yellow-400 transition duration-300">
                Facebook
              </p>
              <p className="hover:text-yellow-400 transition duration-300">
                Instagram
              </p>
              <p className="hover:text-yellow-400 transition duration-300">X</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Visit Ethiopia. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
