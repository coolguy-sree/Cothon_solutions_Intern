import React from 'react';
import FacultyCard from './FacultyCard';
import { facultyMembers } from '../../data/faculty';

export default function FacultyList() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">Our Faculty</h2>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        Meet our distinguished faculty members who are dedicated to academic excellence and student success
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((faculty) => (
          <FacultyCard
            key={faculty.id}
            photo={faculty.photo}
            name={faculty.name}
            position={faculty.position}
            education={faculty.education}
          />
        ))}
      </div>
    </div>
  );
}