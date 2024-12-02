import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="https://bitdurg.ac.in/SIDSET-23/img/bitDurgLogo.jpg" alt="BIT Durg Logo" className="h-16" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">BIT DURG</h1>
              <p className="text-sm text-gray-600">Bhilai Institute of Technology, Durg</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <img src="https://site.ieee.org/sb-unikl/files/2018/01/cropped-ieee-company-brand-logo-3430f3daa4d85755-512x512.png" alt="IEEE Logo" className="h-12" />
            <img src="https://site.ieee.org/sb-nhce/files/2022/11/ieee-cs.png" alt="IEEE CS Logo" className="h-12" />
          </div>
        </div>
        <nav className="mt-4">
          <ul className="flex space-x-6 text-gray-600 justify-center items-center">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/office-bearers" className="hover:text-blue-600">Office Bearers</Link></li>
            <li><Link to="/events" className="hover:text-blue-600">Events</Link></li>
            <li><Link to="/grievances" className="hover:text-blue-600">Grievances</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}