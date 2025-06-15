
import { Users, Heart, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background decorative elements with reduced opacity for better contrast */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
                  Friendiverse
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                Connect, share, and explore with friends in a universe designed just for you. 
                Your social experience, reimagined.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12 animate-fade-in">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white">
                <Users className="w-5 h-5 text-primary" />
                <span>Connect with Friends</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span>Share Moments</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white">
                <Heart className="w-5 h-5 text-primary" />
                <span>Express Yourself</span>
              </div>
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in">
              <button className="transition-all duration-300 hover:scale-105 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900">
                <img 
                  src="/lovable-uploads/2f9fbb7a-b9d2-4b54-ade8-3d754f04e87d.png" 
                  alt="Download on the App Store" 
                  className="h-14 w-auto"
                />
              </button>
              <button className="transition-all duration-300 hover:scale-105 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900">
                <img 
                  src="/lovable-uploads/b63f8935-a055-4d99-a898-a4de453ff09c.png" 
                  alt="Get it on Google Play" 
                  className="h-14 w-auto"
                />
              </button>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative mx-auto max-w-sm lg:max-w-md animate-fade-in">
            <div className="bg-gradient-to-br from-primary to-yellow-400 rounded-[3rem] p-2 shadow-2xl">
              <div className="bg-black rounded-[2.5rem] p-1">
                <img 
                  src="/lovable-uploads/6dda6f8d-f53f-407d-b91f-25bfb8e46d9b.png" 
                  alt="Friendiverse App Preview" 
                  className="w-full h-auto rounded-[2rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
