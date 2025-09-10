import React from 'react';
import PageShell from '../components/PageShell';

const staff = {
    administration: [
        { name: 'Dr. Evelyn Reed', title: 'School President', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop' },
        { name: 'Mr. Marcus Cole', title: 'School Principal', img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&h=400&auto=format&fit=crop' },
        { name: 'Ms. Isabella Garcia', title: 'Academic Coordinator', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400&auto=format&fit=crop' },
    ],
    faculty: [
        { name: 'Dr. Anita Sharma', title: 'Head of Science Dept.', img: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=400&h=400&auto=format&fit=crop' },
        { name: 'Mr. Ben Carter', title: 'Head of Math Dept.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop' },
        { name: 'Ms. Chloe Nguyen', title: 'Head of English Dept.', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&auto=format&fit=crop' },
        { name: 'Mr. Liam O\'Connell', title: 'Head of Social Studies', img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=400&h=400&auto=format&fit=crop' },
    ],
    staff: [
        { name: 'Mr. Kenji Tanaka', title: 'Registrar', img: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=400&h=400&auto=format&fit=crop' },
        { name: 'Ms. Fatima Al-Jamil', title: 'Guidance Counselor', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&auto=format&fit=crop' },
    ]
}

const StaffCard: React.FC<{ name: string; title: string; img: string; }> = ({ name, title, img }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1.5 transition-transform duration-300 group text-center">
        <div className="h-72">
            <img src={img} alt={`Photo of ${name}`} className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="p-5">
          <h4 className="font-bold text-xl text-gray-900 tracking-wide">{name}</h4>
          <p className="text-battle-green font-semibold mt-1">{title}</p>
        </div>
    </div>
)

const AboutUs: React.FC = () => {
  return (
    <PageShell title="Our School">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our History</h2>
                <p className="mb-4">
                    Southpoint School was founded in 1993 with a vision to provide quality education to the community of Mandaue City and its neighboring towns. What began as a humble preschool has grown into a complete basic education institution, offering programs from nursery to senior high school.
                </p>
                <p className="mb-4">
                    Over the years, we have remained committed to our founding principles of academic excellence, character formation, and community service. Our campus has expanded, our facilities have modernized, but our core mission to nurture every child's potential remains unchanged.
                </p>
                
                <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Our Philosophy</h2>
                <p>
                    We believe that education is a holistic process. It is not just about imparting knowledge but also about building character, fostering critical thinking, and inspiring a lifelong love for learning. We strive to create a safe, inclusive, and challenging environment where students can explore their interests, develop their talents, and grow into confident and compassionate individuals.
                </p>
            </div>
            <div className="order-1 md:order-2">
                <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2686&auto=format&fit=crop" alt="Beautiful modern school campus" className="rounded-xl shadow-2xl w-full h-auto object-cover"/>
            </div>
        </div>

        <div className="mt-20 pt-16 border-t-2 border-gray-100">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
            
            <section className="mb-16">
                <h3 className="text-3xl font-semibold text-center text-battle-green mb-8">Administration</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {staff.administration.map(person => <StaffCard key={person.name} {...person} />)}
                </div>
            </section>

            <section className="mb-16">
                <h3 className="text-3xl font-semibold text-center text-battle-green mb-8">Faculty Heads</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {staff.faculty.map(person => <StaffCard key={person.name} {...person} />)}
                </div>
            </section>

             <section>
                <h3 className="text-3xl font-semibold text-center text-battle-green mb-8">Staff</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto">
                    {staff.staff.map(person => <StaffCard key={person.name} {...person} />)}
                </div>
            </section>
        </div>
    </PageShell>
  );
};

export default AboutUs;