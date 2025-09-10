import React from 'react';
import PageShell from '../components/PageShell';
import { Link } from 'react-router-dom';

const Admissions: React.FC = () => {
  return (
    <PageShell title="Admissions">
      <div className="max-w-4xl">
        <p className="mb-10 text-xl text-gray-600">
          Thank you for your interest in Southpoint School. We welcome aspiring students who are eager to learn, grow, and contribute to our vibrant school community. Our admissions process is designed to be straightforward and transparent.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-battle-green mb-4">Admission Process</h3>
          <ol className="list-decimal list-outside space-y-3 pl-5">
            <li>Submit the completed application form along with the required documents.</li>
            <li>Pay the application and testing fee.</li>
            <li>Undergo the entrance examination and interview.</li>
            <li>Receive the admission decision from the school registrar.</li>
            <li>Complete the enrollment process upon acceptance.</li>
          </ol>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-battle-green mb-4">Requirements</h3>
          <ul className="list-disc list-outside space-y-3 pl-5">
            <li>Photocopy of PSA Birth Certificate</li>
            <li>Report Card (Form 138) with eligibility to transfer</li>
            <li>Certificate of Good Moral Character</li>
            <li>2x2 recent colored pictures (2 copies)</li>
            <li>For foreign students: Alien Certificate of Registration (ACR) and student visa</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-battle-green mb-3">Important Dates</h3>
        <p>
          The application period for the academic year 2025-2026 will begin in January 2025. Please check back for specific dates and deadlines.
        </p>
      </div>

      <div className="mt-12 p-8 bg-green-50 border-l-4 border-battle-green rounded-r-lg text-center">
          <h4 className="font-bold text-2xl text-battle-green">Ready to Apply?</h4>
          <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
            Download the necessary forms from our Parent Resources page or contact our admissions office for more information. We look forward to welcoming you to the Southpoint family!
          </p>
          <Link to="/parent-resources" className="inline-block mt-6 bg-battle-green text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors transform hover:scale-105 shadow-md">
            Get Forms
          </Link>
      </div>

    </PageShell>
  );
};

export default Admissions;