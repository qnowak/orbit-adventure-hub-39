import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-rocket-launch.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          willChange: 'transform'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-deep/60 via-transparent to-cosmic-deep/80" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
          Journey to the
          <span className="block bg-gradient-stellar bg-clip-text text-transparent">
            Stars
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-up">
          Experience the ultimate adventure with SpaceX. Join us on a voyage beyond Earth's atmosphere 
          and witness the cosmos like never before.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            size="lg" 
            className="bg-gradient-stellar text-white shadow-stellar hover:shadow-stellar/80 px-8 py-6 text-lg font-semibold animate-stellar-glow"
            asChild
          >
            <Link to="/book-mission">Book Your Mission</Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
            asChild
          >
            <Link to="/trips">Explore Missions</Link>
          </Button>
        </div>
        
        {/* Mission Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-gray-300">Successful Missions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">400km</div>
            <div className="text-gray-300">Max Altitude</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-300">Safety Record</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;