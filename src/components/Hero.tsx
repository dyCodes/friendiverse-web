
import { Button } from "@/components/ui/button";
import { Apple, Play, Users, Heart, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Friendiverse
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect, share, and explore with friends in a universe designed just for you. 
            Your social experience, reimagined.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white">
            <Users className="w-5 h-5 text-purple-400" />
            <span>Connect with Friends</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white">
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <span>Share Moments</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white">
            <Heart className="w-5 h-5 text-pink-400" />
            <span>Express Yourself</span>
          </div>
        </div>

        {/* Download buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
          <Button className="bg-black text-white hover:bg-gray-800 rounded-xl px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl">
            <Apple className="w-6 h-6 mr-3" />
            Download for iOS
          </Button>
          <Button className="bg-green-600 text-white hover:bg-green-700 rounded-xl px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl">
            <Play className="w-6 h-6 mr-3" />
            Get it on Google Play
          </Button>
        </div>

        {/* Mock phone preview */}
        <div className="relative mx-auto max-w-sm animate-fade-in">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-[3rem] p-2 shadow-2xl">
            <div className="bg-black rounded-[2.5rem] p-4">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-[2rem] h-96 flex items-center justify-center">
                <div className="text-white text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 text-white/80" />
                  <h3 className="text-2xl font-bold mb-2">Friendiverse</h3>
                  <p className="text-white/80">Your social universe awaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
