import React, { useState } from 'react';
import { Clock, Calendar, MapPin, User } from 'lucide-react';

interface TimeSlot {
  time: string;
  monday?: ClassInfo;
  tuesday?: ClassInfo;
  wednesday?: ClassInfo;
  thursday?: ClassInfo;
  friday?: ClassInfo;
  saturday?: ClassInfo;
}

interface ClassInfo {
  subject: string;
  faculty: string;
  room: string;
  type: 'lecture' | 'lab' | 'tutorial';
}

const Timetable: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState('5');
  const [selectedSection, setSelectedSection] = useState('A');

  const timeSlots: TimeSlot[] = [
    {
      time: '10:00 - 11:00',
      monday: { subject: 'BAD703', faculty: 'Mrs. Varshitha M', room: 'B-309', type: 'lecture' },
      tuesday: { subject: 'BAD714B', faculty: '"Ms. Syeda Fathima Aimam', room: 'B-309', type: 'lab' },
      wednesday: { subject: 'BAD701', faculty: 'Dr. Pradeep N R', room: 'B-309', type: 'lecture' },
      thursday: { subject: 'BAD702', faculty: 'Mr. Raghu Nandan R', room: 'AI-101', type: 'lecture' },
      friday: { subject: 'AI Ethics', faculty: 'Mr. Gopinath C B', room: 'AI-104', type: 'lecture' },
      saturday: { subject: 'Research Methodology', faculty: 'Mrs. Varshitha M', room: 'AI-105', type: 'lecture' }
    },
    {
      time: '10:00 - 10:50',
      monday: { subject: 'Computer Vision', faculty: 'Mr. Raghu Nandan R', room: 'AI-106', type: 'lecture' },
      tuesday: { subject: 'NLP', faculty: 'Mr. Gopinath C B', room: 'AI-107', type: 'lecture' },
      wednesday: { subject: 'Big Data Analytics', faculty: 'Mrs. Varshitha M', room: 'AI-108', type: 'lecture' },
      thursday: { subject: 'Statistical Learning', faculty: 'Mr. Gopinath C B', room: 'AI-109', type: 'lecture' },
      friday: { subject: 'IoT & Edge Computing', faculty: 'Mrs. Varshitha M', room: 'AI-110', type: 'lecture' },
      saturday: { subject: 'Quantum Computing', faculty: 'Mrs. Varshitha M', room: 'AI-111', type: 'lecture' }
    },
    {
      time: '11:10 - 12:00',
      monday: { subject: 'ML Lab', faculty: 'Mr. Raghu Nandan R', room: 'Lab-1', type: 'lab' },
      tuesday: { subject: 'DL Lab', faculty: 'Mrs. Varshitha M', room: 'Lab-2', type: 'lab' },
      wednesday: { subject: 'Data Analytics Lab', faculty: 'Dr. Anitha Reddy', room: 'Lab-3', type: 'lab' },
      thursday: { subject: 'CV Lab', faculty: 'Mr. Raghu Nandan R', room: 'Lab-4', type: 'lab' },
      friday: { subject: 'NLP Lab', faculty: 'Mrs. Varshitha M', room: 'Lab-5', type: 'lab' },
      saturday: { subject: 'Project Work', faculty: 'All Faculty', room: 'Project Lab', type: 'lab' }
    },
    {
      time: '12:10 - 1:00',
      monday: { subject: 'ML Lab', faculty: 'Mr. Raghu Nandan R', room: 'Lab-1', type: 'lab' },
      tuesday: { subject: 'DL Lab', faculty: 'Mrs. Varshitha M', room: 'Lab-2', type: 'lab' },
      wednesday: { subject: 'Data Analytics Lab', faculty: 'Dr. Anitha Reddy', room: 'Lab-3', type: 'lab' },
      thursday: { subject: 'CV Lab', faculty: 'Dr. Vikram Singh', room: 'Lab-4', type: 'lab' },
      friday: { subject: 'NLP Lab', faculty: 'Dr. Rajesh Kumar', room: 'Lab-5', type: 'lab' },
      saturday: { subject: 'Project Work', faculty: 'All Faculty', room: 'Project Lab', type: 'lab' }
    },
    {
      time: '2:00 - 2:50',
      monday: { subject: 'Tutorial - ML', faculty: 'Dr. Priya Sharma', room: 'AI-101', type: 'tutorial' },
      tuesday: { subject: 'Tutorial - DL', faculty: 'Dr. Rajesh Kumar', room: 'AI-102', type: 'tutorial' },
      wednesday: { subject: 'Tutorial - Data Mining', faculty: 'Dr. Anitha Reddy', room: 'AI-103', type: 'tutorial' },
      thursday: { subject: 'Seminar', faculty: 'Guest Speaker', room: 'Auditorium', type: 'lecture' },
      friday: { subject: 'Industry Session', faculty: 'Industry Expert', room: 'Conference Hall', type: 'lecture' }
    },
    {
      time: '3:00 - 3:50',
      monday: { subject: 'Research Project', faculty: 'Guide Faculty', room: 'Research Lab', type: 'lab' },
      tuesday: { subject: 'Capstone Project', faculty: 'Project Guide', room: 'Project Lab', type: 'lab' },
      wednesday: { subject: 'Internship Prep', faculty: 'Prof. Arjun Mehta', room: 'AI-112', type: 'lecture' },
      thursday: { subject: 'Placement Training', faculty: 'Placement Cell', room: 'Training Hall', type: 'tutorial' },
      friday: { subject: 'Extra Curricular', faculty: 'Activity Coordinator', room: 'Activity Hall', type: 'tutorial' }
    }
  ];

  const getClassTypeColor = (type: string) => {
    switch (type) {
      case 'lecture':
        return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'lab':
        return 'bg-green-100 border-green-300 text-green-800';
      case 'tutorial':
        return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Class Timetable</h2>
          <p className="text-lg text-gray-600">
            Academic schedule for AI & Data Science Department
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <label className="font-semibold text-gray-700">Semester:</label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="5">5th Semester</option>
                <option value="6">6th Semester</option>
                <option value="7">7th Semester</option>
                <option value="8">8th Semester</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-teal-600" />
              <label className="font-semibold text-gray-700">Section:</label>
              <select
                value={selectedSection}
                onChange={(e) => setSelectedSection(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="A">Section A</option>
                <option value="B">Section B</option>
                <option value="C">Section C</option>
              </select>
            </div>
          </div>
        </div>

        {/* Timetable */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Time</th>
                  {dayNames.map((day) => (
                    <th key={day} className="px-4 py-3 text-left font-semibold min-w-[200px]">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((slot, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-4 font-semibold text-gray-800 border-r border-gray-200">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-blue-600 mr-2" />
                        {slot.time}
                      </div>
                    </td>
                    {days.map((day) => {
                      const classInfo = slot[day as keyof TimeSlot] as ClassInfo | undefined;
                      return (
                        <td key={day} className="px-4 py-4 border-r border-gray-200">
                          {classInfo ? (
                            <div className={`p-3 rounded-lg border-2 ${getClassTypeColor(classInfo.type)}`}>
                              <div className="font-semibold text-sm mb-1">{classInfo.subject}</div>
                              <div className="flex items-center text-xs mb-1">
                                <User className="h-3 w-3 mr-1" />
                                {classInfo.faculty}
                              </div>
                              <div className="flex items-center text-xs">
                                <MapPin className="h-3 w-3 mr-1" />
                                {classInfo.room}
                              </div>
                              <div className="text-xs mt-1 font-medium capitalize">
                                {classInfo.type}
                              </div>
                            </div>
                          ) : (
                            <div className="text-gray-400 text-center text-sm">No Class</div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Class Types</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-100 border-2 border-blue-300 rounded mr-2"></div>
              <span className="text-sm text-gray-700">Lecture</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-100 border-2 border-green-300 rounded mr-2"></div>
              <span className="text-sm text-gray-700">Laboratory</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-100 border-2 border-yellow-300 rounded mr-2"></div>
              <span className="text-sm text-gray-700">Tutorial</span>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-8 bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Notes</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Lunch break: 1:00 PM - 2:00 PM</li>
            <li>• Lab sessions are mandatory and require 75% attendance</li>
            <li>• Tutorials include doubt clearing and assignment discussions</li>
            <li>• Guest lectures and industry sessions are subject to change</li>
            <li>• Students must carry lab manuals for practical sessions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timetable;