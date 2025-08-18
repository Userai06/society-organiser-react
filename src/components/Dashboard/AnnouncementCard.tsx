import React from 'react';
import { Calendar, User, Trash2 } from 'lucide-react';
import { Announcement } from '../../types';

interface AnnouncementCardProps {
  announcement: Announcement;
  canEdit?: boolean;
  onDelete?: (announcementId: string) => void;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({ announcement, canEdit, onDelete }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 p-4 sm:p-6 transition-all duration-300">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">{announcement.title}</h3>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(announcement.priority)} whitespace-nowrap`}>
            {announcement.priority}
          </span>
          {canEdit && (
            <div className="ml-2">
              <button
                onClick={() => onDelete?.(announcement.id)}
                className="p-1.5 text-gray-500 dark:text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base line-clamp-3 leading-relaxed">{announcement.content}</p>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4" />
          <span className="truncate">Posted by {announcement.createdBy}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span className="whitespace-nowrap">{announcement.createdAt.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCard;