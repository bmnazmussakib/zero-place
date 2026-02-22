import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'dark';
  size?: 'small' | 'medium' | 'large';
  bgColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
}

const PremiumButton = ({
  children,
  variant = 'primary',
  size = 'medium',
  bgColor,
  textColor,
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
      bgEffect: 'before:w-[48px] before:h-[48px] before:right-[3px] before:top-[3px]',
      hoverEffect: 'hover:before:w-[calc(100%-6px)]',
      translateY: 'group-hover:-translate-y-[30px]', // Matches original
      textShadow: '0 30px 0',
    },
    large: {
      button: 'text-lg py-2.5 pr-2 pl-10',
      iconContainer: 'w-[52px] h-[52px] text-[26px]',
      bgEffect: 'before:w-[64px] before:h-[64px] before:right-1 before:top-1',
      hoverEffect: 'hover:before:w-[calc(100%-8px)]',
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
    !bgColor && variant === 'primary' && [
      'bg-primary',
      'before:bg-white',
      'focus-visible:ring-red-200',
    ],
    !bgColor && variant === 'outline' && [
      'bg-transparent border-2 border-primary',
      'before:bg-primary',
      'focus-visible:ring-primary',
    ],
    !bgColor && variant === 'dark' && [
      'bg-neutral-900',
      'before:bg-white',
      'focus-visible:ring-neutral-900/50',
    ],
    // Force white background for custom colored buttons
    bgColor && [
      'before:bg-white',
      'focus-visible:ring-gray-200',
    ],
    className
  );

  // Text with slide-up animation
  const textStyles = `relative overflow-hidden flex-1`;
  const textInner = cn(
    'flex leading-relaxed transition-transform duration-400 ease-in-out',
    currentSize.translateY,
    !bgColor && `${variant === 'outline' ? 'text-primary' : 'text-white'}`
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
    !bgColor && `${variant === 'outline' ? 'text-white' : variant === 'dark' ? 'text-neutral-900' : 'text-primary'}`
  );

  // Determine shadow color for custom bg
  const shadowColor = bgColor || (
    variant === 'primary' ? 'var(--primary)' :
      variant === 'dark' ? '#171717' :
        '#fff'
  );

  const content = (
    <>
      <span className={textStyles}>
        <span
          className={textInner}
          style={{
            color: textColor || (bgColor ? '#fff' : undefined), // Initial text color
            textShadow: `${currentSize.textShadow} ${shadowColor}`
          }}
        >
          {children}
        </span>
      </span>
      <span className={iconContainer}>
        <span
          className={iconWrapper}
          style={{
            color: bgColor && !textColor ? '#000' : (textColor && !bgColor ? '#fff' : undefined) // Simple fallback for icon color logic in custom mode
          }}
        >
          {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<any>, {
            className: cn(
              (icon.props as any).className,
              bgColor ? '' : ''
            ),
            style: bgColor ? { color: bgColor } : {}
          }) : icon}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonBase}
        style={bgColor ? { backgroundColor: bgColor } : {}}
        {...(props as any)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={buttonBase}
      style={bgColor ? { backgroundColor: bgColor } : {}}
      {...props}
    >
      {content}
    </button>
  );
};

export default PremiumButton;