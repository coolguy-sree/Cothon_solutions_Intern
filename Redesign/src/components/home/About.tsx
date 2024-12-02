import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About BIT Durg</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">Committed to academic excellence and innovation in engineering education</p>
          </div>
          <div className="text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Research</h3>
            <p className="text-gray-600">Cutting-edge research facilities and experienced faculty</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">Vibrant campus life and strong industry connections</p>
          </div>
        </div>
      </div>
    </section>
  );
}