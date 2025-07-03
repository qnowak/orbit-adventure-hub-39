import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/trips", label: "Missions" },
    { path: "/deals", label: "Deals" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            SpaceX Tourism
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-foreground hover:text-primary transition-colors relative",
                  "after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5",
                  "after:bg-primary after:transition-all after:duration-300",
                  "hover:after:w-full",
                  isActive(item.path) && "text-primary after:w-full"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="default" size="sm" className="bg-gradient-stellar text-white shadow-stellar" asChild>
              <Link to="/book-mission">Book Mission</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={cn(
                "block w-5 h-0.5 bg-foreground transition-all duration-300",
                isMenuOpen && "rotate-45 translate-y-1"
              )} />
              <span className={cn(
                "block w-5 h-0.5 bg-foreground mt-1 transition-all duration-300",
                isMenuOpen && "opacity-0"
              )} />
              <span className={cn(
                "block w-5 h-0.5 bg-foreground mt-1 transition-all duration-300",
                isMenuOpen && "-rotate-45 -translate-y-1"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "block text-foreground hover:text-primary transition-colors",
                  isActive(item.path) && "text-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button variant="default" size="sm" className="bg-gradient-stellar text-white" asChild>
                <Link to="/book-mission">Book Mission</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;