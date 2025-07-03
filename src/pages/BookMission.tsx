import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import dragonOrbit from "@/assets/dragon-orbit.jpg";
import issMission from "@/assets/iss-mission.jpg";

type BookingStep = "mission" | "dates" | "passengers" | "payment" | "confirmation";

const BookMission = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>("mission");
  const [selectedMission, setSelectedMission] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedClass, setSelectedClass] = useState("");
  const [passengers, setPassengers] = useState(1);

  const missions = [
    {
      id: "dragon-orbital",
      title: "Dragon Orbital Experience",
      description: "A 3-day orbital journey aboard the Dragon capsule with stunning views of Earth and space.",
      price: 450000,
      duration: "3 days",
      altitude: "400km",
      image: dragonOrbit,
      classes: [
        { name: "Standard Orbit", price: 450000, description: "Classic orbital experience with premium amenities" },
        { name: "Premium View", price: 650000, description: "Enhanced viewing windows and luxury accommodations" }
      ]
    },
    {
      id: "iss-mission",
      title: "ISS Docking Mission", 
      description: "Join a week-long mission to the International Space Station.",
      price: 2500000,
      duration: "7 days", 
      altitude: "408km",
      image: issMission,
      classes: [
        { name: "Research Participant", price: 2500000, description: "Participate in scientific experiments" },
        { name: "VIP Mission Commander", price: 3500000, description: "Enhanced role with mission planning access" }
      ]
    }
  ];

  const steps = [
    { id: "mission", title: "Select Mission", completed: false },
    { id: "dates", title: "Choose Dates", completed: false },
    { id: "passengers", title: "Passenger Details", completed: false },
    { id: "payment", title: "Payment", completed: false },
    { id: "confirmation", title: "Confirmation", completed: false }
  ];

  const getCurrentStepIndex = () => steps.findIndex(step => step.id === currentStep);

  const nextStep = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id as BookingStep);
    }
  };

  const prevStep = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id as BookingStep);
    }
  };

  const getTotalPrice = () => {
    if (!selectedMission || !selectedClass) return 0;
    const missionClass = selectedMission.classes.find((c: any) => c.name === selectedClass);
    return missionClass ? missionClass.price * passengers : 0;
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => {
        const isActive = step.id === currentStep;
        const isCompleted = index < getCurrentStepIndex();
        
        return (
          <div key={step.id} className="flex items-center">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold",
              isActive && "bg-primary text-primary-foreground",
              isCompleted && "bg-green-600 text-white",
              !isActive && !isCompleted && "bg-muted text-muted-foreground"
            )}>
              {isCompleted ? "✓" : index + 1}
            </div>
            <div className="ml-2 mr-4">
              <div className={cn(
                "text-sm font-medium",
                isActive && "text-primary",
                isCompleted && "text-green-600",
                !isActive && !isCompleted && "text-muted-foreground"
              )}>
                {step.title}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={cn(
                "w-12 h-0.5 mx-4",
                isCompleted ? "bg-green-600" : "bg-muted"
              )} />
            )}
          </div>
        );
      })}
    </div>
  );

  const renderMissionSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Mission</h2>
        <p className="text-muted-foreground">Select the space tourism experience that's right for you</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {missions.map((mission) => (
          <Card 
            key={mission.id}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:shadow-stellar",
              selectedMission?.id === mission.id && "ring-2 ring-primary bg-primary/5"
            )}
            onClick={() => setSelectedMission(mission)}
          >
            <img src={mission.image} alt={mission.title} className="w-full h-48 object-cover rounded-t-lg" />
            <CardHeader>
              <CardTitle className="text-xl">{mission.title}</CardTitle>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{mission.duration}</span>
                <span>{mission.altitude} altitude</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{mission.description}</p>
              <div className="text-2xl font-bold text-primary">
                From ${mission.price.toLocaleString()}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedMission && (
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Select Class</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedMission.classes.map((missionClass: any) => (
              <div
                key={missionClass.name}
                className={cn(
                  "p-4 rounded-lg border cursor-pointer transition-all",
                  selectedClass === missionClass.name ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                )}
                onClick={() => setSelectedClass(missionClass.name)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{missionClass.name}</h4>
                    <p className="text-sm text-muted-foreground">{missionClass.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">${missionClass.price.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">per person</div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderDateSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Launch Date</h2>
        <p className="text-muted-foreground">Select your preferred departure date and number of passengers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Available Launch Dates</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < new Date()}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Mission Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="passengers">Number of Passengers</Label>
              <Select value={passengers.toString()} onValueChange={(value) => setPassengers(parseInt(value))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Passenger</SelectItem>
                  <SelectItem value="2">2 Passengers</SelectItem>
                  <SelectItem value="3">3 Passengers</SelectItem>
                  <SelectItem value="4">4 Passengers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedDate && (
              <div className="space-y-3 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold">Booking Summary</h4>
                <div className="space-y-1 text-sm">
                  <div>Mission: {selectedMission?.title}</div>
                  <div>Class: {selectedClass}</div>
                  <div>Launch Date: {format(selectedDate, "PPP")}</div>
                  <div>Passengers: {passengers}</div>
                  <Separator className="my-2" />
                  <div className="font-bold">Total: ${getTotalPrice().toLocaleString()}</div>
                </div>
              </div>
            )}

            <div className="text-sm text-muted-foreground">
              <p>• All dates subject to weather and launch conditions</p>
              <p>• Backup launch dates automatically scheduled</p>
              <p>• Training begins 30 days before launch</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderPassengerDetails = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Passenger Information</h2>
        <p className="text-muted-foreground">Please provide details for all passengers</p>
      </div>

      {Array.from({ length: passengers }, (_, index) => (
        <Card key={index} className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Passenger {index + 1}</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`firstName-${index}`}>First Name</Label>
              <Input id={`firstName-${index}`} placeholder="Enter first name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`lastName-${index}`}>Last Name</Label>
              <Input id={`lastName-${index}`} placeholder="Enter last name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`email-${index}`}>Email</Label>
              <Input id={`email-${index}`} type="email" placeholder="Enter email address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`phone-${index}`}>Phone</Label>
              <Input id={`phone-${index}`} placeholder="Enter phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`birthDate-${index}`}>Date of Birth</Label>
              <Input id={`birthDate-${index}`} type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`weight-${index}`}>Weight (kg)</Label>
              <Input id={`weight-${index}`} type="number" placeholder="Required for mission planning" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor={`medical-${index}`}>Medical Conditions</Label>
              <Input id={`medical-${index}`} placeholder="Any relevant medical information" />
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
        <CardContent className="pt-6">
          <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Important Requirements</h4>
          <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• All passengers must be 18+ years old</li>
            <li>• Medical clearance required 60 days before launch</li>
            <li>• Physical fitness assessment mandatory</li>
            <li>• Passport required for international launch sites</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );

  const renderPayment = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Payment Information</h2>
        <p className="text-muted-foreground">Secure payment processing with multiple options</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted">
                <input type="radio" name="payment" value="card" className="text-primary" defaultChecked />
                <div>
                  <div className="font-medium">Credit Card</div>
                  <div className="text-sm text-muted-foreground">Visa, Mastercard, Amex</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted">
                <input type="radio" name="payment" value="ach" className="text-primary" />
                <div>
                  <div className="font-medium">Bank Transfer (ACH)</div>
                  <div className="text-sm text-muted-foreground">Direct from your bank account</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted">
                <input type="radio" name="payment" value="financing" className="text-primary" />
                <div>
                  <div className="font-medium">Financing Options</div>
                  <div className="text-sm text-muted-foreground">Monthly payment plans available</div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input id="expiryDate" placeholder="MM/YY" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" placeholder="Full name" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Mission</span>
                <span>{selectedMission?.title}</span>
              </div>
              <div className="flex justify-between">
                <span>Class</span>
                <span>{selectedClass}</span>
              </div>
              <div className="flex justify-between">
                <span>Launch Date</span>
                <span>{selectedDate ? format(selectedDate, "MMM dd, yyyy") : "Not selected"}</span>
              </div>
              <div className="flex justify-between">
                <span>Passengers</span>
                <span>{passengers}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${getTotalPrice().toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-2 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-200">Payment Protection</h4>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Full refund if mission cancelled by SpaceX</li>
                <li>• 50% refund up to 30 days before launch</li>
                <li>• Payment held in escrow until training begins</li>
                <li>• Comprehensive insurance included</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="space-y-6 text-center">
      <div className="space-y-4">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
          <div className="text-3xl">🚀</div>
        </div>
        <h2 className="text-3xl font-bold text-foreground">Mission Booked Successfully!</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Congratulations! Your space tourism mission has been confirmed. 
          You'll receive a confirmation email with your e-ticket and detailed pre-flight instructions.
        </p>
      </div>

      <Card className="bg-card/80 backdrop-blur-sm max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Booking Confirmation</CardTitle>
          <Badge className="w-fit mx-auto">Booking #ST-2024-001337</Badge>
        </CardHeader>
        <CardContent className="space-y-4 text-left">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Mission:</span>
              <span>{selectedMission?.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Class:</span>
              <span>{selectedClass}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Launch Date:</span>
              <span>{selectedDate ? format(selectedDate, "EEEE, MMMM dd, yyyy") : "TBD"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Passengers:</span>
              <span>{passengers}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Total Paid:</span>
              <span className="font-bold">${getTotalPrice().toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">What happens next?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Card className="text-center p-4">
            <div className="text-2xl mb-2">📧</div>
            <h4 className="font-semibold mb-2">Confirmation Email</h4>
            <p className="text-sm text-muted-foreground">Check your inbox for detailed mission information and e-ticket</p>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl mb-2">🏃‍♂️</div>
            <h4 className="font-semibold mb-2">Training Program</h4>
            <p className="text-sm text-muted-foreground">Your training schedule will begin 30 days before launch</p>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl mb-2">🚀</div>
            <h4 className="font-semibold mb-2">Launch Day</h4>
            <p className="text-sm text-muted-foreground">Experience the adventure of a lifetime!</p>
          </Card>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <Button variant="outline" asChild>
          <Link to="/">Return Home</Link>
        </Button>
        <Button>Download E-Ticket</Button>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "mission":
        return renderMissionSelection();
      case "dates":
        return renderDateSelection();
      case "passengers":
        return renderPassengerDetails();
      case "payment":
        return renderPayment();
      case "confirmation":
        return renderConfirmation();
      default:
        return renderMissionSelection();
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case "mission":
        return selectedMission && selectedClass;
      case "dates":
        return selectedDate && passengers > 0;
      case "passengers":
        return true; // Would validate form fields in real app
      case "payment":
        return true; // Would validate payment details in real app
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-6xl mx-auto">
          {renderStepIndicator()}
          {renderCurrentStep()}

          {currentStep !== "confirmation" && (
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === "mission"}
              >
                Previous
              </Button>
              <Button 
                onClick={nextStep}
                disabled={!canProceed()}
                className="bg-gradient-stellar text-white shadow-stellar"
              >
                {currentStep === "payment" ? "Complete Booking" : "Continue"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookMission;