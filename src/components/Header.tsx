import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "contact", label: t.nav.contact },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-strong py-3 shadow-lg" : "py-5"
      )}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold gradient-text-animated focus-ring rounded-lg px-2 py-1 hover:scale-105 transition-transform duration-300"
          >
            Julieta
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    "hover:bg-muted focus-ring",
                    activeSection === item.id
                      ? "text-primary bg-muted"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className={cn(
                "p-2 rounded-lg transition-all duration-200",
                "hover:bg-muted focus-ring",
                "flex items-center gap-1.5"
              )}
              aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-lg transition-all duration-200",
                "hover:bg-muted focus-ring"
              )}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-lg transition-all duration-200",
                "hover:bg-muted focus-ring"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 glass rounded-xl animate-fade-in">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      "hover:bg-muted focus-ring",
                      activeSection === item.id
                        ? "text-primary bg-muted"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
