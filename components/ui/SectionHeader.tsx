// components/ui/SectionHeader.tsx
import React from 'react';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`space-y-3 mb-12 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      {label && (
        <span
          className={`block text-[11px] font-mono uppercase tracking-[0.2em] font-semibold ${
            isDark ? 'text-accent' : 'text-foreground-muted'
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-semibold tracking-tight leading-tight ${
          isDark ? 'text-foreground-inverse' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-foreground-inverse-muted' : 'text-foreground-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
