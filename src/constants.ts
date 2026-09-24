import { ServiceItem, ReviewItem, FaqItem } from './types';

export const CLINIC_INFO = {
  name: 'Medicare+ Clinic',
  doctorName: 'Dr. Mujtaba Siddiqui',
  doctorTitle: 'General Practitioner & Family Physician',
  qualification: 'MBBS, Family Medicine Specialist',
  experience: '15+ Years Clinical Experience',
  rating: 4.9,
  totalReviews: 104,
  phone: '+91 91215 92010',
  rawPhone: '+919121592010',
  whatsappUrl: 'https://wa.me/919121592010?text=Hello%20Dr.%20Mujtaba%20Siddiqui%2C%20I%20would%20like%20to%20schedule%20an%20appointment%20at%20Medicare%2B%20Clinic.',
  address: 'Plot #144/145, Near Kakatiya High School, Friends Colony, Puppalguda, Manikonda, Hyderabad, Telangana 500089',
  landmark: 'Near Kakatiya High School, Friends Colony',
  locality: 'Manikonda / Puppalguda, Hyderabad',
  hoursDisplay: 'Evening Clinic · Opens at 7:00 PM (Mon - Sat: 7:00 PM - 10:30 PM)',
  timingNote: 'Opens daily at 7:00 PM',
  googleMapsUrl: 'https://maps.google.com/?q=Plot+144+145+Friends+Colony+Near+Kakatiya+High+School+Puppalguda+Manikonda+Hyderabad',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4116035923985!2d78.3734005!3d17.4042861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96a20a4b7f9f%3A0x7d39d91f46ad65f4!2sKakatiya%20High%20School%2C%20Puppalguda!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'general-consultation',
    title: 'General Consultation',
    category: 'Primary Care',
    description: 'Comprehensive physical examination, diagnosis, and treatment for everyday health complaints across all age groups.',
    symptomsOrCare: ['Routine health check', 'Blood pressure & sugar monitoring', 'Fatigue & weakness', 'Prescription review'],
    duration: '20-30 mins',
    iconName: 'stethoscope',
    tag: 'Popular'
  },
  {
    id: 'fever-infection',
    title: 'Fever & Infection Treatment',
    category: 'Acute Illness',
    description: 'Rapid diagnostic assessment and targeted antibiotic/antiviral protocols for viral fevers, seasonal infections, and stomach ailments.',
    symptomsOrCare: ['High fever & chills', 'Throat infection & flu', 'Typhoid & dengue screening', 'Gastroenteritis'],
    duration: '15-25 mins',
    iconName: 'thermometer',
    tag: 'Prompt Care'
  },
  {
    id: 'asthma-care',
    title: 'Asthma Care & Respiratory Relief',
    category: 'Pulmonary Care',
    description: 'Specialized management for pediatric and adult asthma, bronchospasm, inhaler optimization, and allergy triggers.',
    symptomsOrCare: ['Chronic cough & wheezing', 'Inhaler technique guidance', 'Seasonal allergy management', 'Peak flow monitoring'],
    duration: '25-35 mins',
    iconName: 'wind',
    tag: 'Specialized'
  },
  {
    id: 'family-health-checkups',
    title: 'Family Health Checkups',
    category: 'Preventive Care',
    description: 'Holistic preventive wellness assessments for infants, kids, adults, and elderly parents to detect health risks early.',
    symptomsOrCare: ['Annual preventive screenings', 'Pediatric growth tracking', 'Elderly metabolic screening', 'Dietary counseling'],
    duration: '30-45 mins',
    iconName: 'users',
    tag: 'Preventive'
  },
  {
    id: 'online-consultation',
    title: 'Online Video Consultation',
    category: 'Telemedicine',
    description: 'Comfortable tele-consultations for patients unable to visit in person, follow-ups, or preliminary evaluations.',
    symptomsOrCare: ['Digital prescription', 'Lab test review', 'Non-emergency consults', 'Safe from home'],
    duration: '15-20 mins',
    iconName: 'video',
    tag: 'Tele-Health'
  },
  {
    id: 'follow-up-care',
    title: 'Follow-up & Chronic Disease Care',
    category: 'Continuous Management',
    description: 'Dedicated follow-up monitoring for chronic conditions like hypertension, diabetes, thyroid disorders, and recovery.',
    symptomsOrCare: ['Dosage titration', 'Progress tracking', 'Post-illness review', 'Lifestyle advice'],
    duration: '15-20 mins',
    iconName: 'clipboard',
    tag: 'Continuity'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Sunil Rao',
    relation: 'Resident, Puppalguda',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Very efficient and approachable doctor; he is now our family physician. Dr. Mujtaba Siddiqui took time to listen patiently to all our symptoms and explained the exact cause without unnecessary tests.',
    highlight: 'Very efficient and approachable doctor; he is now our family physician.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Afreen Begum',
    relation: 'Mother of 2, Manikonda',
    rating: 5,
    date: '1 month ago',
    comment: 'Doctor treats patients like family members. Never rushing, always smiling, and gives you complete peace of mind. He remembers our medical history and is so polite and gentle with children.',
    highlight: 'Doctor treats patients like family members.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Ramesh Krishnamurthy',
    relation: 'Parent, Friends Colony',
    rating: 5,
    date: '3 weeks ago',
    comment: "Best advice for my daughter's asthma. We were struggling for months with nighttime coughing fits. Dr. Mujtaba changed the medication regimen, taught proper inhaler technique, and she slept peacefully from day two.",
    highlight: "Best advice for my daughter's asthma.",
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Dr. V. Prasad & Family',
    relation: 'Puppalguda Resident',
    rating: 5,
    date: '2 months ago',
    comment: 'Clean clinic, very reasonable consultation fee, and genuine ethical practice. He only prescribes necessary medicines and gives clear recovery instructions. Truly a blessing in Manikonda.',
    highlight: 'Genuine ethical practice & very reasonable fees.',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Neha Verma',
    relation: 'IT Professional, Financial District',
    rating: 5,
    date: 'Recently',
    comment: 'The evening clinic opening at 7:00 PM is a huge relief for working professionals around Manikonda and Puppalguda. Got diagnosed with viral fever and recovered in 3 days. Highly recommend!',
    highlight: 'Evening clinic timing is a huge relief for working professionals.',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'Mohammed Imran',
    relation: 'Family Patient, Hyderabad',
    rating: 5,
    date: '1 month ago',
    comment: 'Excellent diagnosis and follow-up care. He followed up on WhatsApp to check if my mother’s fever had subsided. Rare to find such dedicated doctors today.',
    highlight: 'Dedicated follow-up care and compassionate treatment.',
    verified: true
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Doctor',
    description: 'Over 15 years of general medicine & family practice experience diagnosing complex and seasonal medical conditions.',
    metric: '15+ Years Experience'
  },
  {
    title: 'Accurate Diagnosis',
    description: 'Evidence-based clinical evaluations focused on treating root causes rather than simply suppressing symptoms.',
    metric: 'Rational Prescriptions'
  },
  {
    title: 'Family-Friendly Care',
    description: 'Gentle, reassuring environment for kids, young adults, and senior citizens with genuine empathetic listening.',
    metric: 'All Age Groups'
  },
  {
    title: 'Affordable Treatment',
    description: 'Transparent, reasonable consultation fees with zero unnecessary lab tests or excessive pharmaceutical burdens.',
    metric: 'Honest Healthcare'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'timings',
    question: 'What are the clinic timings and when does Dr. Mujtaba Siddiqui consult?',
    answer: 'Medicare+ Clinic operates an evening clinic starting at 7:00 PM Monday through Saturday (7:00 PM to 10:30 PM). This timing is designed to accommodate working parents, professionals, and school children.'
  },
  {
    id: 'faq-2',
    category: 'appointment',
    question: 'Do I need a prior appointment or can I walk in?',
    answer: 'Both walk-ins and pre-booked appointments are welcome! However, booking in advance through our website or WhatsApp (+91 91215 92010) guarantees minimal waiting time during peak evening hours.'
  },
  {
    id: 'faq-3',
    category: 'general',
    question: 'Where is the clinic located in Manikonda / Puppalguda?',
    answer: 'The clinic is located at Plot #144/145, Friends Colony, Puppalguda, right near Kakatiya High School in Manikonda, Hyderabad (500089). Easily accessible with convenient roadside parking.'
  },
  {
    id: 'faq-4',
    category: 'appointment',
    question: 'Are online video consultations available if I cannot visit in person?',
    answer: 'Yes, Dr. Mujtaba Siddiqui provides online consultations for patients who are unable to travel, need follow-ups, or require medical advice while traveling. Prescriptions are shared securely via WhatsApp or PDF.'
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'What medical conditions does Dr. Mujtaba Siddiqui treat?',
    answer: 'As an experienced General Practitioner, he manages general illnesses, acute fevers (viral, dengue, malaria, typhoid), asthma and respiratory allergies, diabetes, hypertension, gastrointestinal problems, pediatric infections, and geriatric health checkups.'
  },
  {
    id: 'faq-6',
    category: 'emergency',
    question: 'How do I reach the doctor in case of acute fever or medical inquiry?',
    answer: 'You can immediately call our clinic hotline at +91 91215 92010 or message directly via our WhatsApp link. For critical life-threatening emergencies, we always advise reaching the nearest emergency trauma center.'
  }
];

