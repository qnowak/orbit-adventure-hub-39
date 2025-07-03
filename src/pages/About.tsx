import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const teamMembers = [
    {
      name: "Elon Musk",
      role: "CEO & Chief Engineer", 
      bio: "Visionary leader driving the future of space exploration and making life multiplanetary."
    },
    {
      name: "Gwynne Shotwell",
      role: "President & COO",
      bio: "Leading SpaceX operations and ensuring the highest standards of safety and reliability."
    },
    {
      name: "Tom Mueller",
      role: "VP of Propulsion",
      bio: "Rocket engine expert responsible for the powerful Merlin and Raptor engines."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About SpaceX Tourism
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We're making space accessible to everyone. Our mission is to enable human space exploration 
            and make life multiplanetary through revolutionary rocket technology and space tourism.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 bg-card/80 backdrop-blur-sm border-border/50 p-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To revolutionize space technology, with the ultimate goal of enabling people to live on other planets. 
            We believe that making space travel accessible to civilians is a crucial step in advancing human space exploration 
            and inspiring the next generation of space pioneers.
          </p>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Successful Launches</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Landings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">ISS Missions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99.5%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-stellar rounded-full mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold text-foreground">
                    {member.name}
                  </CardTitle>
                  <p className="text-primary font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety & Technology */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Safety First</h3>
            <p className="text-muted-foreground mb-4">
              Safety is our top priority. Every SpaceX vehicle undergoes rigorous testing and certification 
              processes to ensure the highest levels of safety for our crew and passengers.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Extensive ground testing programs</li>
              <li>• Multiple redundant safety systems</li>
              <li>• Continuous monitoring and improvement</li>
              <li>• NASA Commercial Crew certified</li>
            </ul>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Cutting-Edge Technology</h3>
            <p className="text-muted-foreground mb-4">
              Our revolutionary rocket technology makes space tourism economically viable and environmentally sustainable 
              through reusable launch systems.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Falcon 9 reusable rocket system</li>
              <li>• Dragon crew capsule with life support</li>
              <li>• Autonomous docking capabilities</li>
              <li>• Advanced heat shield technology</li>
            </ul>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-stellar p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join the Journey?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Be part of the next chapter in human space exploration. 
            Book your mission today and experience the wonder of space travel.
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
            Book Your Mission
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default About;