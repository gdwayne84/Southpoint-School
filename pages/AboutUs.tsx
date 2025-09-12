import React, { useState } from 'react';
import PageShell from '../components/PageShell';

const staff = {
    administration: [
        { name: 'Hernani Jesse L. Abrigo, MBA', title: 'School Administrator', img: 'images/abrigo_jesse.jpg' },
        { name: 'Cherryl S. Abrigo, MA', title: 'Curriculum Development Head', img: 'images/abrigo_cherryl.jpg' },
        { name: 'Judith C. Bacarro, Ed.D.', title: 'School Principal', img: 'images/bacarro.jpg' },
        { name: 'Margie A. Paragas, LPT', title: 'School Registrar', img: 'images/paragas.png' },
        { name: 'Jozelle T. Abrigo', title: 'Guidance Officer', img: 'images/abrigo_jetz.jpg' },
        { name: 'Gary Dwayne A. Demecillo', title: 'Systems Administrator', img: 'images/demecillo_dwayne.jpg' },
        { name: 'Adora C. Abunales', title: 'Clinic In-Charge', img: 'images/abunales.jpg' },
        { name: 'Sixto L. Paragas', title: 'Finance Personnel/Property Custodian', img: 'images/paragas_sixto.jpg' },
        { name: 'Honey Mae P. Donaire', title: 'Cashier', img: 'images/donaire.jpg' },
    ],
    faculty: [
        { name: 'Rea Grace L. Demecillo', title: 'Senior High School Coordinator', img: 'images/demecillo_rea.jpg' },
        { name: 'Evelyn B. Medrano, MAST', title: 'Junior High School Coordinator', img: 'images/medrano.jpg' },
        { name: 'Noeme S. Hanggam, LPT', title: 'Middle School Coordinator', img: 'images/hanggam.jpg' },
        { name: 'Amelita B. Quimpo, LPT', title: 'Lower School Coordinator', img: 'images/quimpo.jpg' },
        { name: 'Margie A. Paragas, LPT', title: 'Preschool Coordinator', img: 'images/paragas.png' },
    ],
    staff: [
        { name: 'Eleazar M. Panogalinog', title: 'Production Department Head', img: 'images/panogalinog.jpg' },
        { name: 'Alvin S. Aduana', title: 'General Services Department Head', img: 'images/aduana.jpg' },
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
            administration: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
            faculty: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4',
            staff: 'grid-cols-1 sm:grid-cols-2',
        };

        return (
            <div className={`grid ${gridClasses[category]} gap-8`}>
                {staffList.map(person => <StaffCard key={person.name} {...person} />)}
            </div>
        )
    };


  return (
    <div>
        {/* Section 1: Our Story */}
        <div className="bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-4xl mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-battle-green mb-10">Our School</h1>
                    <p className="text-xl text-gray-600">Discover the history, mission, vision, and values that define the Southpoint experience.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our History</h2>
                        <p>
                        Southpoint School was founded in 1995 by parents who sought quality education and character formation guided by caring teachers. From the start, the school believed that the crucial years from early childhood to the teenage stage should reinforce the values of family and community.
                        </p><br />
                        <p>
                        Built on the core values of character, intelligence, and leadership, Southpoint prepares students not only for college but also for life—helping them grow in discipline, stability, and purpose.
                        </p><br />
                        <p>
                        What began with a single Preschool class has now expanded into a complete Elementary and High School program. From a small rented space, Southpoint has grown into its own campus, welcoming students from diverse cultural and religious backgrounds across Davao City.
                        </p>
                    </div>
                    <div>
                        <img
                            src="images/old-sps-bldg.png"
                            alt="Old Southpoint School building"
                            className="w-full h-auto object-cover rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* School Video Section */}
        <div className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold text-gray-800 mb-12">
                A Glimpse Into Our School
              </h2>
            </div>
            <div className="max-w-4xl">
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
        <div className="bg-gray-50 py-20">
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
                <div className="max-w-4xl">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Core Values</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {coreValues.map(value => <CoreValueCard key={value.title} {...value} />)}
                </div>
            </div>
        </div>

        {/* Leadership & Faculty Section */}
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">Leadership & Faculty</h2>
                </div>
                <div className="flex justify-start border-b border-gray-200 mb-12">
                    <button onClick={() => setActiveTab('administration')} className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 ${activeTab === 'administration' ? 'border-b-2 border-battle-green text-battle-green' : 'text-gray-500 hover:text-gray-800'}`}>Administration</button>
                    <button onClick={() => setActiveTab('faculty')} className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 ${activeTab === 'faculty' ? 'border-b-2 border-battle-green text-battle-green' : 'text-gray-500 hover:text-gray-800'}`}>Department Heads</button>
                    <button onClick={() => setActiveTab('staff')} className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 ${activeTab === 'staff' ? 'border-b-2 border-battle-green text-battle-green' : 'text-gray-500 hover:text-gray-800'}`}>Staff</button>
                </div>
                <div className="flex justify-start">
                   {renderStaffGrid(activeTab)}
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutUs;
