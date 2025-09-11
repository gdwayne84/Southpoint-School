import React, { useState, useEffect, useRef } from 'react';
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

const categoryColors: { [key in CalendarEvent['category']]: { bg: string; text: string; border: string; } } = {
    Holiday: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-500' },
    Exam: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-500' },
    Event: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-600' },
    'No Classes': { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-500' },
};

const formatDate = (date: Date): string => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};

const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const eventListRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const eventsByDate = CALENDAR_EVENTS.reduce((acc, event) => {
        (acc[event.date] = acc[event.date] || []).push(event);
        return acc;
    }, {} as { [key: string]: CalendarEvent[] });

    useEffect(() => {
        const selectedDateStr = formatDate(selectedDate);
        const ref = eventListRefs.current[selectedDateStr];

        if (ref) {
            ref.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }, [selectedDate]);

    const changeMonth = (offset: number) => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setDate(1); // Avoid issues with different month lengths
            newDate.setMonth(newDate.getMonth() + offset);
            return newDate;
        });
    };

    const renderHeader = () => {
        const dateFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' });
        return (
            <div className="flex justify-between items-center mb-6 px-1">
                <button onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Previous month">
                    <ChevronLeftIcon />
                </button>
                <h2 className="text-xl sm:text-2xl font-bold text-battle-green text-center">
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
        const shortDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        return (
            <div className="grid grid-cols-7 divide-x divide-gray-200 bg-gray-50">
                {days.map((day, i) => (
                    <div key={day} className="py-2 text-center font-semibold text-gray-600 text-sm">
                        <span className="hidden sm:inline">{day}</span>
                        <span className="sm:hidden">{shortDays[i]}</span>
                    </div>
                ))}
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
        const todayStr = formatDate(today);
        const selectedDateStr = formatDate(selectedDate);

        const rows = [];
        let day = new Date(startDate);

        while (day <= endDate) {
            const week = [];
            for (let i = 0; i < 7; i++) {
                const dayClone = new Date(day);
                const dateStr = formatDate(dayClone);
                const isCurrentMonth = dayClone.getMonth() === currentDate.getMonth();
                const isToday = dateStr === todayStr;
                const isSelected = dateStr === selectedDateStr;

                week.push(
                    <button
                        key={dayClone.toString()}
                        onClick={() => setSelectedDate(dayClone)}
                        className={`p-1.5 h-24 sm:h-32 flex flex-col items-start text-left focus:outline-none focus:ring-2 focus:ring-battle-green focus:z-10 transition-colors ${isCurrentMonth ? 'bg-white' : 'bg-gray-50'} ${isSelected ? 'bg-green-100' : 'hover:bg-gray-100'}`}
                    >
                        <span className={`text-sm self-start ${isToday ? 'bg-battle-green text-white rounded-full w-7 h-7 flex items-center justify-center font-bold' : 'font-medium'} ${isCurrentMonth ? 'text-gray-800' : 'text-gray-400'}`}>
                            {dayClone.getDate()}
                        </span>
                        <div className="mt-1 space-y-1 overflow-hidden flex-grow w-full">
                            {eventsByDate[dateStr]?.map((event, index) => (
                                <div key={index} className={`w-full text-white text-[10px] sm:text-xs px-1.5 py-0.5 rounded truncate ${categoryColors[event.category].bg.replace('-100', '-500')}`} title={event.title}>
                                    <span className="hidden sm:inline">{event.title}</span>
                                    <span className={`sm:hidden w-2 h-2 rounded-full inline-block ${categoryColors[event.category].bg.replace('-100', '-500')}`}></span>
                                </div>
                            ))}
                        </div>
                    </button>
                );
                day.setDate(day.getDate() + 1);
            }
            rows.push(<div key={day.toString()} className="grid grid-cols-7 divide-x divide-gray-200">{week}</div>);
        }
        return <>{rows}</>;
    };

    const renderLegend = () => (
      <div className="mt-8 flex flex-wrap justify-center items-center gap-y-3 gap-x-4 sm:gap-x-6">
        {Object.entries(categoryColors).map(([category, colors]) => (
          <div key={category} className="flex items-center">
            <span className={`w-4 h-4 rounded-full mr-2 ${colors.bg.replace('-100', '-500')}`}></span>
            <span className="text-sm text-gray-700">{category}</span>
          </div>
        ))}
      </div>
    );

    const renderMonthlyEvents = () => {
        const eventsThisMonth = CALENDAR_EVENTS
            .filter(event => new Date(event.date).getMonth() === currentDate.getMonth() && new Date(event.date).getFullYear() === currentDate.getFullYear())
            .sort((a, b) => new Date(a.date).getDate() - new Date(b.date).getDate());

        const groupedEvents = eventsThisMonth.reduce((acc, event) => {
            const date = event.date;
            if (!acc[date]) acc[date] = [];
            acc[date].push(event);
            return acc;
        }, {} as { [key: string]: CalendarEvent[] });

        if (Object.keys(groupedEvents).length === 0) {
            return (
                 <div className="mt-12 text-center">
                    <h3 className="text-2xl font-bold text-gray-800">No Events This Month</h3>
                    <p className="text-gray-500 mt-2">Check back later or select another month.</p>
                </div>
            )
        }

        return (
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Events This Month</h3>
                <div className="space-y-4">
                    {Object.entries(groupedEvents).map(([date, events]) => {
                        const day = new Date(date);
                        const isSelected = formatDate(day) === formatDate(selectedDate);
                        return (
                            <div
                                key={date}
                                // FIX: Changed ref callback from an implicit return to a block to ensure a `void` return type, resolving a TypeScript error.
                                ref={el => { eventListRefs.current[date] = el; }}
                                className={`p-4 rounded-lg transition-all duration-300 ${isSelected ? 'bg-green-100 ring-2 ring-battle-green' : 'bg-white shadow-sm'}`}
                            >
                                <p className="font-bold text-battle-green mb-3">
                                    {day.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                                </p>
                                <div className="space-y-2">
                                    {events.map((event, index) => (
                                        <div key={index} className={`flex items-center p-2 rounded ${categoryColors[event.category].bg} ${categoryColors[event.category].text} border-l-4 ${categoryColors[event.category].border}`}>
                                            {event.title}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    };


    return (
        <PageShell title="School Calendar">
            <div className="bg-white p-2 sm:p-6 rounded-lg shadow-lg">
                {renderHeader()}
                <div className="border border-gray-200 divide-y divide-gray-200">
                    {renderDays()}
                    {renderCells()}
                </div>
            </div>
            {renderLegend()}
            <div className="mt-10 border-t border-gray-200 pt-8">
                {renderMonthlyEvents()}
            </div>
        </PageShell>
    );
};

export default Calendar;
