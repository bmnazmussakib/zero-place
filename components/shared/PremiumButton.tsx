import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'dark';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

const PremiumButton = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon = <ArrowUpRight className={cn(
    size === 'small' ? "w-4 h-4" : size === 'large' ? "w-6 h-6" : "w-5 h-5"
  )} />,
  className,
  href,
  ...props
}: PremiumButtonProps) => {

  // define size-specific values
  const sizeStyles = {
    small: {
      button: 'text-sm py-1 pr-1 pl-6',
      iconContainer: 'w-[32px] h-[32px] text-[18px]',
      bgEffect: 'before:w-[32px] before:h-[calc(100%-8px)] before:right-1 before:top-1',
      hoverEffect: 'hover:before:w-[calc(100%-8px)]',
      translateY: 'group-hover:-translate-y-[24px]',
      textShadow: '0 24px 0',
    },
    medium: {
      button: 'text-base py-1.5 pr-1.5 pl-8',
      iconContainer: 'w-[42px] h-[42px] text-[22px]',
      bgEffect: 'before:w-[42px] before:h-[calc(100%-12px)] before:right-1.5 before:top-1.5',
      hoverEffect: 'hover:before:w-[calc(100%-12px)]',
      translateY: 'group-hover:-translate-y-[30px]', // Matches original
      textShadow: '0 30px 0',
    },
    large: {
      button: 'text-lg py-2.5 pr-2 pl-10',
      iconContainer: 'w-[52px] h-[52px] text-[26px]',
      bgEffect: 'before:w-[56px] before:h-[56px] before:right-2 before:top-2',
      hoverEffect: 'hover:before:w-[calc(100%-16px)]',
      translateY: 'group-hover:-translate-y-[36px]',
      textShadow: '0 36px 0',
    }
  };

  const currentSize = sizeStyles[size] || sizeStyles.medium;

  // Base button styles with the expanding background effect
  const buttonBase = cn(
    'group relative inline-flex items-center justify-between gap-2.5',
    'font-bold text-center rounded-full overflow-hidden whitespace-nowrap z-[2]',
    currentSize.button,
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ',
    // Pseudo-element for expanding background
    'before:content-[""] before:absolute',
    currentSize.bgEffect,
    'before:-z-10 before:rounded-full',
    'before:transition-all before:duration-300 before:ease-in-out',
    currentSize.hoverEffect,
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
  const textStyles = `relative overflow-hidden flex-1`;
  const textInner = cn(
    'flex leading-relaxed transition-transform duration-400 ease-in-out',
    currentSize.translateY,
    `${variant === 'primary' ? 'text-white' : 'text-primary'}`
  );

  // Icon container with rotation animation
  const iconContainer = cn(
    'relative inline-flex justify-center items-center',
    'leading-none',
    currentSize.iconContainer,
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
          style={{ textShadow: variant === 'primary' ? `${currentSize.textShadow} var(--primary)` : `${currentSize.textShadow} #fff` }}
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