import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const carouselImages = [
    {
        src: 'images/girl-ict-lab.jpeg',
        alt: 'a girl raising hand in ict lab'
    },
    {
        src: 'images/boy-classroom.jpeg',
        alt: 'boy student smiling classroom high school'
    },
    {
        src: 'images/students-gym2.jpeg',
        alt: 'students posing gymnasium smiling'
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

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2" style="z-index: 100;">
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
                        Educating for Excellence.
                        <br />
                        <span className="text-green-300">Inspiring for Life.</span>
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg sm:text-xl text-green-100">
                    More than academics, we mentor and guide every student to grow in values, leadership, and lifelong learning.
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
        quote: "Southpoint School is a great place for growth! It has transformed not just students but also teachers—academically, professionally, and personally.",
        name: "Eunice Grace",
        role: "Former Teacher",
        img: "https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-1/539050564_1798150097758394_744049408729123558_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEhxzjQ5cwFu4TEZiFEfco7NDsGwuk7T8A0OwbC6TtPwJO2nl0X3xZO5ccOnRNe_tFS6rekzv9Zd56l0-cEa_X5&_nc_ohc=L80UzF1ES8UQ7kNvwEd0g6u&_nc_oc=Adk8163u_8G0bNmjWVKdiuHr6-h0TZ5e16a_JnhbhgMjRN6TXKdCGr5aFXJ61RWjxIWq7QPCCVhyqyjxGFoBGB4T&_nc_zt=24&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=uklQl1YIOOdBm4KvONvqNg&oh=00_Afb9aZTNoJf4hrJUGxrQnPdXz5GEeFp28oab9xzqjifZYw&oe=68C85AE9"
    },
    {
        quote: "Excellent teachers, staff, and students—I truly miss the meditation time! Southpoint has such a calm, relaxing environment. It’s a place that nurtures both the mind and heart.",
        name: "Samantha Alexis Gok-ong",
        role: "Former Student",
        img: "https://lh3.googleusercontent.com/a-/ALV-UjWsPoRD66ZuR-Q0bSd8VkOhJT1LnoYoiZsSIMUoHqE0UYiJEZWt=w72-h72-p-rp-mo-br100"
    },
    {
        quote: "“Good teachers, good students, and a great environment overall. Honestly, it’s one of the best private schools around (besides ADDU), and you can really feel the difference here.”",
        name: "Spoopy B",
        role: "Former Parent",
        img: "https://lh3.googleusercontent.com/a-/ALV-UjVsl0GJx1VAuFBas-uyKT1COlZh715Fw5QCz9VZNqfAhWXbe6IL=w144-h144-p-rp-mo-br100"
    },
    {
        quote: "An educational institution that molds students into compassionate, servant-hearted leaders. Southpoint builds both character and competence.",
        name: "Clasyl Nellas",
        role: "Former Teacher",
        img: "https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-1/398761976_7472648496083475_8939608431710742451_n.jpg?stp=cp0_dst-jpg_s80x80_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFzoHWp8jhSNaHalcnilkLu18yckGRgiOzXzJyQZGCI7HrVV3zuHJCj8gkWIp1s2VgDgMolaWbyDe1AtOWP1N3H&_nc_ohc=YSjkgWyuWhkQ7kNvwFRaWtA&_nc_oc=Adkcn9WXPnjB4RffjNZqL6wqPb6EtQ7E-fjZXiP5dKMZBAoeDXTi2NZa3u8ue_kHsNXd99bN24ZYA4OIt_NsfY4A&_nc_zt=24&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=lwjUlok_U7v-W2hQynVJiw&oh=00_AfZX8U8Thuh034wGBYMqHjBZvoEIB4xM7gWUAGIvHYb3_g&oe=68C83FCD"
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
                    The Southpoint School Difference
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
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 mt-16 h-[1200px] md:h-[400px]">
                <ProgramCard title="Preschool" img="images/spsrandom17.jpg" link="/academics#preschool" />
                <ProgramCard title="Lower School" img="images/spsrandom22.jpg" link="/academics#lower-school" />
                <ProgramCard title="Middle School" img="images/spsrandom19.jpg" link="/academics#middle-school" />
                <ProgramCard title="Junior High" img="images/spsrandom1.jpg" link="/academics#junior-high" />
                <ProgramCard title="Senior High" img="images/students-outside-gym.jpeg" link="/academics#senior-high" />
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

      <section className="relative bg-black py-20 bg-cover bg-center" style={{backgroundImage: "url('images/spsrandom8.jpg')" }}>
       <div className="absolute inset-0 bg-battle-green/80"></div>
       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
           <h2 className="text-4xl sm:text-5xl font-extrabold">Ready to Begin Your Journey?</h2>
           <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200">
               Take the next step. Schedule a visit to experience our vibrant campus or contact us today.
           </p>
           <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
               <Link to="/admissions" className="bg-white hover:bg-gray-200 text-battle-green font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                   Enroll Now
               </Link>
               <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 w-full sm:w-auto">
                     Contact Us
               </Link>
           </div>
       </div>
     </section>

    </div>
  );
};

export default Home;
