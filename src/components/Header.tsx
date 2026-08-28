import React from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'timetable', label: 'Timetable' },
    { id: 'events', label: 'Events' },
    { id: 'tribute', label: 'Tribute' },
    { id: 'placements', label: 'Placements' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'notes', label: 'Notes' },
    { id: 'calendar', label: 'Calendar' },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKkcE1UXJr53o92asmcE6uaSVPTwbjPRPXw&s"/>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-700 text-white'
                    : 'text-blue-200 hover:text-white hover:bg-blue-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-blue-700">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 rounded-md transition-colors duration-200 text-left ${
                    activeSection === item.id
                      ? 'bg-blue-700 text-white'
                      : 'text-blue-200 hover:text-white hover:bg-blue-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;