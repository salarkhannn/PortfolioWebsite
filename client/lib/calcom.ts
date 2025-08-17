import { CalcomConfig, BookingType } from '../types/calcom';

const getEnvVar = (key: string, fallback = ''): string => {
  return import.meta.env[key] || fallback;
};

export const calcomConfig: CalcomConfig = {
  username: getEnvVar('VITE_CALCOM_USERNAME'),
  theme: (getEnvVar('VITE_CALCOM_THEME', 'light') as 'light' | 'dark' | 'auto'),
};

export const eventTypeMap: Record<BookingType, string> = {
  quickchat: getEnvVar('VITE_CALCOM_QUICK_CHAT_EVENT', 'quick-chat'),
};

export const generateCalLink = (bookingType: BookingType = 'quickchat'): string => {
  const { username } = calcomConfig;
  const eventType = eventTypeMap[bookingType] || 'quick-chat';

  if (!username) {
    console.warn('Cal.com username not configured. Please set VITE_CALCOM_USERNAME in your .env file.');
    return 'https://cal.com/cal/quick-chat';
  }

  return `https://cal.com/${username}/${eventType}`;
};
