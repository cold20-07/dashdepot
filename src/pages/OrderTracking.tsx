
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const OrderTracking = () => {
  const { orderId } = useParams<{ orderId: string }>();
  
  // In a real app, you would fetch the order status from a backend
  // For now, we'll use mock data
  const orderStatus = {
    status: "In Progress",
    estimatedDelivery: "2:45 PM",
    driver: {
      name: "Michael Johnson",
      phone: "(555) 123-4567",
    },
    location: {
      latitude: 40.7128,
      longitude: -74.0060,
    },
    timeline: [
      { time: "2:15 PM", status: "Order Placed", completed: true },
      { time: "2:20 PM", status: "Order Confirmed", completed: true },
      { time: "2:25 PM", status: "Preparing Your Order", completed: true },
      { time: "2:35 PM", status: "Order Picked Up", completed: false },
      { time: "2:45 PM", status: "Order Delivered", completed: false },
    ],
    items: [
      { name: "Organic Bananas", quantity: 1, price: 1.99 },
      { name: "Avocado", quantity: 2, price: 2.49 },
      { name: "Whole Milk", quantity: 1, price: 3.99 },
    ],
    subtotal: 8.97,
    deliveryFee: 2.99,
    tax: 0.72,
    total: 12.68,
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Track Order</h1>
        <div className="text-right">
          <p className="text-sm text-gray-600">Order #{orderId}</p>
          <p className="text-brand-teal font-medium">
            {orderStatus.status}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* Map for Delivery Tracking */}
          <Card>
            <CardContent className="p-6">
              <div className="aspect-video bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                <p className="text-gray-600">Map view would appear here in a real app</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">Estimated delivery</p>
                  <p className="font-medium">{orderStatus.estimatedDelivery}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Your delivery driver</p>
                  <p className="font-medium">{orderStatus.driver.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Timeline */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Delivery Status</h2>
              <div className="space-y-4">
                {orderStatus.timeline.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 relative">
                      <div className={`w-6 h-6 rounded-full ${step.completed ? 'bg-brand-teal' : 'bg-gray-200'} flex items-center justify-center`}>
                        {step.completed && (
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      {index < orderStatus.timeline.length - 1 && (
                        <div className={`h-full w-0.5 absolute top-6 left-3 -ml-px ${orderStatus.timeline[index + 1].completed ? 'bg-brand-teal' : 'bg-gray-200'}`} />
                      )}
                    </div>
                    <div className="flex-grow pb-6">
                      <p className="font-medium">{step.status}</p>
                      <p className="text-sm text-gray-600">{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          {/* Order Summary */}
          <Card className="sticky top-6">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <div className="space-y-3">
                {orderStatus.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.quantity}x {item.name}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${orderStatus.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>${orderStatus.deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${orderStatus.tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${orderStatus.total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
