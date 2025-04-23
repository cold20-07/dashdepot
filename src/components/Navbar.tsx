
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-brand-teal">DashDepot</span>
        </Link>

        <div className="hidden md:flex max-w-md w-full mx-8">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search for shops or products..."
              className="w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/shops">
            <Button>Browse Shops</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
