import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { BookingModalProps } from '../types/calcom';
import { generateCalLink } from '../lib/calcom';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  bookingType = 'quickchat',
  calLink,
  title,
  description
}) => {
  const finalCalLink = calLink || generateCalLink(bookingType);
  const modalTitle = title || `Book a ${bookingType.replace('-', ' ')}`;
  const modalDescription = description || 'Choose a time that works best for you and let\'s discuss your project.';

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
        
        <div className="relative flex-1 min-h-[600px] p-4">
          <iframe
            src={finalCalLink}
            width="100%"
            height="600"
            frameBorder="0"
            title="Cal.com booking"
            className="rounded-lg"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};
