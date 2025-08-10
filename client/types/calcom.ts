// Cal.com integration types
export interface CalcomConfig {
  username: string;
  eventType?: string;
  namespace?: string;
  theme?: 'light' | 'dark' | 'auto';
  hideEventTypeDetails?: boolean;
  layout?: 'month_view' | 'week_view';
}

export interface CalcomEmbedOptions {
  elementOrSelector: string | HTMLElement;
  calLink: string;
  config?: {
    name?: string;
    email?: string;
    notes?: string;
    guests?: string[];
    theme?: 'light' | 'dark' | 'auto';
    hideEventTypeDetails?: boolean;
    layout?: 'month_view' | 'week_view';
  };
}

export type BookingType = 'consultation' | 'project-discussion' | 'general';

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingType?: BookingType;
  calLink?: string;
  title?: string;
  description?: string;
}

export interface BookingButtonProps {
  bookingType?: BookingType;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  calLink?: string;
}
