'use client';

import CalendarLib from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface CalendarProps {
  timezone: number;
  onSelectSlot: (slot: { date: Date; available: boolean }) => void;
}

export const Calendar = ({ timezone, onSelectSlot }: CalendarProps) => {
  // Disable weekends and past dates
  const tileDisabled = ({ date }: { date: Date }) => {
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return day === 0 || day === 6 || date < today;
  };

  const handleChange = (value: unknown, event: React.MouseEvent<HTMLButtonElement>) => {
    let date: Date | null = null;
    if (value instanceof Date) {
      date = value;
    } else if (Array.isArray(value) && value.length > 0 && value[0] instanceof Date) {
      date = value[0];
    }
    if (!date) return;
    onSelectSlot({ date, available: !tileDisabled({ date }) });
  };

  return (
    <div className="p-4">
      <CalendarLib
        onChange={handleChange}
        tileDisabled={tileDisabled}
        minDetail="month"
        calendarType="gregory"
      />
    </div>
  );
}; 