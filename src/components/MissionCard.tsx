import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MissionCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  altitude: string;
  availability: "available" | "limited" | "sold-out";
  isSpecial?: boolean;
}

const MissionCard = ({ 
  title, 
  description, 
  price, 
  duration, 
  image, 
  altitude, 
  availability,
  isSpecial = false 
}: MissionCardProps) => {
  const getAvailabilityBadge = () => {
    switch (availability) {
      case "available":
        return <Badge className="bg-green-600">Available</Badge>;
      case "limited":
        return <Badge className="bg-yellow-600">Limited Seats</Badge>;
      case "sold-out":
        return <Badge variant="destructive">Sold Out</Badge>;
    }
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-stellar hover:scale-[1.02] bg-card/80 backdrop-blur-sm border-border/50">
      {isSpecial && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-stellar text-white shadow-stellar">
            Special Deal
          </Badge>
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          {getAvailabilityBadge()}
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{duration}</span>
          <span>{altitude} altitude</span>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          {price}
        </div>
        <Button 
          variant="default" 
          className="bg-gradient-stellar text-white shadow-stellar hover:shadow-stellar/80"
          disabled={availability === "sold-out"}
        >
          {availability === "sold-out" ? "Sold Out" : "Book Now"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MissionCard;