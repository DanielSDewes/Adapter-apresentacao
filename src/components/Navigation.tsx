import { useState, useEffect } from "react";
import { Menu, X, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onSearchClick: () => void;
}

const Navigation = ({ onSearchClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: "intencao", label: "Intenção" },
    { id: "problema", label: "Problema" },
    { id: "solucao", label: "Solução" },
    { id: "analogia", label: "Analogia" },
    { id: "estrutura", label: "Estrutura" },
    { id: "pseudocodigo", label: "Pseudocódigo" },
    { id: "aplicabilidade", label: "Aplicabilidade" },
    { id: "implementacao", label: "Como Implementar" },
    { id: "pros-contras", label: "Prós e Contras" },
    { id: "relacoes", label: "Relações" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Adaptador
              </h1>
              <p className="text-xs text-muted-foreground">Daniel Dewes e Cesario Stoquero</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onSearchClick}
              className="gap-2"
            >
              <Search className="h-4 w-4" />
              Buscar
            </Button>
            <Button
              variant="default"
              size="sm"
              asChild
              className="gap-2"
            >
              <a href="/Adapter1.pdf" download>
                <Download className="h-4 w-4" />
                PDF
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
              >
                {section.label}
              </button>
            ))}
            <div className="pt-2 space-y-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onSearchClick}
                className="w-full gap-2"
              >
                <Search className="h-4 w-4" />
                Buscar
              </Button>
              <Button
                variant="default"
                size="sm"
                asChild
                className="w-full gap-2"
              >
                <a href="/Adapter1.pdf" download>
                  <Download className="h-4 w-4" />
                  Baixar PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
