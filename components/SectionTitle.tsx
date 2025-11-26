import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      {subtitle && (
        <p className="text-primary text-sm md:text-base font-semibold uppercase tracking-wider mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-purple-500 animate-gradient">
          {title}
        </span>
      </h2>
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="w-12 h-1 bg-gradient-to-r from-transparent to-primary rounded-full" />
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
        <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-purple-500 rounded-full" />
        <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
      </div>
    </div>
  );
};

export default SectionTitle;