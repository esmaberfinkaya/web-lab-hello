import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

export default function Input({
  label,
  type = 'text',
  error,
  helpText,
  id,
  className = '',
  disabled,
  ...props
}: InputProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-pure-black dark:text-pure-white"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        disabled={disabled}
        className={`w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 dark:bg-pure-black dark:text-pure-white
          ${
            error
              ? 'border-error focus:ring-error'
              : 'border-muted-gray focus:ring-fuchsia-main focus:border-fuchsia-main dark:border-fuchsia-dark'
          }
          ${
            disabled
              ? 'bg-icy-pink opacity-70 cursor-not-allowed dark:bg-muted-gray'
              : 'bg-pure-white'
          }`}
        aria-describedby={
          error ? `${id}-error` : helpText ? `${id}-help` : undefined
        }
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-error dark:text-red-400">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={`${id}-help`} className="text-sm text-muted-gray dark:text-icy-pink">
          {helpText}
        </p>
      )}
    </div>
  );
}
