
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">DashDepot</h3>
            <p className="text-gray-600">
              Fast delivery from your favorite local shops right to your doorstep.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-brand-teal">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shops" className="text-gray-600 hover:text-brand-teal">
                  Browse Shops
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-600 hover:text-brand-teal">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600">
              Email: support@dashdepot.com
              <br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} DashDepot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
