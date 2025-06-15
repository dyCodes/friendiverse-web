
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-black">
              <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
                Friendiverse
              </span>
            </h3>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Use</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">Support</a>
          </div>
          
          {/* Social Media */}
          <div className="flex space-x-3">
            <a href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Friendiverse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
