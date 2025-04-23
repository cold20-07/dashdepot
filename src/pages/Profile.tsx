
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

// Mock order history data
const orderHistory = [
  {
    id: "ORD-5678",
    date: "Apr 22, 2025",
    shop: "Fresh Market",
    total: 32.47,
    status: "Delivered"
  },
  {
    id: "ORD-5511",
    date: "Apr 18, 2025",
    shop: "TechZone",
    total: 89.99,
    status: "Delivered"
  },
  {
    id: "ORD-5422",
    date: "Apr 10, 2025",
    shop: "Corner Convenience",
    total: 15.24,
    status: "Delivered"
  },
];

// Mock address data
const addresses = [
  {
    id: 1,
    type: "Home",
    address: "123 Main St, Apt 4B",
    city: "New York",
    state: "NY",
    zip: "10001",
    default: true
  },
  {
    id: 2,
    type: "Work",
    address: "456 Office Blvd, Suite 100",
    city: "New York",
    state: "NY",
    zip: "10002",
    default: false
  }
];

// Mock payment methods
const paymentMethods = [
  {
    id: 1,
    type: "Credit Card",
    cardType: "Visa",
    last4: "4242",
    expiry: "09/26",
    default: true
  },
  {
    id: 2,
    type: "Credit Card",
    cardType: "Mastercard",
    last4: "8888",
    expiry: "12/25",
    default: false
  }
];

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567"
  });

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
  };

  const handleSaveAddress = () => {
    toast.success("Address saved successfully!");
  };

  const handleSavePayment = () => {
    toast.success("Payment method saved successfully!");
  };

  const handleLogout = () => {
    toast.info("Logged out successfully");
    // In a real app, this would clear the session
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <Tabs defaultValue="profile">
        <TabsList className="mb-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="addresses">Addresses</TabsTrigger>
          <TabsTrigger value="payments">Payment Methods</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
              <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    value={user.name} 
                    onChange={(e) => setUser({...user, name: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={user.email} 
                    onChange={(e) => setUser({...user, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    value={user.phone} 
                    onChange={(e) => setUser({...user, phone: e.target.value})}
                  />
                </div>
                <div className="pt-4">
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
              
              <Separator className="my-8" />
              
              <div>
                <h2 className="text-xl font-semibold mb-6">Account Actions</h2>
                <Button variant="destructive" onClick={handleLogout}>
                  Log Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Orders Tab */}
        <TabsContent value="orders">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Order History</h2>
              
              <div className="space-y-4">
                {orderHistory.length > 0 ? (
                  orderHistory.map((order) => (
                    <div key={order.id} className="border rounded-md p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Order #{order.id}</p>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${order.total.toFixed(2)}</p>
                          <p className="text-sm text-green-600">{order.status}</p>
                        </div>
                      </div>
                      <p className="text-sm mt-2">{order.shop}</p>
                      <Button variant="outline" className="mt-4 text-sm" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">You haven't placed any orders yet.</p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Addresses Tab */}
        <TabsContent value="addresses">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Saved Addresses</h2>
                <Button>Add New Address</Button>
              </div>
              
              <div className="space-y-4">
                {addresses.map((address) => (
                  <div key={address.id} className="border rounded-md p-4">
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{address.type}</p>
                          {address.default && (
                            <span className="bg-brand-teal/10 text-brand-teal text-xs rounded px-2 py-0.5">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-sm mt-1">{address.address}</p>
                        <p className="text-sm">{address.city}, {address.state} {address.zip}</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Button variant="ghost" size="sm">Edit</Button>
                        {!address.default && (
                          <Button variant="ghost" size="sm">Set as Default</Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Methods Tab */}
        <TabsContent value="payments">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Payment Methods</h2>
                <Button>Add New Payment</Button>
              </div>
              
              <div className="space-y-4">
                {paymentMethods.map((payment) => (
                  <div key={payment.id} className="border rounded-md p-4">
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{payment.cardType} •••• {payment.last4}</p>
                          {payment.default && (
                            <span className="bg-brand-teal/10 text-brand-teal text-xs rounded px-2 py-0.5">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-sm mt-1">Expires {payment.expiry}</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Button variant="ghost" size="sm">Remove</Button>
                        {!payment.default && (
                          <Button variant="ghost" size="sm">Set as Default</Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
