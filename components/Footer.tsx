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

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
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
                <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors duration-300">
                    <FacebookIcon />
                </a>
                 <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors duration-300">
                    <InstagramIcon />
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