export const BLOG_POSTS: import('./types').BlogPost[] = [
  {
    id: 'viral-vs-bacterial-fever',
    title: 'Recognizing Viral Fever vs. Bacterial Infections in Children: A GP’s Practical Guide',
    category: 'Seasonal Care',
    readTime: '4 min read',
    date: 'Sep 18, 2026',
    author: 'Dr. Mujtaba Siddiqui',
    summary: 'Understanding fever patterns, why antibiotics do not cure common seasonal viral fevers, and the red flags requiring immediate clinical evaluation.',
    content: [
      'In primary care practice in Manikonda, fever is by far the most frequent complaint bringing anxious parents to Medicare+ Clinic. One common misunderstanding is assuming every high fever requires prompt antibiotics.',
      'Viral fevers typically present with body ache, runny nose, watery eyes, and mild throat irritation. They follow a predictable 3-to-5 day arc where temperature spikes are normal as the child’s immune system fights off the virus. Giving over-the-counter paracetamol according to weight and ensuring optimal hydration is the gold standard.',
      'Bacterial infections, on the other hand, frequently localize: severe tonsillitis with white patches, acute earache, persistent productive cough, or burning urination. These require a physician’s objective clinical examination and targeted antibiotic therapy.',
      'Never give aspirin to children or start leftover antibiotics without medical guidance. If fever lasts beyond 72 hours, is accompanied by extreme lethargy, rash, or persistent vomiting, visit the clinic immediately for a rapid blood count and clinical review.'
    ],
    keyTakeaways: [
      'Viral fevers usually resolve in 3 to 5 days with hydration and paracetamol.',
      'Antibiotics are ineffective against viral bugs and cause antibiotic resistance if misused.',
      'Warning signs: High persistent fever >3 days, refusal to drink fluids, lethargy, or respiratory distress.'
    ],
    tags: ['Pediatrics', 'Fever Care', 'Parenting', 'Antibiotic Awareness']
  },
  {
    id: 'asthma-care-inhalers-hyderabad',
    title: "Managing Asthma and Respiratory Allergies: Inhaler Myths vs. Clinical Facts",
    category: 'Asthma & Allergy',
    readTime: '5 min read',
    date: 'Sep 10, 2026',
    author: 'Dr. Mujtaba Siddiqui',
    summary: 'Why modern inhaled corticosteroids are safe, non-habit forming, and the single most effective way to prevent debilitating nocturnal coughing fits.',
    content: [
      'Rapid urbanization, construction dust in growing suburbs like Manikonda and Puppalguda, and changing seasonal weather contribute significantly to rising asthma cases among children and adults alike.',
      'The most damaging myth in asthma management is fear of inhalers. Many parents worry that using an inhaler will lead to lifelong dependence. In clinical reality, inhaled medication acts directly on airway inflammation at microgram doses — a fraction of the milligram dosages found in oral syrups or tablets.',
      'Proper spacer technique is crucial. Over 60% of patients who feel their inhaler is not working simply lack proper spacer usage technique, leading to medication depositing on the tongue rather than reaching deep into bronchial airways.',
      'With individualized trigger avoidance, peak flow tracking, and personalized controller regimens, our asthma patients enjoy full active lifestyles, sports participation, and uninterrupted nighttime sleep.'
    ],
    keyTakeaways: [
      'Inhaled therapy delivers medication directly to lungs with minimal systemic exposure.',
      'Always use a spacer device with metered-dose inhalers for maximum drug efficacy.',
      'Identify household triggers: dust mites, sudden temperature changes, and smoke.'
    ],
    tags: ['Asthma Relief', 'Pulmonary Care', 'Inhaler Technique', 'Allergies']
  },
  {
    id: 'adult-preventive-screenings-35',
    title: '5 Crucial Preventive Health Screenings Every Adult Over 35 Should Prioritize',
    category: 'Preventive Care',
    readTime: '4 min read',
    date: 'Aug 28, 2026',
    author: 'Dr. Mujtaba Siddiqui',
    summary: 'Hypertension and pre-diabetes are silent conditions. Discover why early screening saves lives and preserves long-term organ health.',
    content: [
      'The modern corporate and urban lifestyle — long sedentary hours, screen fatigue, chronic stress, and late dinners — has lowered the onset age of metabolic disorders in Hyderabad to the early thirties.',
      'Because high blood pressure and early insulin resistance develop quietly without noticeable symptoms, routine checkups are your best defense.',
      'Key screenings recommended at Medicare+ Clinic include: 1) Resting Blood Pressure Check, 2) Fasting Blood Glucose and HbA1c, 3) Comprehensive Lipid Profile (cholesterol & triglycerides), 4) Serum Creatinine and eGFR for kidney health, and 5) Liver Function tests for fatty liver detection.',
      'Detecting metabolic drift early allows us to reverse risks through targeted nutritional adjustments, sleep optimization, and light cardiovascular activity without lifelong reliance on heavy pharmaceuticals.'
    ],
    keyTakeaways: [
      'Screenings detect metabolic changes years before physical symptoms appear.',
      'Annual checks are advised for adults aged 35+, or earlier with family history of diabetes/hypertension.',
      'Lifestyle modifications have the highest success rate when initiated in the pre-diabetic stage.'
    ],
    tags: ['Preventive Medicine', 'Wellness', 'Hypertension', 'Diabetes']
  },
  {
    id: 'dengue-flu-homecare-guide',
    title: 'Combatting Seasonal Flu & Dengue: Practical Home Protocol & Critical Red Flags',
    category: 'Seasonal Care',
    readTime: '4 min read',
    date: 'Aug 14, 2026',
    author: 'Dr. Mujtaba Siddiqui',
    summary: 'A step-by-step guideline on hydration, platelet monitoring, avoiding NSAIDs, and identifying warning signs during mosquito seasons.',
    content: [
      'During monsoon and post-monsoon months, vector-borne infections such as Dengue and Chikungunya surge alongside seasonal influenza. Knowing how to manage fever safely at home is critical.',
      'First and foremost: NEVER consume Ibuprofen, Mefenamic Acid, or Aspirin during suspected dengue fever, as these medications impair platelet function and heighten bleeding risk. Stick exclusively to prescribed Paracetamol under medical advice.',
      'Hydration is the actual cornerstone of dengue recovery. Electrolyte solutions, coconut water, fresh lime water, and clear soups help maintain vascular volume against capillary leakage.',
      'Watch out for the critical phase: this typically occurs when the fever starts subsiding (around day 4 or 5). If severe abdominal pain, persistent nausea, nosebleeds, or extreme dizziness occur, immediate medical attention is mandatory.'
    ],
    keyTakeaways: [
      'Avoid NSAIDs like ibuprofen during acute fevers until dengue is ruled out.',
      'Oral rehydration solution (ORS) and tender coconut water prevent critical plasma depletion.',
      'The fever drop on day 4-5 marks the critical phase where blood counts must be closely tracked.'
    ],
    tags: ['Dengue Care', 'Flu Season', 'Hydration', 'Infection Control']
  },
  {
    id: 'clinic-updates-evening-teleconsult',
    title: 'Medicare+ Clinic Updates: Dedicated Evening Hours & Seamless Digital Consultations',
    category: 'Clinic News',
    readTime: '3 min read',
    date: 'Jul 30, 2026',
    author: 'Medicare+ Clinic Editorial',
    summary: 'Announcing our expanded 7:00 PM – 10:30 PM clinic timings, rapid WhatsApp appointment coordination, and tele-consult options for Manikonda residents.',
    content: [
      'To better serve our growing neighborhood of Puppalguda and Manikonda, Medicare+ Clinic has streamlined its evening consultation schedule starting promptly at 7:00 PM.',
      'We understand that taking time away from office commitments or pulling children from school during daylight hours is challenging. Our evening schedule allows whole families to consult comfortably after work hours.',
      'Furthermore, for follow-up reviews, lab report evaluations, and patients resting at home with contagious flu, our secure online video consultation portal ensures you get timely doctor guidance without stepping out.',
      'We thank the 100+ families who have rated us 4.9★ on Google Reviews and made Medicare+ Clinic their trusted healthcare home.'
    ],
    keyTakeaways: [
      'Evening clinic open Monday to Saturday from 7:00 PM to 10:30 PM.',
      'Pre-booking online guarantees prompt consultation with minimal waiting room dwell time.',
      'Digital teleconsults available with direct WhatsApp prescription delivery.'
    ],
    tags: ['Clinic News', 'Evening Clinic', 'Telehealth', 'Community Health']
  }
];

export const TIME_SLOTS = [
  '07:00 PM',
  '07:20 PM',
  '07:40 PM',
  '08:00 PM',
  '08:20 PM',
  '08:40 PM',
  '09:00 PM',
  '09:20 PM',
  '09:40 PM',
  '10:00 PM'
];
