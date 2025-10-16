import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre o Padrão Adapter</h3>
            <p className="text-sm text-muted-foreground">
              O padrão Adapter é um dos padrões de design estruturais fundamentais, 
              permitindo que interfaces incompatíveis trabalhem juntas.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://refactoring.guru/design-patterns/adapter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Refactoring Guru - Adapter
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://sourcemaking.com/design_patterns/adapter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  SourceMaking - Adapter
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Padrões Relacionados</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Bridge</li>
              <li>Decorator</li>
              <li>Proxy</li>
              <li>Facade</li>
              <li>Strategy</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Padrão Adapter. Conteúdo baseado em material de referência sobre Design Patterns.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
