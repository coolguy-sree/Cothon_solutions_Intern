import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="College Campus"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to BIT Durg</h1>
          <p className="text-xl mb-8">Empowering minds, shaping futures through excellence in engineering education</p>
          <a
            href="https://forms.gle/Q9eQCk6wm3UX9u6z7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            IEEE Registration
          </a>
        </div>
      </div>
    </div>
  );
}