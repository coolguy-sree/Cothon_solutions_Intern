import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">ADDRESS</h3>
            <div className="space-y-2">
              <p>Institute Code: 01, Established in 1986</p>
              <p>Bhilai House, Durg, Chhattisgarh-491001</p>
              <p>Email: <a href="mailto:bit@bitdurg.ac.in" className="hover:text-green-400 transition-colors">bit@bitdurg.ac.in</a></p>
              <p>Phone: 0788-2359297</p>
              <p>Fax: +91 0788-2359263</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Sports</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">OJAS</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">NSS</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Facilities</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Clubs</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Online Fee Payment</a></li>
            </ul>
          </div>

          {/* Downloads Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">DOWNLOADS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Backlog Exam Form</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Revaluation Form</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Admission Form</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Calendar</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Prospectus</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Magazine</a></li>
            </ul>
          </div>

          {/* Important Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">IMPORTANT LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-400 transition-colors">CSVTU Calendar</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Alumni</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">AICTE</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">UGC</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">DTE Raipur</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="text-center space-y-4">
            <p>Copyright © BIT DURG | Website Design & Maintain by SURYA SAROJ</p>
            <div className="space-x-4">
              <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link to="/disclaimer" className="hover:text-blue-400 transition-colors">Disclaimer</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}