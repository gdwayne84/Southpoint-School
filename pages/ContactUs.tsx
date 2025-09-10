import React from 'react';
import PageShell from '../components/PageShell';

const ContactUs: React.FC = () => {
  return (
    <PageShell title="Contact Us">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-battle-green mb-6">Get in Touch</h3>
          <p className="mb-6 text-lg">
            We are here to assist you. Whether you have questions about admissions, our academic programs, or any other inquiries, please feel free to reach out to us.
          </p>
          <div className="space-y-4 text-gray-700">
            <p><strong>Address:</strong> S.E. Jayme Street, Basak, Mandaue City, 6014 Cebu, Philippines</p>
            <p><strong>Phone:</strong> +63 (32) 346-788</p>
            <p><strong>Email:</strong> info@southpointschool.edu.ph</p>
            <p><strong>Office Hours:</strong> Monday - Friday, 8:00 AM - 4:00 PM</p>
          </div>
          <div className="mt-8 rounded-lg overflow-hidden shadow-md">
            <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2531&auto=format&fit=crop" alt="A clean map showing a city location" className="w-full h-auto" />
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
            <form>
                <h3 className="text-3xl font-bold text-battle-green mb-6">Send us a Message</h3>
                <div className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600" placeholder="John Doe" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" rows={5} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600" placeholder="Your message here..."></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-battle-green text-white py-3 px-4 rounded-md hover:bg-green-700 font-semibold transition-colors duration-300 text-lg shadow-md hover:shadow-lg">
                            Submit Message
                        </button>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </PageShell>
  );
};

export default ContactUs;