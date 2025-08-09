import { CalcomConfig, BookingType } from '../types/calcom';

// Get environment variables with fallbacks
const getEnvVar = (key: string, fallback: string = ''): string => {
  return import.meta.env[key] || fallback;
};

// Cal.com configuration
export const calcomConfig: CalcomConfig = {
  username: getEnvVar('VITE_CALCOM_USERNAME', 'your-calcom-username'),
  namespace: getEnvVar('VITE_CALCOM_NAMESPACE', ''),
  theme: (getEnvVar('VITE_CALCOM_THEME', 'light') as 'light' | 'dark' | 'auto'),
};

// Event type mapping
export const eventTypeMap: Record<BookingType, string> = {
  consultation: getEnvVar('VITE_CALCOM_CONSULTATION_EVENT', 'consultation'),
  'project-discussion': getEnvVar('VITE_CALCOM_PROJECT_EVENT', 'project-discussion'),
  general: '15min', // Default fallback
};

// Generate Cal.com link
export const generateCalLink = (bookingType: BookingType = 'consultation'): string => {
  const { username, namespace } = calcomConfig;
  const eventType = eventTypeMap[bookingType];
  
  if (!username || username === 'your-calcom-username') {
    console.warn('Cal.com username not configured. Please set VITE_CALCOM_USERNAME in your .env file.');
    return '#';
  }

  const baseUrl = namespace ? `https://${namespace}.cal.com` : 'https://cal.com';
  return `${baseUrl}/${username}/${eventType}`;
};

// Cal.com embed script loader
export const loadCalcomScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    if (document.querySelector('script[src*="embed.js"]')) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://app.cal.com/embed/embed.js';
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Cal.com embed script'));
    
    document.head.appendChild(script);
  });
};

// Initialize Cal.com embed
export const initCalcomEmbed = async (elementSelector: string, calLink: string) => {
  try {
    await loadCalcomScript();
    
    // Wait for Cal global object to be available
    if (typeof window !== 'undefined' && (window as any).Cal) {
      const Cal = (window as any).Cal;
      Cal('init', { origin: 'https://app.cal.com' });
      Cal('inline', {
        elementOrSelector: elementSelector,
        calLink: calLink,
        layout: calcomConfig.theme === 'dark' ? 'month_view' : 'month_view'
      });
    }
  } catch (error) {
    console.error('Failed to initialize Cal.com embed:', error);
  }
};

// Open Cal.com popup
export const openCalcomPopup = async (calLink: string) => {
  try {
    await loadCalcomScript();
    
    if (typeof window !== 'undefined' && (window as any).Cal) {
      const Cal = (window as any).Cal;
      Cal('init', { origin: 'https://app.cal.com' });
      Cal('preload', { calLink });
      Cal('ui', {
        styles: {
          branding: {
            brandColor: '#000000'
          }
        },
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    }
  } catch (error) {
    console.error('Failed to open Cal.com popup:', error);
    // Fallback to direct link
    window.open(calLink, '_blank', 'noopener,noreferrer');
  }
};
