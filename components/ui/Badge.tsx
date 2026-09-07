// components/ui/Badge.tsx
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'available' | 'neutral' | 'mint';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
}) => {
  if (variant === 'available') {
    return (
      <span className={`inline-flex items-center gap-1.5 text-xs font-medium text-foreground-muted ${className}`}>
        <span className="w-2 h-2 rounded-full bg-success inline-block shrink-0" />
        <span>{children}</span>
      </span>
    );
  }

  const variantStyles = {
    primary: 'bg-primary-subtle text-primary border-transparent font-semibold',
    neutral: 'text-foreground-subtle uppercase text-[11px] font-semibold tracking-wider',
    mint: 'bg-surface-mint text-primary font-semibold',
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-sm ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
