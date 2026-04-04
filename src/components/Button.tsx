import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const base = `inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`;

  const variants = {
    primary: `bg-fuchsia-main text-pure-white hover:bg-fuchsia-dark focus:ring-fuchsia-main dark:bg-fuchsia-dark dark:hover:bg-fuchsia-main`,
    secondary: `bg-icy-pink text-fuchsia-dark hover:bg-fuchsia-main hover:text-pure-white focus:ring-icy-pink dark:bg-pure-white dark:text-pure-black dark:hover:bg-icy-pink`,
    danger: `bg-error text-pure-white hover:bg-red-700 focus:ring-error dark:bg-red-500 dark:hover:bg-red-400`,
    ghost: `bg-transparent text-pure-black hover:bg-icy-pink focus:ring-fuchsia-main dark:text-pure-white dark:hover:bg-pure-black dark:hover:text-fuchsia-main border border-transparent dark:border-pure-white dark:hover:border-fuchsia-main`,
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${props.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
