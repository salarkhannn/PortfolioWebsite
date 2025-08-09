import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { BookingModalProps } from '../types/calcom';
import { generateCalLink, initCalcomEmbed } from '../lib/calcom';
import { Button } from './ui/button';
import { X, ExternalLink, Loader2 } from 'lucide-react';

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  bookingType = 'consultation',
  calLink,
  title,
  description
}) => {
  const embedRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const finalCalLink = calLink || generateCalLink(bookingType);
  const modalTitle = title || `Book a ${bookingType.replace('-', ' ')}`;
  const modalDescription = description || 'Choose a time that works best for you and let\'s discuss your project.';

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isOpen && embedRef.current) {
      setIsLoading(true);
      setHasError(false);
      
      // Clear previous embed content
      embedRef.current.innerHTML = '';
      
      // Add a unique ID for this embed instance
      const embedId = `cal-embed-${Date.now()}`;
      embedRef.current.id = embedId;

      // Initialize embed with error handling
      const initEmbed = async () => {
        try {
          await initCalcomEmbed(`#${embedId}`, finalCalLink);
          
          // Set a timeout to hide loading state
          timeoutId = setTimeout(() => {
            setIsLoading(false);
          }, 3000);
          
          // Check if embed loaded successfully
          const checkEmbed = setInterval(() => {
            if (embedRef.current && embedRef.current.children.length > 0) {
              setIsLoading(false);
              clearInterval(checkEmbed);
            }
          }, 1000);
          
          // Clear check after 10 seconds
          setTimeout(() => clearInterval(checkEmbed), 10000);
          
        } catch (error) {
          console.error('Failed to initialize Cal.com embed:', error);
          setIsLoading(false);
          setHasError(true);
        }
      };

      initEmbed();
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isOpen, finalCalLink]);

  const handleExternalLink = () => {
    window.open(finalCalLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl font-semibold text-gray-900">
                {modalTitle}
              </DialogTitle>
              <p className="text-sm text-gray-600 mt-1">
                {modalDescription}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleExternalLink}
                className="text-gray-500 hover:text-gray-700"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Open in new tab
              </Button>
            </div>
          </div>
        </DialogHeader>
        
        <div className="relative flex-1 min-h-[600px]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <div className="text-center">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">Loading booking calendar...</p>
                <p className="text-sm text-gray-400 mt-2">
                  This may take a few moments
                </p>
              </div>
            </div>
          )}
          
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
              <div className="text-center max-w-md mx-auto p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Unable to load booking calendar
                </h3>
                <p className="text-gray-600 mb-4">
                  We're having trouble loading the booking widget. You can still book directly through Cal.com.
                </p>
                <Button onClick={handleExternalLink} className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Book on Cal.com
                </Button>
              </div>
            </div>
          )}
          
          <div
            ref={embedRef}
            className="w-full h-full min-h-[600px]"
            style={{
              background: 'transparent',
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
