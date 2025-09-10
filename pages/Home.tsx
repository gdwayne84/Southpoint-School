import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const carouselImages = [
    {
        src: 'https://images.unsplash.com/photo-1681567012382-89ef28797e8b?q=80&w=2070&auto=format&fit=crop',
        alt: 'Happy graduates tossing their caps in the air'
    },
    {
        src: 'https://images.unsplash.com/photo-1641395312870-5913789014cd?q=80&w=2070&auto=format&fit=crop',
        alt: 'Engaged students listening to a lecture in a modern classroom'
    },
    {
        src: 'https://images.unsplash.com/photo-1642475668457-0cb6c801c988?q=80&w=2026&auto=format&fit=crop',
        alt: 'A diverse team of students collaborating around a table'
    }
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-80 md:h-[420px] w-full"> {/* explicit md height */}
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};


const Hero = () => (
    <div className="relative bg-battle-green w-full text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 items-center gap-8 py-20 md:py-32">
                <div className="relative z-10 text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
                        Beyond the Classroom:
                        <br />
                        <span className="text-green-300">Where Potential Meets Purpose.</span>
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg sm:text-xl text-green-100">
                        We are more than a school; we are a launchpad for the next generation of leaders, innovators, and compassionate global citizens.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
                        <Link to="/admissions" className="bg-white hover:bg-gray-200 text-battle-green font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                            Join Our Community
                        </Link>
                        <Link to="/academics" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 w-full sm:w-auto">
                            Explore Programs
                        </Link>
                    </div>
                </div>
                <div className="relative min-h-[320px] md:h-auto">
                    <HeroCarousel />
                </div>
            </div>
        </div>
    </div>
);

const DifferenceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-left transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-green-100 text-battle-green mb-5">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const LearningIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const LeadershipIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 1.5l.93 2.28a1 1 0 00.94.67h2.38a1 1 0 01.97 1.24l-1.93 4.5a1 1 0 00.33 1.11l1.9 1.9a1 1 0 01-.7 1.7L15 15.5a1 1 0 00-1 .5l-1 2a1 1 0 01-1.78 0l-1-2a1 1 0 00-1-.5l-2.75-.55a1 1 0 01-.7-1.7l1.9-1.9a1 1 0 00.33-1.11l-1.93-4.5a1 1 0 01.97-1.24h2.38a1 1 0 00.94-.67L12 1.5z" /></svg>;
const InnovationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;


const TestimonialCard: React.FC<{ quote: string; name: string; role: string; img: string; }> = ({ quote, name, role, img }) => (
    <div className="bg-battle-green p-8 rounded-2xl shadow-lg text-white">
        <p className="text-lg italic text-green-100">"{quote}"</p>
        <div className="flex items-center mt-6">
            <img src={img} alt={name} className="w-14 h-14 rounded-full object-cover" />
            <div className="ml-4">
                <p className="font-bold text-white">{name}</p>
                <p className="text-green-200">{role}</p>
            </div>
        </div>
    </div>
);

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <Hero />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    The Southpoint Difference
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                    We go beyond traditional education to provide an experience that shapes not just great students, but exceptional individuals.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 mt-12">
                <DifferenceCard
                    title="Personalized Learning Paths"
                    description="Our low student-teacher ratio allows us to tailor educational strategies to individual strengths and passions, ensuring every student thrives."
                    icon={<LearningIcon />}
                />
                <DifferenceCard
                    title="Leadership & Character"
                    description="We instill core values and provide real-world leadership opportunities, cultivating confident and ethical citizens of tomorrow."
                    icon={<LeadershipIcon />}
                />
                <DifferenceCard
                    title="Innovation for a Global Future"
                    description="With a curriculum focused on technology, critical thinking, and global awareness, we prepare students to excel in a rapidly changing world."
                    icon={<InnovationIcon />}
                />
            </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                     <img
                        src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2670&auto=format&fit=crop"
                        alt="Engaged students in a modern classroom"
                        className="rounded-2xl shadow-xl w-full h-auto object-cover"
                    />
                </div>
                <div className="text-center md:text-left">
                     <h2 className="text-4xl font-extrabold text-gray-900">
                        A Community Built for Growth
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                       Discover an inclusive and supportive environment where lifelong friendships are forged, and a passion for learning is ignited. Our dedicated faculty are mentors who guide each student on their unique journey to success.
                    </p>
                    <div className="mt-8">
                         <Link to="/about" className="text-battle-green font-bold text-lg hover:underline">
                            Meet Our Team &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    Hear From Our Community
                </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
                <TestimonialCard
                    quote="Southpoint didn't just teach my daughter academics; it taught her confidence and compassion. The teachers genuinely care, and we've seen her blossom here."
                    name="Jennifer P."
                    role="Parent"
                    img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop"
                />
                <TestimonialCard
                    quote="The skills and friendships I gained at Southpoint were the perfect foundation for university and my career. I felt prepared for every challenge that came my way."
                    name="Michael B."
                    role="Alumnus, Class of 2018"
                    img="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=400&auto=format&fit=crop"
                />
            </div>
        </div>
      </section>

       <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center bg-green-50 p-10 rounded-2xl">
                <h2 className="text-4xl font-extrabold text-battle-green">Ready to Begin Your Journey?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-700">
                    Take the next step. Schedule a visit to experience our vibrant campus or start your application today.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                     <Link to="/contact" className="bg-battle-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-md w-full sm:w-auto">
                        Schedule a Visit
                    </Link>
                    <Link to="/admissions" className="bg-white hover:bg-gray-200 text-battle-green font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-md w-full sm:w-auto">
                        Apply Now
                    </Link>
                </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
