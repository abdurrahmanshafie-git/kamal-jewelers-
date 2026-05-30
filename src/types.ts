/**
 * Types and interfaces for New Kamal Jewellers Sri Lanka.
 */

export interface CollectionItem {
  id: string;
  title: string;
  description: string;
  image: string;
  count: string;
  tagline: string;
}

export interface MasterpieceItem {
  id: string;
  name: string;
  category: 'Bridal' | 'Diamond' | 'Classic Gold' | 'Exclusive';
  price: string;
  rating: number;
  image: string;
  purity: string;
  description: string;
  specs: {
    metal: string;
    weight: string;
    gems?: string;
  };
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  event: string;
  quote: string;
  stars: number;
  photoUrl: string;
}

export interface ShowroomAppointment {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  serviceType: string;
  showroomLocation: 'Akurana Showroom (Main)' | 'Online Virtual';
  specialRequests?: string;
}

export interface CustomJewelleryInquiry {
  gemstone: string;
  metal: string;
  caratWeight: number;
  settingStyle: string;
  contactName: string;
  contactPhone: string;
  notes?: string;
}
