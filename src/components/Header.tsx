import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left side */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">T</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                TexaFlow Textile
              </h1>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">Premium Textile Solutions</p>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1.5 sm:p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
            <Link to="home" spy={true} smooth={true} duration={300} className="text-sm lg:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
              Home
            </Link>
            <Link to="features" spy={true} smooth={true} duration={300} className="text-sm lg:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
              Features
            </Link>
            <Link to="pricing" spy={true} smooth={true} duration={300} className="text-sm lg:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
              Pricing
            </Link>
            <Link to="easy-to-use" spy={true} smooth={true} duration={300} className="text-sm lg:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
              FAQ
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={300} className="text-sm lg:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
              Contact
            </Link>
          </nav>

          {/* Right side - Go To CRM button */}
          <div className="hidden md:flex items-center">
            <a href="https://app.texaflowtextile.com/auth/login">
              <Button variant="outline" className="text-sm lg:text-base border-blue-600 text-blue-600 hover:bg-blue-50">
                Go To CRM
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 sm:mt-4 pb-3 sm:pb-4">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              <Link 
                to="home" 
                spy={true} 
                smooth={true} 
                duration={300}
                className="text-sm sm:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="features" 
                spy={true} 
                smooth={true} 
                duration={300}
                className="text-sm sm:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="pricing" 
                spy={true} 
                smooth={true} 
                duration={300}
                className="text-sm sm:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="easy-to-use" 
                spy={true} 
                smooth={true} 
                duration={300}
                className="text-sm sm:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={300}
                className="text-sm sm:text-base text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="https://app.texaflowtextile.com/auth/login"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="outline" className="w-full text-sm sm:text-base border-blue-600 text-blue-600 hover:bg-blue-50">
                  Go To CRM
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
