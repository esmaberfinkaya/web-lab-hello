import React from 'react';

export interface CardProps {
  title?: string;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled';
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  title,
  children,
  image,
  imageAlt,
  footer,
  variant = 'elevated',
  className = '',
}: CardProps) {
  const variants = {
    elevated: `bg-pure-white dark:bg-pure-black shadow-lg hover:shadow-xl dark:shadow-fuchsia-main/20`,
    outlined: `bg-pure-white dark:bg-pure-black border-2 border-icy-pink dark:border-fuchsia-dark`,
    filled: `bg-icy-pink dark:bg-pure-black border border-pure-white dark:border-pure-black`,
  };

  return (
    <div className={`rounded-xl overflow-hidden transition-shadow ${variants[variant]} ${className}`}>
      {image && (
        <img
          src={image}
          alt={imageAlt || ''}
          className="w-full h-48 object-cover border-b-2 border-icy-pink dark:border-fuchsia-dark"
        />
      )}
      <div className="p-5">
        {title && (
          <h3 className="text-lg font-semibold text-pure-black dark:text-pure-white mb-2">
            {title}
          </h3>
        )}
        <div className="text-pure-black dark:text-icy-pink leading-relaxed">
          {children}
        </div>
      </div>
      {footer && (
        <div className="px-5 py-3 bg-icy-pink dark:bg-fuchsia-dark/20 border-t border-pure-white dark:border-fuchsia-dark">
          {footer}
        </div>
      )}
    </div>
  );
}
