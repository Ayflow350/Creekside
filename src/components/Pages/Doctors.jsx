import React from 'react';
import BannerSectionStyle5 from '../Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../Section/BannerSection/BannerSectionStyle4';
import TeamSectionStyle2 from '../Section/TeamSection/TeamSectionStyle2';
import Section from '../Section';
import { pageTitle } from '../../helpers/PageTitle';
const teamData = [
  {
    imgUrl: '/images/doctors/Hod.png',
    department: 'Board of Directors',
    name: ' AnnaJames, MD',
    designation: 'Board of Directors',
    description:
      'Dr. Chen has over 10 years of experience in emergency medicine and is board certified in emergency medicine. She has a special interest in critical care and trauma management.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'cardiology',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/Hod4.png',
    department: 'Board of Directors',
    name: 'Valine Johnson, MD',
    designation: 'Board of Directors',
    description:
      'Dr. Johnson is a highly experienced emergency medicine physician with over 15 years of experience. He is board-certified in emergency medicine and has a special interest in disaster management.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'emergency',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/nurse.png',
    department: ' Expert Nurse ',
    name: 'Dr. Karen Lee, rn',
    designation: 'Skilled Nursing Expert',
    description:
      'Dr. Lee is a skilled emergency medicine physician with expertise in the treatment of acute medical conditions. She is board-certified in emergency medicine and has a special interest in cardiac.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'pediatric',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/hod3.png',
    department: 'Board of Directors',
    name: 'Dr. Sarah Patel, MD',
    designation: 'Board of Directors',
    description:
      'Dr. Patel is a compassionate pediatrician with over 15 years of experience. She is board-certified in pediatrics and has a special interest in preventive care and childhood development.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'others',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/hod2.png',
    department: 'Pediatric Department',
    name: 'Dr. David Nguyen, MD',
    designation: 'Proficient LPN Specialist',
    description:
      'Dr. Nguyen is a highly skilled pediatrician with expertise in the treatment of common childhood illnesses and conditions. She is board-certified in pediatrics',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'cardiology',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/niod.png',
    department: 'Support Professional',
    name: 'Mark Gary',
    designation: 'Advanced Direct Support Professional',
    description:
      'Dr. Bones is a dedicated pediatrician with a focus on providing comprehensive care to children of all ages. He is board-certified in pediatrics and has a special interest in childhood obesity',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'psychiatry',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/nano.png',
    department: 'Personal Care',
    name: 'Dr. Lisa Chen, MD',
    designation: 'Expert Personal Care Attendant',
    description:
      'Dr. Lee is a skilled cardiologist with expertise in the diagnosis and treatment of cardiovascular disease. He is board-certified in cardiology and has a special interest in preventive cardiology.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'emergency',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_8.png',
    department: 'Emergency Department',
    name: 'Dr. Michelle Kim, MD',
    designation: 'Cardiologist',
    description:
      'Dr. Kim is a renowned cardiologist with over 20 years of experience. She is board-certified in cardiology and has a special interest in the treatment of heart failure and arrhythmias.',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'others',
    href: '/doctors/doctor-details',
  },
  {
    imgUrl: '/images/doctors/doctor_9.png',
    department: 'Emergency Department',
    name: 'Dr. John Smith, MD',
    designation: 'Cardiologist',
    description:
      'Dr. Smith is a board-certified cardiologist with extensive experience in the management of complex cardiac conditions. He has a special interest in interventional cardiology',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
    category: 'psychiatry',
    href: '/doctors/doctor-details',
  },
  

];

export default function Doctors() {
  pageTitle('Doctors');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/doctors.svg"
        imgUrl="/images/about/professionalp.png"
        title="Introduce You to <br />Our Experts"
        subTitle="The list of certified care givers with years of <br />professional experiences"
      />
      <Section topMd={65} bottomMd={200} bottomLg={150} bottomXl={110}>
        <TeamSectionStyle2 data={teamData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="images/doctors/adult.jpeg"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}
