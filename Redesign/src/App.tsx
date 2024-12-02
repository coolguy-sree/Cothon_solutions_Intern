import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import About from './components/home/About';
import EventsList from './components/events/EventsList';
import FacultyList from './components/office-bearers/FacultyList';
import FeedbackForm from './components/grievances/FeedbackForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
              </>
            } />
            <Route path="/office-bearers" element={<FacultyList />} />
            <Route path="/events" element={<EventsList />} />
            <Route path="/grievances" element={
              <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Feedback & Grievances</h2>
                <FeedbackForm />
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;