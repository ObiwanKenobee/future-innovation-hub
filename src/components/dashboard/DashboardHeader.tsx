import { Search, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export const DashboardHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-primary border-b border-white/10 z-50">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-display font-bold">
            Innovate BlackRock
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm hover:text-accent transition-colors">
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-sm hover:text-accent transition-colors"
            >
              Dashboard
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-64 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search innovations..."
              className="pl-10"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Settings className="mr-2 w-4 h-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User className="mr-2 w-4 h-4" />
                Profile
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};