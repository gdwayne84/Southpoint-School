import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 tracking-wider">Southpoint School</h3>
            <p className="text-gray-400 max-w-md">
              Shaping the leaders of tomorrow through academic excellence and character formation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
                {FOOTER_LINKS.map(link => (
                    <li key={link.path}>
                        <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>S.E. Jayme Street, Basak, Mandaue City, 6014 Cebu</li>
              <li>+63 (32) 346-7788</li>
              <li>info@southpointschool.edu.ph</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Southpoint School. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
