import React from 'react';
import EventCard from './EventCard';
import { events } from '../../data/events';

export default function EventsList() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Events & Activities</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            description={event.description}
            date={`${event.date} at ${event.time}`}
            venue={event.venue}
            attendees={event.attendees}
            image={event.image}
            chiefGuest={event.chiefGuest}
          />
        ))}
      </div>
    </div>
  );
}