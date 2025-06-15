
import { Smartphone } from "lucide-react";

const AppScreenshots = () => {
  const screenshots = [
    {
      title: "Home Feed",
      description: "Stay updated with your friends' latest posts and activities"
    },
    {
      title: "Chat Interface",
      description: "Seamless messaging experience with rich media support"
    },
    {
      title: "Profile Page",
      description: "Personalize your profile and showcase your personality"
    },
    {
      title: "Discover",
      description: "Find new friends and communities based on your interests"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Friendiverse
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a peek at our beautiful, intuitive interface designed for the modern social experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot.title}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-[2rem] p-3 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <div className="bg-black rounded-[1.5rem] p-4">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-[1rem] h-64 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Smartphone className="w-12 h-12 mx-auto mb-3 text-white/80" />
                      <h4 className="font-bold text-sm mb-1">{screenshot.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">{screenshot.title}</h3>
                <p className="text-gray-300 text-sm">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;
