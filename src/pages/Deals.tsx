import Navigation from "@/components/Navigation";
import MissionCard from "@/components/MissionCard";
import CountdownTimer from "@/components/CountdownTimer";
import { Badge } from "@/components/ui/badge";
import dragonOrbit from "@/assets/dragon-orbit.jpg";
import issMission from "@/assets/iss-mission.jpg";

const Deals = () => {
  const specialOffers = [
    {
      title: "Early Bird Dragon Orbital",
      description: "Book your Dragon Orbital Experience 6 months in advance and save $50,000. Limited time offer for the ultimate space adventure.",
      price: "$400,000",
      duration: "3 days",
      altitude: "400km",
      image: dragonOrbit,
      availability: "available" as const,
      isSpecial: true
    },
    {
      title: "Student Astronaut Program",
      description: "Special pricing for university students pursuing STEM degrees. Includes educational components and mentorship opportunities.",
      price: "$200,000",
      duration: "90 minutes",
      altitude: "100km",
      image: issMission,
      availability: "limited" as const,
      isSpecial: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-gradient-stellar text-white shadow-stellar mb-4 text-lg px-4 py-2">
            ⚡ Limited Time Offers
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Special Space Deals
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take advantage of exclusive pricing on our most popular space tourism experiences. 
            These limited-time offers won't last long!
          </p>
        </div>

        {/* Flash Sale Banner */}
        <div className="mb-12 p-8 bg-gradient-stellar rounded-lg text-center animate-stellar-glow">
          <h2 className="text-3xl font-bold text-white mb-4">🚀 Flash Sale Active!</h2>
          <p className="text-xl text-white/90 mb-4">
            Save up to $100,000 on select missions - Ends in 72 hours!
          </p>
          <CountdownTimer initialHours={72} />
        </div>

        {/* Special Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {specialOffers.map((offer, index) => (
            <MissionCard key={index} {...offer} />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 p-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Why Book Our Deals?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Best Value</h3>
              <p className="text-muted-foreground">
                Exclusive pricing you won't find anywhere else
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Priority Booking</h3>
              <p className="text-muted-foreground">
                Skip the waitlist with our special offer reservations
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Flexible Terms</h3>
              <p className="text-muted-foreground">
                Special cancellation and rescheduling policies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;