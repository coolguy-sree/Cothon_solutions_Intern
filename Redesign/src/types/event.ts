export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  attendees: number;
  image: string;
  chiefGuest?: string;
  registrationLink?: string;
}