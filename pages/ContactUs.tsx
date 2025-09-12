import React from 'react';
import PageShell from '../components/PageShell';

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-battle-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-battle-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);
const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-battle-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-battle-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ContactUs: React.FC = () => {
  return (
    <PageShell title="Contact Us">
        <div className="max-w-4xl">
            <p className="mb-12 text-xl text-gray-600">
                We are here to assist you. Whether you have questions about admissions, our academic programs, or any other inquiries, please feel free to reach out using the information below or by sending us a message.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-bold text-battle-green mb-6">Contact Information</h3>
                <div className="space-y-6 text-gray-700">
                    <div className="flex items-start">
                        <LocationIcon />
                        <div className="ml-4">
                            <h4 className="font-semibold">Address</h4>
                            <p>Eden Street, Maa, Davao City, Philippines</p>
                        </div>
                    </div>
                     <div className="flex items-start">
                        <PhoneIcon />
                        <div className="ml-4">
                            <h4 className="font-semibold">Contact Numbers</h4>
                            <p><strong>Finance Office:</strong></p>
                            <p>(082) 327-8550</p>
                            <p>Look for Honey Mae</p>
                            <p><strong>Registrar's Office:</strong></p>
                            <p>(0917) 128 3489</p>
                            <p>Look for Teacher Margie</p>
                            
                        </div>
                    </div>
                    <div className="flex items-start">
                        <EmailIcon />
                        <div className="ml-4">
                            <h4 className="font-semibold">Email</h4>
                            <p>principal@southpointschool.edu.ph</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <ClockIcon />
                        <div className="ml-4">
                            <h4 className="font-semibold">Office Hours</h4>
                            <p>Monday - Friday, 8:00 AM - 4:00 PM</p>
                        </div>
                    </div>
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

        <div>
            <h3 className="text-3xl font-bold text-battle-green mb-6 text-center">Our Location</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.6807523696787!2d125.58707082445812!3d7.084023203382194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d1632352e97%3A0x5f444349e769aaec!2sSouthpoint%20School%2C%20Inc.!5e0!3m2!1sen!2sph!4v1757514128076!5m2!1sen!2sph"
                    className="w-full h-96"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Southpoint School Location Map"
                ></iframe>
            </div>
        </div>
    </PageShell>
  );
};

export default ContactUs;
