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
            description="Our athletics program builds more than strength and skill—it cultivates teamwork, discipline, and sportsmanship. Students can take part in soccer, basketball, volleyball, and badminton, representing Southpoint in friendly matches and inter-school competitions."
            imageUrl="images/spsrandom33.jpg"
        />
        <ActivityCard
            title="Arts"
            description="Through performing arts, visual arts, and media arts, students are given the freedom to express creativity and imagination. A highlight of the year is our major school production, where students showcase their talents on stage in beloved classics such as Matilda the Musical, Encanto, Hairspray, and Moana. Whether on stage, canvas, or in song, the arts program nurtures talent, confidence, and a lifelong love for culture and self-expression."
            imageUrl="images/spsrandom32.jpg"
        />
        <ActivityCard
            title="Student Council "
            description="The Student Council provides opportunities for leadership, service, and responsibility. By organizing events such as Teacher’s Day, school visitations, community outreach, and leadership training, student leaders learn to inspire and create meaningful impact."
            imageUrl="images/spsrandom34.jpg"
        />
        <ActivityCard
            title="Mindfulness"
            description="At Southpoint, we value inner growth as much as academic achievement. Monthly convocations, daily prayer, meditation, and other mindfulness exercises encourage students to pause, reflect, and nurture a calm, focused, and compassionate spirit. Together, we also send love and intentions to our city and country, fostering a deeper sense of connection, gratitude, and hope for the wider community."
            imageUrl="images/spsrandom35.jpg"
        />
      </div>
    </PageShell>
  );
};

export default StudentLife;
