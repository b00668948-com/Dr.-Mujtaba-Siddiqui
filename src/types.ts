export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  symptomsOrCare: string[];
  duration: string;
  iconName: 'stethoscope' | 'thermometer' | 'wind' | 'users' | 'video' | 'clipboard';
  tag?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  relation: string;
  rating: number;
  date: string;
  comment: string;
  highlight?: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'appointment' | 'timings' | 'emergency';
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'General Health' | 'Preventive Care' | 'Asthma & Allergy' | 'Seasonal Care' | 'Clinic News';
  readTime: string;
  date: string;
  author: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  serviceId: string;
  date: string;
  timeSlot: string;
  symptoms: string;
  appointmentType: 'in-clinic' | 'online';
}
