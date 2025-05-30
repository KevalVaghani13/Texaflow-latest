import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#10172a] text-white pt-8 md:pt-12 pb-4 md:pb-6 px-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl md:text-2xl">T</span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">TexaFlow Textile</h3>
              <p className="text-gray-400 text-xs md:text-sm font-medium">Premium Textile Solutions</p>
            </div>
          </div>
          
          <p className="text-gray-300 text-sm md:text-base max-w-2xl px-4 md:px-0">
            Specialized business management solutions for the textile industry.
          </p>

          <Separator className="w-full max-w-md bg-gray-700" />

          <div className="flex flex-col items-center space-y-3 md:space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="hidden md:inline">•</span>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
            
            <div className="flex flex-col items-center space-y-2 text-xs md:text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                <span>Business Email: support@texaflowtextile.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                <span>Technical Support: support@texaflowtextile.com</span>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-xs md:text-sm">
            © 2025 TexaFlow Textile Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
