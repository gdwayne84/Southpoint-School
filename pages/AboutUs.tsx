import React, { useState } from 'react';
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

const coreValues = [
    { title: 'Spirit', description: 'As inside so outside, each one shares in the nature of God' },
    { title: 'Trust', description: 'Confidence in the infinite goodness of God' },
    { title: 'Respect', description: 'With prejudice towards none, as each one is a spiritual being' },
    { title: 'Excellence', description: 'In personal standards, knowledge and competency' },
    { title: 'Creativity', description: 'Releasing the wondrous potential of the Universe and the self/spirit within' },
    { title: 'Leadership', description: 'Life of the quiet example—inspiring both the quick and the slow' },
    { title: 'Integrity', description: 'Consistent responsibility for their free personal choices' },
    { title: 'Grace', description: 'Constant awareness of personal frailty and kindness to the broken' },
    { title: 'Humility', description: 'Living the present moment from True Self—not ego' },
    { title: 'Service', description: 'Joyfully and unconditionally regarding the well-being of others first' },
    { title: 'Dedication', description: 'Passionate pursuit and achievement of worthy and noble goals' },
    { title: 'Community', description: 'Awareness and care for the spiritual bonds uniting all people and creation' }
];


const StaffCard: React.FC<{ name: string; title: string; img: string; }> = ({ name, title, img }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group text-center">
        <div className="h-64 sm:h-72">
            <img src={img} alt={`Photo of ${name}`} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="p-5">
          <h4 className="font-bold text-xl text-gray-900">{name}</h4>
          <p className="text-battle-green font-medium mt-1">{title}</p>
        </div>
    </div>
)

const CoreValueCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white rounded-lg shadow p-6 text-left h-full">
        <h4 className="text-xl font-bold text-battle-green mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
    </div>
);

type StaffCategory = 'administration' | 'faculty' | 'staff';

const AboutUs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<StaffCategory>('administration');

    const renderStaffGrid = (category: StaffCategory) => {
        const staffList = staff[category];
        const gridClasses = {
            administration: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl',
            faculty: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-6xl',
            staff: 'grid-cols-1 sm:grid-cols-2 max-w-xl',
        };

        return (
            <div className={`grid ${gridClasses[category]} gap-8 mx-auto`}>
                {staffList.map(person => <StaffCard key={person.name} {...person} />)}
            </div>
        )
    };


  return (
    <div>
        {/* Section 1: Our Story */}
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                 <div className="max-w-4xl mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-battle-green mb-10">Our School</h1>
                    <p className="text-xl text-gray-600">Discover the history, philosophy, and values that define the Southpoint experience.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1 prose prose-lg max-w-none text-gray-700">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our History</h2>
                        <p>
                            Southpoint School was founded in 1993 with a vision to provide quality education to the community of Mandaue City and its neighboring towns. What began as a humble preschool has grown into a complete basic education institution, offering programs from nursery to senior high school.
                        </p>
                        <p>
                            Over the years, we have remained committed to our founding principles of academic excellence, character formation, and community service.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Our Philosophy</h2>
                        <p>
                            We believe that education is a holistic process. It is not just about imparting knowledge but also about building character, fostering critical thinking, and inspiring a lifelong love for learning. We strive to create a safe, inclusive, and challenging environment for all.
                        </p>
                    </div>
                    <div className="order-1 md:order-2">
                        <img
                            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2686&auto=format&fit=crop"
                            alt="Southpoint School campus with students"
                            className="w-full h-auto object-cover rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* School Video Section */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                A Glimpse Into Our School
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div
                className="relative w-full overflow-hidden rounded-xl shadow-2xl"
                style={{ paddingTop: "56.25%" }} // keeps 16:9 aspect ratio
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/P025xCP5tIA"
                  title="Southpoint School Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-3xl font-bold text-battle-green mb-4">Our Vision</h3>
                        <p className="text-lg text-gray-600">Ours is a vision of a brave new Philippines. We see Davao City, Mindanao and the rest of the nation transforming into a righteous, joyful, peaceful, and prosperous community of families—men and women who are whole and skillful, wisely managing their personal and civic affairs.</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-battle-green mb-4">Mission Statement</h3>
                        <p className="text-lg text-gray-600 mb-4">We seek to establish an educational institution and system that will train and mentor students to be servant leaders who will embody the character of Christ:</p>
                        <ul className="list-disc list-outside space-y-2 pl-5 text-lg text-gray-600">
                            <li>The passion to excel</li>
                            <li>A heart to serve</li>
                            <li>An obligation to lead</li>
                            <li>A willingness to cooperate</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-green-50 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {coreValues.map(value => <CoreValueCard key={value.title} {...value} />)}
                </div>
            </div>
        </div>

        {/* Leadership & Faculty Section */}
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Leadership & Faculty</h2>
                </div>
                <div className="flex justify-center border-b border-gray-200 mb-12">
                    <button onClick={() => setActiveTab('administration')} className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 ${activeTab === 'administration' ? 'border-b-2 border-battle-green text-battle-green' : 'text-gray-500 hover:text-gray-800'}`}>Administration</button>
                    <button onClick={() => setActiveTab('faculty')} className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 ${activeTab === 'faculty' ? 'border-b-2 border-battle-green text-battle-green' : 'text-gray-500 hover:text-gray-800'}`}>Faculty Heads</button>
                    <button onClick={() => setActiveTab('staff')} className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 ${activeTab === 'staff' ? 'border-b-2 border-battle-green text-battle-green' : 'text-gray-500 hover:text-gray-800'}`}>Staff</button>
                </div>
                <div>
                   {renderStaffGrid(activeTab)}
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutUs;
