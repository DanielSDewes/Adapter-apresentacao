import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-16 scroll-mt-20 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
