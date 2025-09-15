import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../constants';

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 11.884l7.997-6M2 15h16V5l-8 5-8-5v10z" />
    </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
    </svg>
);

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M23.498 6.186a2.97 2.97 0 0 0-2.09-2.103C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.408.583a2.97 2.97 0 0 0-2.09 2.103C0 8.094 0 12 0 12s0 3.906.502 5.814a2.97 2.97 0 0 0 2.09 2.103C4.495 20.5 12 20.5 12 20.5s7.505 0 9.408-.583a2.97 2.97 0 0 0 2.09-2.103C24 15.906 24 12 24 12s0-3.906-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-battle-green text-gray-200">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Logo and Mission */}
          <div className="flex flex-col items-start">
              <div className="mb-4">
                  <div className="bg-white p-2 rounded-xl shadow-lg inline-block">
                      <img src="https://www.southpointschool.edu.ph/images/logo.jpg" alt="Southpoint School Logo" className="h-14 w-auto" />
                  </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                “Raising academically excellent Filipino servant leaders.”
              </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
                {FOOTER_LINKS.map(link => (
                    <li key={link.path}>
                        <Link to={link.path} className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline underline-offset-4">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <LocationIcon />
                <span>Eden Street, Maa, Davao City, Philippines</span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon />
                <span>(0917) 128 3489 (Registrar)</span>
              </li>
              <li className="flex items-start gap-3">
                 <EmailIcon />
                 <span>principal@southpointschool.edu.ph</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
             <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
             <div className="flex space-x-4">
                <a href="https://www.facebook.com/southpointschooldavao" target="_blank" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors duration-300">
                    <FacebookIcon />
                </a>
                 <a href="https://www.youtube.com/@southpointschool3594" target="_blank" aria-label="YouTube" className="text-gray-300 hover:text-white transition-colors duration-300">
                    <YoutubeIcon />
                </a>
             </div>
          </div>

        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Southpoint School. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
