import React from 'react';
import PageShell from '../components/PageShell';

const ActivityCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
        <div className="p-6">
            <h3 className="text-2xl font-bold text-battle-green mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);


const StudentLife: React.FC = () => {
  return (
    <PageShell title="Student Life">
      <p className="mb-12 text-xl max-w-4xl text-gray-600">
        At Southpoint School, education extends beyond the classroom. We offer a wide range of co-curricular activities, clubs, and events that provide students with opportunities to explore their interests, develop new skills, and build lasting friendships.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <ActivityCard
            title="Athletics"
            description="Our sports program promotes physical fitness, sportsmanship, and teamwork. Students can join various varsity teams, including basketball, volleyball, and soccer, and compete in inter-school leagues."
            imageUrl="https://images.unsplash.com/photo-1575052814080-384362c3f3a9?q=80&w=2670&auto=format&fit=crop"
        />
        <ActivityCard
            title="Clubs and Organizations"
            description="From the Science Club to the Glee Club, there's a place for every student to pursue their passion. Our student-led organizations provide platforms for leadership development and community engagement."
            imageUrl="https://images.unsplash.com/photo-1531482615713-2c657710065d?q=80&w=2670&auto=format&fit=crop"
        />
        <ActivityCard
            title="Annual Events"
            description="The school year is marked by memorable events such as the Foundation Day celebration, the Family Day, and the annual school fair. These events bring the entire Southpoint community together."
            imageUrl="https://images.unsplash.com/photo-1511795409834-ef04bbd51622?q=80&w=2670&auto=format&fit=crop"
        />
        <ActivityCard
            title="Community Outreach"
            description="We believe in the value of service. Our community outreach programs encourage students to become active and compassionate citizens by participating in activities that benefit society."
            imageUrl="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2670&auto=format&fit=crop"
        />
      </div>
    </PageShell>
  );
};

export default StudentLife;