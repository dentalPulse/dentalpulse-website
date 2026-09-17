import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'md' | 'lg';
};

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors rounded-full whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  
  const variants = {
    primary: 'bg-brand-primary text-black hover:bg-[#00df83]',
    ghost: 'bg-transparent text-foreground hover:bg-black/5',
    outline: 'border-2 border-brand-primary text-foreground hover:bg-brand-primary/10',
  };

  const sizes = {
    md: 'h-11 px-6 text-[16px]',
    lg: 'h-14 px-8 text-[18px]',
  };

  return (
    <button 
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
