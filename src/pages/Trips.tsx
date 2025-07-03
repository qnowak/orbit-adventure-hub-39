import { useState } from "react";
import Navigation from "@/components/Navigation";
import MissionCard from "@/components/MissionCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import dragonOrbit from "@/assets/dragon-orbit.jpg";
import issMission from "@/assets/iss-mission.jpg";

const Trips = () => {
  const [sortBy, setSortBy] = useState("price-low");
  const [filterDuration, setFilterDuration] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const missions = [
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
    },
    {
      title: "Lunar Flyby Mission",
      description: "An extended 10-day mission that takes you around the Moon and back. Experience deep space travel and see the far side of the Moon.",
      price: "$5,000,000",
      duration: "10 days",
      altitude: "384,400km",
      image: dragonOrbit,
      availability: "available" as const
    },
    {
      title: "Suborbital Flight",
      description: "A quick 90-minute suborbital experience reaching the edge of space. Perfect for first-time space tourists.",
      price: "$250,000",
      duration: "90 minutes",
      altitude: "100km",
      image: issMission,
      availability: "available" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Space Tourism Missions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our range of space tourism experiences, from quick suborbital flights 
            to extended missions to the International Space Station.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Search Missions
              </label>
              <Input 
                placeholder="Search missions..." 
                className="bg-background/50 border-border"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Duration
              </label>
              <Select value={filterDuration} onValueChange={setFilterDuration}>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="short">Under 1 day</SelectItem>
                  <SelectItem value="medium">1-7 days</SelectItem>
                  <SelectItem value="long">7+ days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Price Range
              </label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under $500k</SelectItem>
                  <SelectItem value="medium">$500k - $2M</SelectItem>
                  <SelectItem value="high">$2M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Sort By
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-background/50 border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {missions.map((mission, index) => (
            <MissionCard key={index} {...mission} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-muted px-8 py-4"
          >
            Load More Missions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Trips;