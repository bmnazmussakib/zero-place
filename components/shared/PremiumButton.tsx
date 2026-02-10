import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'dark';
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

const PremiumButton = ({
  children,
  variant = 'primary',
  icon = <ArrowUpRight className="w-5 h-5" />,
  className,
  href,
  ...props
}: PremiumButtonProps) => {
  // Icon circle container styles
  const iconContainer = cn(
    'flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300',
    variant === 'primary' && 'bg-white/20 text-white group-hover:bg-white/30',
    variant === 'outline' && 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white',
    variant === 'dark' && 'bg-white/10 text-white group-hover:bg-white/20'
  );

  const content = (
    <span className="flex items-center w-full pointer-events-none">
      <span className="font-heading font-bold tracking-tight pr-4 flex-1">
        {children}
      </span>

      <div className={iconContainer}>
        <div className="transition-transform duration-400 group-hover:rotate-45 group-hover:translate-x-0.5">
          {icon}
        </div>
      </div>
    </span>
  );

  const buttonBase = cn(
    'group relative inline-flex items-center rounded-full',
    'py-2.5 pl-7 pr-2.5',                    // ← consistent inner padding
    'font-heading font-bold transition-colors duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2',
    variant === 'primary' && 'bg-primary text-white hover:bg-primary/90',
    variant === 'outline' && 'border-2 border-primary text-primary hover:bg-primary/5 hover:text-primary',
    variant === 'dark' && 'bg-neutral-900 text-white hover:bg-neutral-800',
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonBase} {...(props as any)}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={buttonBase} {...props}>
      {content}
    </button>
  );
};

export default PremiumButton;