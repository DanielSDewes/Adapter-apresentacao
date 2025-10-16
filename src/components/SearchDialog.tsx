import { useState } from "react";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");

  const searchContent = (searchQuery: string) => {
    if (!searchQuery) return;
    
    const content = document.body.innerText.toLowerCase();
    const index = content.indexOf(searchQuery.toLowerCase());
    
    if (index !== -1) {
      // Find elements that contain the search query
      const allElements = document.querySelectorAll("p, h1, h2, h3, h4, li, code");
      for (const element of allElements) {
        if (element.textContent?.toLowerCase().includes(searchQuery.toLowerCase())) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          // Highlight the element temporarily
          element.classList.add("bg-accent/20");
          setTimeout(() => {
            element.classList.remove("bg-accent/20");
          }, 2000);
          break;
        }
      }
      onOpenChange(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchContent(query);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Buscar no conteúdo</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Digite sua busca..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Pressione Enter para buscar
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
