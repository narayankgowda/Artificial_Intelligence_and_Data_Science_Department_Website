import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin, Bell } from 'lucide-react';

interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'class' | 'exam' | 'assignment' | 'event' | 'holidays';
  subject?: string;
  description: string;
}

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');

  const events: CalendarEvent[] = [
    {
      id: 1,
      title: "Machine Learning Lecture",
      date: "2025-08-01",
      time: "9:00 AM - 10:00 AM",
      location: "AI-101",
      type: "class",
      subject: "Machine Learning",
      description: "Introduction to supervised learning algorithms"
    },
    {
      id: 2,
      title: "Deep Learning Lab",
      date: "2025-08-05",
      time: "11:00 AM - 1:00 PM",
      location: "Lab-2",
      type: "class",
      subject: "Deep Learning",
      description: "Practical session on neural networks implementation"
    },
    {
      id: 3,
      title: "CIE-1",
      date: "2025-08-14",
      time: "10:00 AM - 05:00 PM",
      location: "Exam Hall A & B",
      type: "exam",
      subject: "Big Data Analytics, Machine Learning"
    },
    {
      id: 4,
      title: "CIE-1",
      date: "2025-08-15",
      time: "10:00 AM - 05:00 PM",
      location: "Exam Hall A & B",
      type: "exam",
      subject: "Blockchain Technology, Water conservation and Rainwater Harvesting",
   
    },
    {
      id: 5,
      title: "CIE-1",
      date: "2025-08-16",
      time: "10:00 AM - 05:00 PM",
      location: "Exam Hall A & B",
      type: "exam",
      Subject: "Indian Knowledge System, Training and Placement"
    },
    {
      id: 6,
      title: "CIE-2",
      date: "2025-09-25",
      time: "10:00 AM - 05:00 PM",
      location: "Exam Hall A & B",
      type: "exam",
      subject: "Big Data Analytics, Machine Learning"
    },
    {
      id: 7,
      title: "CIE-2",
      date: "2025-09-26",
     time: "10:00 AM - 05:00 PM",
      location: "Exam Hall A & B",
      type: "exam",
      subject: "Blockchain Technology, Water conservation and Rainwater Harvesting",
    },
    {
      id: 8,
      title: "CIE-2",
      date: "2025-09-27",
     time: "10:00 AM - 05:00 PM",
      location: "Exam Hall A & B",
      type: "exam",
      Subject: "Indian Knowledge System, Training and Placement"
    }
  ];

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'class':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'exam':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'assignment':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'event':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'holiday':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateString);
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = getEventsForDate(date);
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

      days.push(
        <div
          key={day}
          className={`h-24 border border-gray-200 p-1 cursor-pointer hover:bg-gray-50 ${
            isToday ? 'bg-blue-50 border-blue-300' : ''
          } ${isSelected ? 'bg-blue-100 border-blue-400' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          <div className={`text-sm font-semibold ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
            {day}
          </div>
          <div className="space-y-1">
            {dayEvents.slice(0, 2).map((event) => (
              <div
                key={event.id}
                className={`text-xs px-1 py-0.5 rounded border ${getEventTypeColor(event.type)} truncate`}
                title={event.title}
              >
                {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-gray-500">+{dayEvents.length - 2} more</div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const todayEvents = getEventsForDate(new Date());
  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Calendar</h2>
          <p className="text-lg text-gray-600">
            Stay organized with your class schedule, exams, assignments, and important events
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => navigateMonth(-1)}
                      className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <h3 className="text-2xl font-bold">
                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h3>
                    <button
                      onClick={() => navigateMonth(1)}
                      className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setCurrentDate(new Date())}
                      className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      Today
                    </button>
                  </div>
                </div>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 bg-gray-50">
                {dayNames.map((day) => (
                  <div key={day} className="p-3 text-center font-semibold text-gray-700 border-r border-gray-200 last:border-r-0">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7">
                {renderCalendarDays()}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Events */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2 text-blue-600" />
                Today's Events
              </h3>
              {todayEvents.length > 0 ? (
                <div className="space-y-3">
                  {todayEvents.map((event) => (
                    <div key={event.id} className={`p-3 rounded-lg border ${getEventTypeColor(event.type)}`}>
                      <div className="font-semibold text-sm">{event.title}</div>
                      <div className="flex items-center text-xs mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-xs mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No events scheduled for today</p>
              )}
            </div>

            {/* Selected Date Events */}
            {selectedDate && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </h3>
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-3">
                    {selectedDateEvents.map((event) => (
                      <div key={event.id} className={`p-3 rounded-lg border ${getEventTypeColor(event.type)}`}>
                        <div className="font-semibold text-sm">{event.title}</div>
                        <div className="flex items-center text-xs mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-xs mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {event.location}
                        </div>
                        {event.subject && (
                          <div className="text-xs mt-1 font-medium">{event.subject}</div>
                        )}
                        <div className="text-xs mt-2 text-gray-600">{event.description}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">No events scheduled for this date</p>
                )}
              </div>
            )}

            {/* Legend */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Event Types</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded mr-3"></div>
                  <span className="text-sm text-gray-700">Classes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-100 border border-red-200 rounded mr-3"></div>
                  <span className="text-sm text-gray-700">Exams</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-100 border border-yellow-200 rounded mr-3"></div>
                  <span className="text-sm text-gray-700">Assignments</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-100 border border-green-200 rounded mr-3"></div>
                  <span className="text-sm text-gray-700">Events</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-100 border border-purple-200 rounded mr-3"></div>
                  <span className="text-sm text-gray-700">Holidays</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Bell className="h-4 w-4 mr-2" />
                  Set Reminder
                </button>
                <button className="w-full flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Export Calendar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter(event => new Date(event.date) > new Date())
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .slice(0, 6)
              .map((event) => (
                <div key={event.id} className={`p-4 rounded-lg border ${getEventTypeColor(event.type)}`}>
                  <div className="font-semibold mb-2">{event.title}</div>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    {event.subject && (
                      <div className="font-medium mt-2">{event.subject}</div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;