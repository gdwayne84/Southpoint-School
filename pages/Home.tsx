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
                        More Than a School.
                        <br />
                        <span className="text-green-300">A Place to Grow.</span>
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg sm:text-xl text-green-100">
                    At Southpoint School, we don’t just teach;we inspire, mentor, and shape every student to become the best version of themselves.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
                        <Link to="/admissions" className="bg-white hover:bg-gray-200 text-battle-green font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                            Enroll Now
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


const LearningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-battle-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
);
const LeadershipIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-battle-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
);
const InnovationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-battle-green"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2a7 7 0 00-4 12.75V17a2 2 0 002 2h4a2 2 0 002-2v-2.25A7 7 0 0012 2z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 21h6m-3 0v1"
    />
  </svg>
);

const DifferenceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
        <div className="bg-green-100 p-4 rounded-full mb-6">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const ProgramCard: React.FC<{ title: string; img: string; link: string; }> = ({ title, img, link }) => (
    <Link to={link} className="group relative block rounded-2xl overflow-hidden shadow-lg h-full">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <div className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">
                Learn More &rarr;
            </div>
        </div>
    </Link>
);

const testimonials = [
    {
        quote: "Southpoint didn't just teach my daughter academics; it taught her confidence and compassion. The teachers genuinely care, and we've seen her blossom here.",
        name: "Jennifer P.",
        role: "Parent",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
        quote: "The skills and friendships I gained at Southpoint were the perfect foundation for university and my career. I felt prepared for every challenge that came my way.",
        name: "Michael B.",
        role: "Alumnus, Class of 2018",
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
        quote: "As an educator, I'm proud to be part of a community that prioritizes not just academic rigor, but also the emotional and social well-being of every student.",
        name: "Ms. Chloe Nguyen",
        role: "Faculty",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&auto=format&fit=crop"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const slider = setInterval(nextSlide, 7000); // Auto-slide every 7 seconds
        return () => clearInterval(slider);
    }, []);

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden relative h-80">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col justify-center">
                            <p className="text-xl italic text-gray-700 text-center mb-6">"{testimonial.quote}"</p>
                            <div className="flex items-center justify-center">
                                <img src={testimonial.img} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                                <div className="ml-4 text-left">
                                    <p className="font-bold text-battle-green">{testimonial.name}</p>
                                    <p className="text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} aria-label="Previous testimonial" className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-battle-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} aria-label="Next testimonial" className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-battle-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
    );
};


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
                At Southpoint School, education is a journey of both heart and mind. More than academic excellence, we nurture future-ready leaders with strong values and a love for lifelong learning.
                <br /><br />
                What sets us apart is our commitment to developing the whole child through:
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 mt-16">
                <DifferenceCard
                    title="Personalized Learning"
                    description="Our low student-teacher ratio allows us to tailor educational strategies to individual strengths, ensuring every student thrives."
                    icon={<LearningIcon />}
                />
                <DifferenceCard
                    title="Leadership & Character"
                    description="We instill core values and provide real-world leadership opportunities, cultivating confident and ethical citizens of tomorrow."
                    icon={<LeadershipIcon />}
                />
                <DifferenceCard
                    title="Future-Ready Innovation"
                    description="With a curriculum focused on technology and global awareness, we prepare students to excel in a rapidly changing world."
                    icon={<InnovationIcon />}
                />
            </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Explore Our Programs</h2>
                <p className="mt-4 text-xl text-gray-600">From the first steps in preschool to the final years of senior high, we offer a complete and enriching educational journey.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-16 h-[400px]">
                <ProgramCard title="Preschool" img="https://images.unsplash.com/photo-1518611525243-65d1b71c89a7?q=80&w=2670&auto=format&fit=crop" link="/academics#preschool" />
                <ProgramCard title="Grade School" img="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop" link="/academics#grade-school" />
                <ProgramCard title="Junior High" img="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop" link="/academics#junior-high" />
                <ProgramCard title="Senior High" img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" link="/academics#senior-high" />
            </div>
        </div>
      </section>

      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    Voices of Our Community
                </h2>
            </div>
            <Testimonials />
        </div>
      </section>

       <section className="relative bg-battle-green py-20 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756ded668?q=80&w=2670&auto=format&fit=crop')"}}>
        <div className="absolute inset-0 bg-battle-green/80"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-extrabold">Ready to Begin Your Journey?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-green-100">
                Take the next step. Schedule a visit to experience our vibrant campus or start your application today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link to="/contact" className="bg-white hover:bg-gray-200 text-battle-green font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                    Schedule a Visit
                </Link>
                <Link to="/admissions" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 w-full sm:w-auto">
                    Apply Now
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
