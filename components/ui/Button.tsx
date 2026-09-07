// components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'secondary' | 'mint' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className = '',
  disabled,
  ...props
}) => {
  // Standar tombol Rentify: rounded-lg (8px), font-medium, padding rapi
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 min-h-[34px]',
    md: 'text-sm px-4.5 py-2.5 gap-2 min-h-[40px]',
    lg: 'text-sm sm:text-base px-6 py-3 gap-2.5 min-h-[46px] font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-primary hover:bg-primary-hover text-foreground-inverse active:bg-primary-active shadow-xs',
    outline:
      'bg-white hover:bg-surface text-foreground border border-border active:bg-surface-hover',
    secondary:
      'bg-surface hover:bg-surface-hover text-foreground border border-transparent active:bg-border',
    mint:
      'bg-surface-mint hover:bg-[#dcece3] text-primary border border-transparent font-semibold active:scale-[0.99]',
    dark:
      'bg-surface-dark hover:bg-black text-white active:scale-[0.99]',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
