import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageShell from '../components/PageShell';

const AcademicLevel: React.FC<{ id: string; title: string; description: string; imageUrl: string; reverse?: boolean }> = ({ id, title, description, imageUrl, reverse = false }) => (
    <div id={id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 scroll-mt-24 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <img src={imageUrl} alt={title} className="w-full md:w-5/12 h-80 object-cover rounded-lg shadow-xl" />
        <div className="md:w-7/12">
            <h3 className="text-3xl font-bold text-battle-green mb-4">{title}</h3>
            <p className="text-lg">{description}</p>
        </div>
    </div>
);


const Academics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove the '#'
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location]);

  return (
    <PageShell title="Academics">
      <p className="mb-16 text-xl max-w-4xl text-gray-600">
        Our academic programs are designed to provide a comprehensive and challenging curriculum that prepares students for higher education and beyond. We focus on developing critical thinking, creativity, and a passion for lifelong learning.
      </p>

      <div className="space-y-16">
        <AcademicLevel
          id="preschool"
          title="Preschool (Pre-K1, Pre-K2, and Kindergarten)"
          description="Our Preschool program provides a nurturing, play-based environment where every child is at the heart of learning—curious, imaginative, and eager to explore. Through developmentally appropriate activities, we foster social, emotional, and cognitive growth while building strong foundations in literacy and numeracy. By learning through discovery, children gain the skills, confidence, and love for learning that prepare them for lifelong success."
          imageUrl="images/spsrandom6.jpg"
        />
        <AcademicLevel
          id="lower-school"
          title="Lower School (Grades 1-3)"
          description="Our Lower School program builds on the strong foundations of Preschool, focusing on core subjects like English, Math, Science, and Filipino while integrating values education and co-curricular activities for holistic growth. In these early years, we lay the groundwork for academic success through multi-sensory teaching and active learning, supporting all types of learners. Students sharpen their thinking skills, strengthen literacy and numeracy, and engage in creative tasks that develop confidence and curiosity."
          imageUrl="images/spsrandom4.jpg"
          reverse={true}
        />
        <AcademicLevel
          id="middle-school"
          title="Middle School (Grades 4-6)"
          description="In Middle School, we challenge growing minds while nurturing confidence and independence. This stage marks an important transition as students begin to explore more complex ideas and strengthen their sense of identity. Through the Dynamic Learning Program (DLP), they are trained to think critically, work collaboratively, and take greater responsibility for their learning. With opportunities in academics, arts, sports, and leadership, our Middle School students are equipped with the skills, discipline, and resilience needed to thrive in the demanding years of high school."
          imageUrl="images/spsrandom5.jpg"
        />
        <AcademicLevel
          id="junior-high"
          title="Junior High School (Grades 7-10)"
          description="Our Junior High School program balances academic rigor with emotional and social growth, preparing students for the challenges of Senior High. While students are guided through a more demanding academic load, we also emphasize respect, empathy, and mutual care as essential values. Through clubs, organizations, and co-curricular activities, they develop leadership, teamwork, and a strong sense of responsibility, helping them grow in both confidence and purpose."
          imageUrl="images/spsrandom1.jpg"
          reverse={true}
        />
        <AcademicLevel
          id="senior-high"
          title="Senior High School (Grades 11-12)"
          description="Our Senior High School program equips students with the knowledge and skills they need for success in college, employment, or entrepreneurship. With a future-focused curriculum, we offer academic tracks and strands that allow students to specialize in fields aligned with their passions and career aspirations. Career guidance, real-world readiness, and rigorous preparation ensure they meet the standards of top universities while gaining confidence to pursue meaningful pathways beyond graduation."
          imageUrl="images/boy-classroom.jpeg"
        />
      </div>

    </PageShell>
  );
};

export default Academics;
