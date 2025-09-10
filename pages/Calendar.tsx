import React, { useState } from 'react';
import PageShell from '../components/PageShell';
import { CALENDAR_EVENTS } from '../constants';
import { CalendarEvent } from '../types';

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const categoryColors: { [key in CalendarEvent['category']]: string } = {
    Holiday: 'bg-red-500',
    Exam: 'bg-blue-500',
    Event: 'bg-green-600',
    'No Classes': 'bg-yellow-500',
};

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const eventsByDate = CALENDAR_EVENTS.reduce((acc, event) => {
        (acc[event.date] = acc[event.date] || []).push(event);
        return acc;
    }, {} as { [key: string]: CalendarEvent[] });

    const changeMonth = (offset: number) => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + offset);
            return newDate;
        });
    };

    const renderHeader = () => {
        const dateFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' });
        return (
            <div className="flex justify-between items-center mb-6">
                <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Previous month">
                    <ChevronLeftIcon />
                </button>
                <h2 className="text-2xl md:text-3xl font-bold text-battle-green">
                    {dateFormat.format(currentDate)}
                </h2>
                <button onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Next month">
                    <ChevronRightIcon />
                </button>
            </div>
        );
    };

    const renderDays = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return (
            <div className="grid grid-cols-7 text-center font-semibold text-gray-600">
                {days.map(day => <div key={day} className="py-2">{day}</div>)}
            </div>
        );
    };

    const renderCells = () => {
        const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const startDate = new Date(monthStart);
        startDate.setDate(startDate.getDate() - monthStart.getDay());
        const endDate = new Date(monthEnd);
        if (monthEnd.getDay() !== 6) {
          endDate.setDate(endDate.getDate() + (6 - monthEnd.getDay()));
        }

        const today = new Date();
        const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

        const rows = [];
        let day = new Date(startDate);

        while (day <= endDate) {
            const week = [];
            for (let i = 0; i < 7; i++) {
                const dateStr = `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`;
                const isCurrentMonth = day.getMonth() === currentDate.getMonth();
                const isToday = dateStr === todayStr;

                week.push(
                    <div key={day.toString()} className={`border border-gray-200 p-2 h-28 md:h-36 flex flex-col ${isCurrentMonth ? 'bg-white' : 'bg-gray-50'}`}>
                        <span className={`font-medium ${isToday ? 'bg-battle-green text-white rounded-full w-8 h-8 flex items-center justify-center' : ''} ${isCurrentMonth ? 'text-gray-800' : 'text-gray-400'}`}>
                            {day.getDate()}
                        </span>
                        <div className="mt-1 space-y-1 overflow-y-auto">
                            {eventsByDate[dateStr]?.map((event, index) => (
                                <div key={index} className={`text-white text-xs p-1 rounded-md truncate ${categoryColors[event.category]}`} title={event.title}>
                                    {event.title}
                                </div>
                            ))}
                        </div>
                    </div>
                );
                day.setDate(day.getDate() + 1);
            }
            rows.push(<div key={day.toString()} className="grid grid-cols-7">{week}</div>);
        }
        return <div>{rows}</div>;
    };

    const renderLegend = () => (
      <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
        {Object.entries(categoryColors).map(([category, colorClass]) => (
          <div key={category} className="flex items-center">
            <span className={`w-4 h-4 rounded-full mr-2 ${colorClass}`}></span>
            <span className="text-sm text-gray-700">{category}</span>
          </div>
        ))}
      </div>
    );

    return (
        <PageShell title="School Calendar">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                {renderHeader()}
                {renderDays()}
                {renderCells()}
            </div>
            {renderLegend()}
        </PageShell>
    );
};

export default Calendar;
