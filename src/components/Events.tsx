import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, Eye } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'seminar' | 'workshop' | 'conference' | 'competition' | 'guest-lecture' | 'cultural';
  description: string;
  organizer: string;
  capacity: number;
  registered: number;
  image: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

const Events: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: "ATAL sponsored one week FACULTY DEVELOPMENT PROGRAM",
      date: "2025-08-15",
      time: "10:00 AM - 12:00 PM",
      location: "Main Auditorium",
      type: "guest-lecture",
      description: "Join us for an insightful session on how AI is revolutionizing in current world. Dr. Sarah Johnson from Johns Hopkins will discuss cutting-edge applications and future possibilities.",
      organizer: "Dr. Vinutha M R",
      capacity: 200,
      registered: 145,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQGDZH58E5mkcxpYp3C9vNuarbsIz0ZMxiA&s",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Deep Learning Workshop",
      date: "2025-08-20",
      time: "9:00 AM - 5:00 PM",
      location: "AI & DS Lab",
      type: "workshop",
      description: "Hands-on workshop covering neural networks, CNNs, and RNNs. Participants will work on real-world projects using TensorFlow and PyTorch.",
      organizer: "Dr. Vinutha M R",
      capacity: 50,
      registered: 48,
      image: "https://mimo.mit.edu/wp-content/uploads/2023/02/DLW2023_Flyer-1.jpg",
      status: "upcoming"
    },
    {
      id: 3,
      title: "DataThon 2025 - AI Challenge",
      date: "2025-08-25",
      time: "12 Hours",
      location: "Innovation Center",
      type: "competition",
      description: "Annual data science competition where teams solve real-world problems using AI and machine learning. Cash prizes worth ₹2 lakhs!",
      organizer: "Student Council",
      capacity: 120,
      registered: 89,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32JzXNk8IQPEWpMUhyKYb4K4khAnJVRI8aA&s",
      status: "upcoming"
    },
    {
      id: 4,
      title: "Inauguration of AICTE IDEA LAB",
      date: "2025-09-10",
      time: "3 Days",
      location: "Conference Hall",
      type: "conference",
      description: "Three-day conference discussing ethical implications of AI, featuring speakers from MIT, Stanford, and Cambridge.",
      organizer: "Varshitha M",
      capacity: 300,
      registered: 267,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjSRFobVDBeNRFjyvKAQh4eT42bLh6KkAsA&s",
      status: "upcoming"
    },
    {
      id: 5,
      title: "Machine Learning Masterclass",
      date: "2024-01-20",
      time: "2:00 PM - 4:00 PM",
      location: "Smart Classroom",
      type: "seminar",
      description: "Advanced ML techniques and algorithms explained by industry experts from Google AI. Covered ensemble methods and model optimization.",
      organizer: "Dr. Vikram Singh",
      capacity: 80,
      registered: 80,
      image: "data:image/png;base64,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",
      status: "completed"
    },
    {
      id: 6,
      title: "Drone workshop",
      date: "2024-03-15",
      time: "Full Day",
      location: "Campus Grounds",
      type: "cultural",
      description: "Annual tech fest showcasing student projects, cultural performances, and technical competitions. Open to all departments.",
      organizer: "Cultural Committee",
      capacity: 1000,
      registered: 756,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaitjQZtW3Lrtagrp2WXBh_idEqtaotnWc4w&s",
      status: "upcoming"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'seminar':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'workshop':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'conference':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'competition':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'guest-lecture':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'cultural':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-green-500';
      case 'ongoing':
        return 'bg-yellow-500';
      case 'completed':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const filteredEvents = selectedFilter === 'all' 
    ? events 
    : events.filter(event => event.type === selectedFilter);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600">
            Stay updated with the latest events, workshops, and activities in our department
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Filter Events</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setSelectedFilter('seminar')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === 'seminar'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Seminars
            </button>
            <button
              onClick={() => setSelectedFilter('workshop')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === 'workshop'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Workshops
            </button>
            <button
              onClick={() => setSelectedFilter('conference')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === 'conference'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Conferences
            </button>
            <button
              onClick={() => setSelectedFilter('competition')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === 'competition'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Competitions
            </button>
            <button
              onClick={() => setSelectedFilter('guest-lecture')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === 'guest-lecture'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Guest Lectures
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getEventTypeColor(event.type)}`}>
                    {event.type.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(event.status)}`}></div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-green-600" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-red-600" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-purple-600" />
                    {event.registered}/{event.capacity} registered
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Organized by: {event.organizer}
                  </div>
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedEvent(null)}>
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-600 hover:text-gray-800"
                >
                  ×
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getEventTypeColor(selectedEvent.type)}`}>
                    {selectedEvent.type.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6">{selectedEvent.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold">Date</div>
                        <div className="text-gray-600">{formatDate(selectedEvent.date)}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3 text-green-600" />
                      <div>
                        <div className="font-semibold">Time</div>
                        <div className="text-gray-600">{selectedEvent.time}</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-red-600" />
                      <div>
                        <div className="font-semibold">Location</div>
                        <div className="text-gray-600">{selectedEvent.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-3 text-purple-600" />
                      <div>
                        <div className="font-semibold">Registration</div>
                        <div className="text-gray-600">{selectedEvent.registered}/{selectedEvent.capacity}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="font-semibold mb-2">Organized by:</div>
                  <div className="text-gray-700">{selectedEvent.organizer}</div>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Close
                  </button>
                  {selectedEvent.status === 'upcoming' && (
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;