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
            title="Preschool (Nursery, Kinder 1 & 2)"
            description="Our preschool program provides a nurturing and play-based learning environment where young children can develop social, emotional, and cognitive skills. We focus on foundational literacy and numeracy through engaging activities."
            imageUrl="https://images.unsplash.com/photo-1518611525243-65d1b71c89a7?q=80&w=2670&auto=format&fit=crop"
        />
        <AcademicLevel
            id="grade-school"
            title="Grade School (Grades 1-6)"
            description="The grade school curriculum builds on the foundations of preschool, with a focus on core subjects such as English, Math, Science, and Filipino. We integrate values education and co-curricular activities to ensure holistic development."
            imageUrl="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop"
            reverse={true}
        />
        <AcademicLevel
            id="junior-high"
            title="Junior High School (Grades 7-10)"
            description="Our junior high school program challenges students with a more rigorous academic load, preparing them for the complexities of senior high school. We offer various clubs and organizations to develop leadership and teamwork."
            imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop"
        />
        <AcademicLevel
            id="senior-high"
            title="Senior High School (Grades 11-12)"
            description="We offer various academic tracks and strands in senior high school, allowing students to specialize in fields aligned with their career aspirations. Our program is designed to meet the requirements for admission to top universities."
            imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
            reverse={true}
        />
      </div>

    </PageShell>
  );
};

export default Academics;
