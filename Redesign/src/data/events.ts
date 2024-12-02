import { Event } from '../types/event';

export const events: Event[] = [
  {
    id: 1,
    title: 'Oath Taking Ceremony 2024',
    description: 'Annual ceremony where new IEEE members take their oath and commit to professional excellence and ethical conduct in the field of engineering.',
    date: '2024-01-15',
    time: '10:00 AM',
    venue: 'BIT Durg Main Auditorium',
    attendees: 150,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    chiefGuest: 'Dr. Rajesh Kumar, IEEE Senior Member',
    registrationLink: 'https://forms.gle/example1'
  },
  {
    id: 2,
    title: 'Company in Focus: Tech Giants',
    description: 'An interactive session focusing on leading tech companies, their work culture, and career opportunities for engineering graduates.',
    date: '2024-02-20',
    time: '2:00 PM',
    venue: 'Virtual Session',
    attendees: 200,
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    chiefGuest: 'Ms. Sarah Chen, Senior Technical Director, Google',
    registrationLink: 'https://forms.gle/example2'
  }
];