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
  // Base button styles with the expanding background effect
  const buttonBase = cn(
    'group relative inline-flex items-center justify-center gap-2.5',
    'text-base font-bold py-1.5 pr-1.5 pl-8 text-center rounded-full overflow-hidden whitespace-nowrap z-[2]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ',
    // Pseudo-element for expanding background
    'before:content-[""] before:absolute before:w-[42px] before:h-[calc(100%-12px)]',
    'before:right-1.5 before:top-1.5 before:-z-10 before:rounded-full',
    'before:transition-all before:duration-300 before:ease-in-out',
    'hover:before:w-[calc(100%-12px)]',
    // Variant-specific styles
    variant === 'primary' && [
      'bg-primary',
      'before:bg-white',
      'focus-visible:ring-red-200',
    ],
    variant === 'outline' && [
      'bg-transparent border-2 border-primary',
      'before:bg-primary',
      'focus-visible:ring-primary',
    ],
    variant === 'dark' && [
      'bg-neutral-900',
      'before:bg-neutral-900/60',
      'focus-visible:ring-neutral-900/50',
    ],
    className
  );

  // Text with slide-up animation
  const textStyles = `relative overflow-hidden `;
  const textInner = cn(
    'flex leading-relaxed transition-transform duration-400 ease-in-out',
    'group-hover:-translate-y-[30px] ',
    `${variant === 'primary' ? 'text-white' : 'text-primary'}`
  );

  // Icon container with rotation animation
  const iconContainer = cn(
    'relative inline-flex justify-center items-center',
    'text-[22px] leading-none w-[42px] h-[42px]',
    'overflow-hidden rounded-full z-10'
  );

  const iconWrapper = cn(
    'transition-transform duration-300 ease-in-out',
    'rotate-0 group-hover:rotate-45',
    `${variant === 'primary' ? 'text-primary' : 'text-white'}`
  );

  const content = (
    <>
      <span className={textStyles}>
        <span
          className={textInner}
          style={{ textShadow: variant === 'primary' ? '0 30px 0 var(--primary) ' : '0 30px 0 #fff ' }}
        >
          {children}
        </span>
      </span>
      <span className={iconContainer}>
        <span className={iconWrapper}>
          {icon}
        </span>
      </span>
    </>
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