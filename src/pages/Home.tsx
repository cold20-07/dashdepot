
import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { categories, shops } from "@/services/mockData";

const Home = () => {
  const [location, setLocation] = useState("New York, NY");
  const [isLocating, setIsLocating] = useState(false);

  const handleLocateMe = () => {
    setIsLocating(true);
    setTimeout(() => {
      setLocation("Current Location");
      setIsLocating(false);
    }, 1500);
  };

  const featuredShops = shops.slice(0, 4);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-teal to-cyan-600 text-white rounded-xl overflow-hidden">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl font-bold">
              Instant Delivery From Your Favorite Local Shops
            </h1>
            <p className="text-lg opacity-90">
              Get products from nearby stores delivered to your doorstep in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <div className="relative flex-grow max-w-md">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                <Input 
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your address" 
                  className="pl-10 bg-white text-gray-800 w-full"
                />
              </div>
              <Button onClick={handleLocateMe} disabled={isLocating}>
                {isLocating ? "Locating..." : "Locate Me"}
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Grocery delivery" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link key={category.id} to={`/shops?category=${category.id}`}>
              <Card className="hover:border-brand-teal transition-colors">
                <CardContent className="flex flex-col items-center justify-center py-6">
                  <div className="w-16 h-16 rounded-full bg-brand-gray flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </div>
                  <span className="font-medium text-center">{category.name}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Shops Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Shops</h2>
          <Link to="/shops" className="text-brand-teal hover:underline">
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredShops.map((shop) => (
            <Link key={shop.id} to={`/shops/${shop.id}`}>
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-40 object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{shop.name}</h3>
                      <p className="text-sm text-gray-500">{shop.description}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {shop.rating} ★
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mt-3 text-gray-500">
                    <span>{shop.deliveryTime}</span>
                    <span>${shop.deliveryFee.toFixed(2)} delivery</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 -mx-4 px-4 py-12 rounded-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">How DashDepot Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-brand-teal text-white flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Find Local Shops</h3>
            <p className="text-gray-600">Browse shops near you and discover products from local retailers</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-brand-teal text-white flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Add to Cart</h3>
            <p className="text-gray-600">Select your items and customize your order</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-brand-teal text-white flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Get Quick Delivery</h3>
            <p className="text-gray-600">Track your order in real-time as it's delivered to your door</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
