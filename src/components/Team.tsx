import { useState } from 'react';
import { X, GraduationCap, Briefcase, Award, Stethoscope, FlaskConical } from 'lucide-react';
import drHaroonImg from '../assets/Dr.-Haroon.webp';
import drSabirImg from '../assets/dr-sabir.png';

interface TeamMember {
  id: number;
  name: string;
  initials: string;
  title: string;
  role: string;
  shortDescription: string;
  badge: string;
  gradientFrom: string;
  gradientTo: string;
  image?: string;
  bio: string;
  qualifications: string[];
  specializations: string[];
  experience: string[];
  research?: string;
  clickable?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Prof. Muhammad Haroon Yousaf',
    initials: 'HY',
    title: 'FCPS',
    role: 'Professor of Medicine & Gastroenterology Department',
    shortDescription: 'Professor of Medicine & Gastroenterology Department',
    badge: 'Lead Consultant',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-blue-700',
    image: drHaroonImg,
    bio: 'Prof. Muhammad Haroon Yousaf is a distinguished gastroenterologist and hepatologist with over two decades of experience in treating complex digestive and liver disorders. As the founder of Haroon\'s GI & Liver Associates, he has dedicated his career to advancing patient care and medical education in Pakistan.',
    qualifications: [
      'FCPS (Medicine) - College of Physicians and Surgeons Pakistan',
      'MBBS - King Edward Medical University, Lahore',
      'Fellowship in Gastroenterology & Hepatology',
    ],
    specializations: [
      'Advanced Therapeutic Endoscopy',
      'Hepatology & Liver Diseases',
      'Inflammatory Bowel Disease (IBD)',
      'Gastrointestinal Oncology',
      'Pancreatic & Biliary Disorders',
    ],
    experience: [
      'Professor of Medicine - Shalamar Institute of Health Sciences',
      'Consultant Gastroenterologist - Shalamar Hospital',
      '20+ years of clinical experience',
      'Published researcher with numerous publications',
    ],
  },
  {
    id: 2,
    name: 'Dr. Muhammad Ali Sabir',
    initials: 'AS',
    title: 'FCPS (Medicine), Fellow FCPS Gastroenterology',
    role: 'Consultant Physician & Gastroenterologist',
    shortDescription: 'Fellow FCPS Gastroenterology, Jinnah Hospital Lahore',
    badge: 'Consultant',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-600',
    image: drSabirImg,
    bio: 'Dr. Muhammad Ali Sabir is a Fellow of the College of Physicians and Surgeons Pakistan (FCPS) in both Medicine and Gastroenterology, currently practicing at a leading tertiary care hospital in Lahore. He has extensive experience in the diagnosis and management of complex gastrointestinal, hepatobiliary, and metabolic disorders.\n\nDr. Ali\'s clinical work bridges general internal medicine and specialized gastroenterology, with a particular focus on diabetes, obesity, and their interrelation with fatty liver disease (MASLD/MASH). He is deeply committed to evidence-based medicine, patient education, and the integration of lifestyle modification with pharmacologic therapy for metabolic health.',
    qualifications: [
      'FCPS (Medicine) - College of Physicians and Surgeons Pakistan',
      'Fellow FCPS Gastroenterology - Jinnah Hospital Lahore',
    ],
    specializations: [
      'Gastroenterology & Hepatology',
      'Endoscopy & Colonoscopy',
      'Metabolic Dysfunction–Associated Steatotic Liver Disease (MASLD / NAFLD)',
      'Obesity & Diabetes Management',
      'Gastrointestinal Bleeding & Advanced Endoscopic Procedures',
      'Functional & Motility Disorders',
      'General Internal Medicine',
    ],
    experience: [
      'Consultant Physician & Gastroenterologist - Lahore, Pakistan',
      'Fellow FCPS Gastroenterology - Jinnah Hospital Lahore',
      'Leading tertiary care hospital experience',
    ],
    research: 'Dr. Muhammad Ali is actively involved in clinical research focusing on the role of GLP-1 analogs in the progression of MASLD and the interrelationship between obesity, insulin resistance, and hepatic steatosis in the South Asian population.',
    clickable: true,
  },
  {
    id: 3,
    name: 'Miss Yumnah Haroon',
    initials: 'YH',
    title: 'BSC Nutritionist and Clinical Nutritionist',
    role: 'Medical Professional',
    shortDescription: 'Dedicated to patient care excellence',
    badge: 'Team Member',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-blue-600',
    bio: 'Miss Yumnah Haroon is a dedicated medical professional committed to ensuring the highest standards of patient care and clinic operations. Her attention to detail and compassionate approach contribute significantly to the positive patient experience at our practice.',
    qualifications: [
      'Medical Sciences Education',
      'Healthcare Administration Training',
      'Patient Care Certification',
    ],
    specializations: [
      'Patient Care Coordination',
      'Healthcare Administration',
      'Clinical Support Services',
      'Patient Education & Communication',
    ],
    experience: [
      'Medical Professional - Haroon\'s GI & Liver Associates',
      'Dedicated to enhancing patient experience',
      'Expertise in healthcare coordination',
    ],
    clickable: false,
  },
];

interface ProfileModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ member, isOpen, onClose }: ProfileModalProps) => {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header with gradient */}
        <div className={`bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} p-8 text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-6">
            {member.image ? (
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-4 border-white/30" />
            ) : (
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold">{member.initials}</span>
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
              <p className="text-white/90 font-medium">{member.title}</p>
              <div className="mt-2 inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                {member.badge}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Bio */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">{member.bio}</p>
          </div>

          {/* Qualifications */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">Qualifications</h3>
            </div>
            <ul className="space-y-2">
              {member.qualifications.map((qual, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  {qual}
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Stethoscope className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">Specializations</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {member.specializations.map((spec, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-bold text-gray-900">Experience</h3>
            </div>
            <ul className="space-y-2">
              {member.experience.map((exp, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <Award className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  {exp}
                </li>
              ))}
            </ul>
          </div>

          {/* Research (if available) */}
          {member.research && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <FlaskConical className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Research & Academic Involvement</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{member.research}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProfile = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProfile = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="team" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600">Dedicated professionals committed to your health</p>
            <p className="text-gray-500 mt-2">Click on a team member to view their full profile</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => {
              const isClickable = member.clickable !== false;
              return (
                <div
                  key={member.id}
                  onClick={() => isClickable && openProfile(member)}
                  className={`bg-white rounded-2xl p-8 shadow-lg text-center transform transition-all duration-300 ${isClickable ? 'cursor-pointer hover:scale-105 hover:shadow-xl' : ''} group`}
                >
                  {member.image ? (
                    <img src={member.image} alt={member.name} className={`w-32 h-32 rounded-full object-cover mx-auto mb-6 ${isClickable ? 'group-hover:scale-110' : ''} transition-transform duration-300 border-4 border-blue-200`} />
                  ) : (
                    <div className={`w-32 h-32 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} rounded-full mx-auto mb-6 flex items-center justify-center ${isClickable ? 'group-hover:scale-110' : ''} transition-transform duration-300`}>
                      <span className="text-4xl font-bold text-white">{member.initials}</span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.title}</p>
                  <p className="text-gray-600 mb-4">{member.shortDescription}</p>
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {member.badge}
                  </div>
                  {isClickable && (
                    <p className="text-blue-600 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view profile →
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ProfileModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={closeProfile}
      />
    </>
  );
};

export default Team;

