import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

const CodeBlock = ({ code, language = "javascript", showLineNumbers = false }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightCode = (text: string) => {
    // Keywords in bold black
    const keywords = ['class', 'constructor', 'method', 'return', 'private', 'field', 'extends', 'is', 'this', 'new'];
    let highlighted = text;

    // Apply syntax highlighting
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
      highlighted = highlighted.replace(regex, '<span class="font-bold text-[hsl(var(--code-keyword))]">$1</span>');
    });

    // Class names in red/brown (capitalized words)
    highlighted = highlighted.replace(/\b([A-Z][a-zA-Z0-9]*)\b/g, '<span class="text-[hsl(var(--code-class))] font-medium">$1</span>');

    // Comments in green
    highlighted = highlighted.replace(/(\/\/[^\n]*)/g, '<span class="text-[hsl(var(--code-comment))] italic">$1</span>');

    return highlighted;
  };

  const lines = code.split('\n');

  return (
    <div className="relative group rounded-lg overflow-hidden bg-code-bg my-6 shadow-md border border-border/50">
      <div className="absolute top-3 right-3 z-10">
        <Button
          variant="secondary"
          size="sm"
          onClick={handleCopy}
          className="opacity-0 group-hover:opacity-100 transition-opacity gap-2 bg-background/80 hover:bg-background"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copiado!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copiar
            </>
          )}
        </Button>
      </div>
      <div className="overflow-x-auto p-6">
        <pre className="!m-0 !bg-transparent font-mono text-sm leading-relaxed">
          {lines.map((line, index) => (
            <div key={index} className="min-h-[1.5rem]">
              <code 
                className="text-code-text"
                dangerouslySetInnerHTML={{ __html: highlightCode(line) }}
              />
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
