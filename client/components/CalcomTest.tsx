import React, { useState } from 'react';
import { BookingButton } from './BookingButton';
import { BookingModal } from './BookingModal';
import { generateCalLink } from '../lib/calcom';
import { BookingType } from '../types/calcom';

export const CalcomTest: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBookingType, setSelectedBookingType] = useState<BookingType>('consultation');

  const bookingTypes: BookingType[] = ['consultation', 'project-discussion', 'general'];

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center mb-8">Cal.com Integration Test</h1>
      
      {/* Configuration Status */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Configuration Status</h2>
        <div className="space-y-2">
          <p><strong>Username:</strong> {import.meta.env.VITE_CALCOM_USERNAME || 'Not configured'}</p>
          <p><strong>Consultation Event:</strong> {import.meta.env.VITE_CALCOM_CONSULTATION_EVENT || 'consultation'}</p>
          <p><strong>Project Event:</strong> {import.meta.env.VITE_CALCOM_PROJECT_EVENT || 'project-discussion'}</p>
          <p><strong>Theme:</strong> {import.meta.env.VITE_CALCOM_THEME || 'light'}</p>
        </div>
      </div>

      {/* Generated Links */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Generated Cal.com Links</h2>
        <div className="space-y-2">
          {bookingTypes.map((type) => (
            <div key={type} className="flex justify-between items-center">
              <span className="font-medium">{type}:</span>
              <a 
                href={generateCalLink(type)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                {generateCalLink(type)}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Button Tests */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Button Variants</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Primary Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <BookingButton bookingType="consultation" variant="primary" size="sm">
                Small Consultation
              </BookingButton>
              <BookingButton bookingType="consultation" variant="primary" size="md">
                Medium Consultation
              </BookingButton>
              <BookingButton bookingType="consultation" variant="primary" size="lg">
                Large Consultation
              </BookingButton>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Secondary Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <BookingButton bookingType="project-discussion" variant="secondary" size="sm">
                Project Discussion
              </BookingButton>
              <BookingButton bookingType="project-discussion" variant="secondary" size="md">
                Project Discussion
              </BookingButton>
              <BookingButton bookingType="project-discussion" variant="secondary" size="lg">
                Project Discussion
              </BookingButton>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="font-medium mb-2 text-white">Ghost Buttons (on dark background)</h3>
            <div className="flex flex-wrap gap-4">
              <BookingButton bookingType="general" variant="ghost" size="sm">
                <span className="text-white">Quick Call</span>
              </BookingButton>
              <BookingButton bookingType="general" variant="ghost" size="md">
                <span className="text-white">Quick Call</span>
              </BookingButton>
              <BookingButton bookingType="general" variant="ghost" size="lg">
                <span className="text-white">Quick Call</span>
              </BookingButton>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Modal Test */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Manual Modal Test</h2>
        <div className="flex flex-wrap gap-4">
          <select 
            value={selectedBookingType} 
            onChange={(e) => setSelectedBookingType(e.target.value as BookingType)}
            className="border rounded px-3 py-2"
          >
            {bookingTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Open Modal
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-yellow-800">Setup Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-yellow-700">
          <li>Update your <code>.env</code> file with your Cal.com username</li>
          <li>Create event types in Cal.com matching your configuration</li>
          <li>Test each button to ensure the modal opens correctly</li>
          <li>Verify the external links work by clicking them above</li>
          <li>Test the actual booking flow end-to-end</li>
        </ol>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookingType={selectedBookingType}
        title={`Test ${selectedBookingType} booking`}
        description="This is a test of the booking modal functionality."
      />
    </div>
  );
};
