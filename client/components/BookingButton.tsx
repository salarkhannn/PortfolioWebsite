import React, { useState } from 'react';
import { BookingButtonProps } from '../types/calcom';
import { generateCalLink, openCalcomPopup } from '../lib/calcom';
import { BookingModal } from './BookingModal';
import { cn } from '../lib/utils';

export const BookingButton: React.FC<BookingButtonProps> = ({
  bookingType = 'consultation',
  variant = 'primary',
  size = 'md',
  className,
  style,
  children,
  calLink
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const finalCalLink = calLink || generateCalLink(bookingType);

  const handleClick = () => {
    // For better UX, we'll use the modal approach
    setIsModalOpen(true);
    
    // Alternative: Use popup approach
    // openCalcomPopup(finalCalLink);
  };

  const baseClasses = "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-black text-white hover:bg-gray-800 focus:ring-gray-500",
    secondary: "bg-white text-black border border-gray-200 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "bg-transparent text-current hover:bg-white/10 focus:ring-white/20"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <>
      <button
        onClick={handleClick}
        style={style}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
      >
        {children}
      </button>
      
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookingType={bookingType}
        calLink={finalCalLink}
      />
    </>
  );
};
