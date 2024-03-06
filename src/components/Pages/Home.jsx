import React from 'react';
import HeroStyle2 from '../Hero/HeroStyle2';
import AboutSection from '../Section/AboutSection';
import Section from '../Section';
import FeaturesSection from '../Section/FeaturesSection';
import TestimonialSection from '../Section/TestimonialSection';
import BlogSection from '../Section/BlogSection';
import AppointmentSection from '../Section/AppointmentSection';
import FaqSection from '../Section/FaqSection';

import DepartmentSection from '../Section/DepartmentSection';
import { pageTitle } from '../../helpers/PageTitle';
import bg from '../../assets/oldies.jpeg'
import care from '../../assets/care.jpg'
import Cta from '../Cta';
import join from '../../assets/joinUs.jpg'
import appointment from '../../assets/appoint.jpg'

// import blog1 from '../../assets/blog1 .jpg'
// import blog2 from '../../assets/blog2 .jpg'
// import blog3 from '../../assets/blog3 .jpg'
const featureListData = [
  {
    iconSrc: '/images/home_1/compassion.svg',
    title: 'Personal Support',
    subTitle:
      'We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease and every one.',
  },
  {
    iconSrc: '/images/home_1/excellence.svg',
    title: 'Supported Living',
    subTitle:
      'We are committed to providing excellent medical care and services to our patients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.',
  },
  {
    iconSrc: '/images/home_1/integrity.svg',
    title: 'Respite Services',
    subTitle: ` practicing care with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our patient's interests first & provide best solution.`,
  },
  {
    iconSrc: '/images/home_1/respect.svg',
    title: 'Community Living Group Home',
    subTitle:
      'We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances.',
  },
  {
    iconSrc: '/images/home_1/teamwork.svg',
    title: 'Nursing',
    subTitle:
      'We believe in working collaboratively with our team members and other healthcare professionals to provide comprehensive and effective care to our patients.',
  },
];
const faqData = [
  {
    title: 'What services does Creekside INC offer?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I schedule an appointment with Creekside INC?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'Do you accept insurance?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {                        
    title: 'What should I bring to my appointment?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    title: 'How do I request a prescription refill?',
    content:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
];
const blogData = [
  {
    title: 'The Benefits of Mindfulness Meditation for Stress and Anxiety',
    thumbUrl: 'images/home_1/bblog1.jpeg',
    date: 'May 1, 2024',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'Healthy Eating on a Budget: Tips and Strategies',
    thumbUrl: 'images/home_1/blog2.jpg',
    date: 'May 4, 2024',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'The Importance of Regular Cancer Screenings and Early Detection',
    thumbUrl: 'images/home_1/blog1.jpg',
    date: 'May 1, 2024',
    btnText: 'Learn More',
    href: '/blog/blog-details',
    socialShare: true,
  },
];
const departmentData = [
  {
    title: 'Nursing',
    iconUrl: 'images/icons/nuurse.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Personal support',
    iconUrl: 'images/icons/wheel.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Program manager.',
    iconUrl: 'images/icons/assist.svg',
    href: '/departments/department-details',
  },
  {
    title: 'LPN',
    iconUrl: 'images/icons/lpn.svg',
    href: '/departments/department-details',
  },
  {
    title: 'Direct support professional',
    iconUrl: 'images/icons/support.svg',
    href: '/departments/department-details',
  },
  
];

export default function Home() {
  pageTitle('Home');
  return (
    <>
     <HeroStyle2
        title="Compassionate care, exceptional results."
        subTitle=" Is for our individuals to live a fulfilling and quality life. We facilitate this vision by providing first-class caring and supportive services to individuals. "
        bgUrl={bg}
        imgUrl="/images/home_2/oldies.jpeg"
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
        btnText="CreekSide INC"
        btnUrl="/"
        funfactList={[
          { number: '20+', title: 'Years of experience' },
          { number: '95%', title: 'Patient satisfaction rating' },
          { number: '5000+', title: 'Patients served annually' },
          { number: '10+', title: 'Healthcare providers on staff' },
        ]}
      />
    
      {/* Start Feature Section */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
        style={{height:''}}
      >
        <FeaturesSection sectionTitle="Our Services" data={featureListData} />
      </Section>
      {/* End Feature Section */}
      {/* Start About Section */}
      <Section>
        <AboutSection
          imgUrl={care}
           spiningImgUrl="/images/home_1/about_mini.svg"
          title="Our Mission"
          subTitle="CREEKSIDE CORPORATION INC."
          featureList={[
            {
              featureListTitle:
                'CCI is a progressive nonprofit agency providing a wide range of community support ',
              featureListSubTitle:
                'We treat everyone with dignity and respect, love, and a family environment. We strive to ensure that all individuals live a quality life.'
                ,
            },
          ]}
        />
      </Section>
      {/* End About Section */}
      {/* Start Departments Section */}
      <Section topMd={185} topLg={150} topXl={110}>
        <DepartmentSection
          sectionTitle="Careers"
          bgUrl="images/home_1/department_bg.svg"
          data={departmentData}
        />
      </Section>

      {/* End Departments Section */}
      {/* Start Award Section */}
      {/* <Section topMd={185} topLg={140} topXl={100}>
        <AwardSection sectionTitle="Departments" data={awardData} />
      </Section> */}
      {/* End Award Section */}
      {/* Start Testimonial */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSection
          sectionTitle="Client Review"
      
        />
      </Section>

      <Section>
        <Cta
          title="Ready to Prioritize Your Health?"
          subTitle="Contact us now to schedule your appointment and take the first step towards a healthier, happier you."
          bgUrl={join}
          btnUrl="/appointments"
          btnText="Booking Now"
        />
      </Section>
      {/* End Testimonial */}
      {/* Start Banner Section */}
     
      {/* End Banner Section */}
      {/* Start Blog Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <BlogSection
          sectionTitleUp="Latest Update"
          sectionTitle="BLOG POSTS"
          data={blogData}
        />
      </Section>
      {/* End Blog Section */}
      {/* Start Appointment Section */}
      <Section topMd={190} topLg={145} topXl={105} id="appointment">
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl={appointment}
        />
      </Section>
      {/* End Appointment Section */}
      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Frequently asked questions"
          
        />
      </Section>
      {/* End FAQ Section */}
      {/* Start Brand Section */}
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
       
      </Section>
      {/* End Brand Section */}
    </>
  );
}
