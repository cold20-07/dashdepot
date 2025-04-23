
import { Outlet } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Layout;
