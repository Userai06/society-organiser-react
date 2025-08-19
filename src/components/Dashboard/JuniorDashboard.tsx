import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Event, Announcement } from '../../types';
import { Calendar, Users, BookOpen, MessageSquare, Clock, Bell } from 'lucide-react';
import EventCard from './EventCard';
import AnnouncementCard from './AnnouncementCard';
import ResourcesSection from './ResourcesSection';
import AttendanceTracker from '../Attendance/AttendanceTracker';

const JuniorDashboard: React.FC = () => {
  const { user } = useAuth();

  const upcomingEvents = [
    {
      id: '1',
      title: 'Weekly Meeting',
      date: new Date('2024-01-15'),
      time: '14:00',
      location: 'Conference Room A',
      description: 'Regular team sync and updates'
    },
    {
      id: '2',
      title: 'Workshop: React Basics',
      date: new Date('2024-01-18'),
      time: '16:00',
      location: 'Lab 101',
      description: 'Introduction to React development'
    }
  ];

  const announcements = [
    {
      id: '1',
      title: 'New Project Guidelines',
      content: 'Please review the updated project submission guidelines before the next deadline.',
      priority: 'High' as const,
      createdAt: new Date('2024-01-10'),
      author: 'Admin'
    },
    {
      id: '2',
      title: 'Office Hours Update',
      content: 'Office hours have been moved to Tuesdays and Thursdays, 2-4 PM.',
      priority: 'Medium' as const,
      createdAt: new Date('2024-01-08'),
      author: 'Secretary'
    },
    {
      id: '3',
      title: 'Welcome New Members',
      content: 'Please join us in welcoming our new team members who joined this month.',
      priority: 'Low' as const,
      createdAt: new Date('2024-01-05'),
      author: 'HR Team'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user?.email?.split('@')[0]}!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Here's what's happening in your society today.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in-up animation-delay-200">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Upcoming Events</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{upcomingEvents.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Active Members</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">24</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Resources</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">12</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900">
                <Bell className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Announcements</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{announcements.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Events */}
            <div className="animate-fade-in-up animation-delay-400">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <Calendar className="h-6 w-6 mr-2" />
                  Upcoming Events
                </h2>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>

            {/* Attendance Tracker */}
            <div className="animate-fade-in-up animation-delay-600">
              <AttendanceTracker />
            </div>

            {/* Resources Section */}
            <div className="animate-fade-in-up animation-delay-800">
              <ResourcesSection />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Announcements */}
            <div className="animate-fade-in-up animation-delay-500">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2" />
                  Announcements
                </h2>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-80 sm:h-96 overflow-hidden">
                <div className="h-full overflow-y-auto custom-scrollbar space-y-4">
                  {announcements.map((announcement) => (
                    <AnnouncementCard key={announcement.id} announcement={announcement} />
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="animate-fade-in-up animation-delay-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Mark Attendance
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  View Resources
                </button>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Send Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuniorDashboard;