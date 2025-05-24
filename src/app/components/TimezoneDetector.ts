'use client';

interface TimezoneInfo {
  timezone: string;
  location: string;
}

export const TimezoneDetector = {
  detect: async (): Promise<TimezoneInfo> => {
    try {
      // Get timezone
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      // Get approximate location
      let location = '';
      const response = await fetch(`https://ipapi.co/json/`);
      const data = await response.json();
      
      if (data.city && data.country) {
        location = `${data.city}, ${data.country}`;
      } else {
        location = `Timezone: ${timezone}`;
      }
      
      return { timezone, location };
    } catch (error) {
      console.error('Detection failed:', error);
      return { timezone: 'UTC', location: 'Unknown location' };
    }
  }
}; 