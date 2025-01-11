import { Link } from "react-router-dom";
import { Menu, Search, User } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-display text-white">
              Innovate BlackRock
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/dashboard" className="text-white/80 hover:text-white transition-colors">
                Dashboard
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-white">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/80 hover:text-white">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-white/80 hover:text-white">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};