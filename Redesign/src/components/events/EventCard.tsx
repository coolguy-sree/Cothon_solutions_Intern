import React from 'react';
import { Calendar, MapPin, Users, User } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  venue: string;
  attendees: number;
  image: string;
  chiefGuest?: string;
}

export default function EventCard({
  title,
  description,
  date,
  venue,
  attendees,
  image,
  chiefGuest,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-lg">
          <Users className="w-4 h-4 inline-block mr-1" />
          {attendees}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{venue}</span>
          </div>
          {chiefGuest && (
            <div className="flex items-center text-gray-500">
              <User className="w-4 h-4 mr-2" />
              <span>Chief Guest: {chiefGuest}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}