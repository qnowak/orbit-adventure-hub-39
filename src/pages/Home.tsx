import Hero from "@/components/Hero";
import MissionCard from "@/components/MissionCard";
import { Button } from "@/components/ui/button";
import dragonOrbit from "@/assets/dragon-orbit.jpg";
import issMission from "@/assets/iss-mission.jpg";

const Home = () => {
  const featuredMissions = [
    {
      title: "Dragon Orbital Experience",
      description: "A 3-day orbital journey aboard the Dragon capsule with stunning views of Earth and space. Experience weightlessness and see our planet from a new perspective.",
      price: "$450,000",
      duration: "3 days",
      altitude: "400km",
      image: dragonOrbit,
      availability: "available" as const,
      isSpecial: true
    },
    {
      title: "ISS Docking Mission", 
      description: "Join a week-long mission to the International Space Station. Participate in scientific experiments and live alongside professional astronauts.",
      price: "$2,500,000",
      duration: "7 days", 
      altitude: "408km",
      image: issMission,
      availability: "limited" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Hero />
      
      {/* Featured Missions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Missions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our carefully curated space tourism experiences, 
              each designed to provide you with the adventure of a lifetime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {featuredMissions.map((mission, index) => (
              <MissionCard key={index} {...mission} />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-stellar text-white shadow-stellar hover:shadow-stellar/80 px-8 py-6 text-lg"
            >
              View All Missions
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose SpaceX Section */}
      <section className="py-20 px-4 bg-cosmic-medium/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose SpaceX Tourism?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Proven Technology</h3>
              <p className="text-muted-foreground">
                Experience space travel with the same technology that delivers astronauts to the ISS. 
                Our Falcon 9 and Dragon systems have completed hundreds of successful missions.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Unmatched Safety</h3>
              <p className="text-muted-foreground">
                Safety is our top priority. Every spacecraft undergoes rigorous testing, 
                and our crew goes through extensive training to ensure your journey is secure.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Unforgettable Experience</h3>
              <p className="text-muted-foreground">
                From launch to landing, every moment is designed to create memories that will last a lifetime. 
                See Earth from space and experience the wonder of weightlessness.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready for Launch?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join the exclusive group of space tourists who have experienced the ultimate adventure. 
            Book your mission today and take the first step toward the stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-stellar text-white shadow-stellar hover:shadow-stellar/80 px-8 py-6 text-lg"
            >
              Book Your Mission
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-muted px-8 py-6 text-lg"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;