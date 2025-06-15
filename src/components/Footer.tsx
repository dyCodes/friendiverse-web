
import { Facebook, Twitter, Instagram, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-black mb-4">
              <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
                Friendiverse
              </span>
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Connect, share, and explore with friends in a universe designed just for you. 
              Your social experience, reimagined.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-black font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-black font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2024 Friendiverse. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="mailto:hello@friendiverse.com" className="flex items-center text-gray-600 hover:text-black transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              hello@friendiverse.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
