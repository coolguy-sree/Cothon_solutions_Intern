import React from 'react';

interface FacultyCardProps {
  photo: string;
  name: string;
  position: string;
  education: string[];
}

export default function FacultyCard({ photo, name, position, education }: FacultyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={photo} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-blue-600 mb-3">{position}</p>
        <div className="space-y-1">
          {education.map((degree, index) => (
            <p key={index} className="text-sm text-gray-600">{degree}</p>
          ))}
        </div>
      </div>
    </div>
  );
}