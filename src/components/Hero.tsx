import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/adapter-hero.png";

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("intencao");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-semibold text-primary">Padrão de Design Estrutural</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent leading-tight">
            Adaptador
          </h1>
          
          <p className="text-lg font-medium text-foreground/70 mb-4">
            Daniel Dewes e Cesario Stoquero
          </p>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Permite que objetos com interfaces incompatíveis colaborem
          </p>
          
          <p className="text-sm text-muted-foreground/80 mb-12">
            Também conhecido como: <span className="font-semibold">Wrapper</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={scrollToContent}
              className="gap-2 bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all"
            >
              Explorar Padrão
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a href="/Adapter1.pdf" download>
                Baixar PDF
              </a>
            </Button>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full"></div>
            <img
              src={heroImage}
              alt="Ilustração do padrão Adapter mostrando adaptador de tomada"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
