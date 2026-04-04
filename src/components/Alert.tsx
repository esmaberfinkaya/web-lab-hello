import React from 'react';

export interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

export default function Alert({
  children,
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
  className = '',
}: AlertProps) {
  const variants = {
    info: `bg-icy-pink border-fuchsia-main text-fuchsia-dark dark:bg-fuchsia-dark/20 dark:text-icy-pink dark:border-fuchsia-main`,
    success: `bg-green-50 border-success text-green-800 dark:bg-green-950 dark:text-green-200 dark:border-green-600`,
    warning: `bg-yellow-50 border-yellow-500 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200 dark:border-yellow-600`,
    error: `bg-red-50 border-error text-red-800 dark:bg-red-950 dark:text-red-200 dark:border-red-600`,
  };

  return (
    <div
      role="alert"
      className={`border-l-4 rounded-r-lg p-4 ${variants[variant]} ${className}`}
    >
      <div className="flex justify-between items-start">
        <div>
          {title && <p className="font-bold mb-1">{title}</p>}
          <div className="text-sm">{children}</div>
        </div>
        {dismissible && (
          <button
            onClick={onDismiss}
            className="ml-4 opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-fuchsia-main rounded-sm"
            aria-label="Kapat"
          >
            &#10005;
          </button>
        )}
      </div>
    </div>
  );
}
