"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background/80 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
              <span className="text-xl font-bold text-foreground">Rongon Studio</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
           
            <a href="#courses" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Course We Offer
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              About Us
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Contact
            </a>
          </nav>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <Button className="hidden sm:inline-flex" >Sign In</Button>
            {/* <Button className="hidden sm:inline-flex">Get Started</Button> */}
            
            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <Button onClick={toggleMenu} variant="ghost" size="icon">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
           
            <a href="#courses" className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
              Course We Offer
            </a>
            <a href="#about" className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
              About Us
            </a>
            <a href="#contact" className="text-base font-medium text-muted-foreground transition-colors hover:text-primary">
              Contact
            </a>
            <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button variant="secondary">Sign In</Button>
                {/* <Button>Get Started</Button> */}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
