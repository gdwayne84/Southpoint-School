import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
)

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      if (isMenuOpen) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
    }
  }, [isMenuOpen]);

  const handleSubmenuToggle = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-3">
              <img src="images/spslogo.png" alt="Southpoint School Logo" className="h-12 w-auto" />
            </NavLink>
            </div>
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {NAV_LINKS.map((link) => (
                  <div key={link.label} className="relative group">
                    {link.children ? (
                      <button className="relative group px-3 py-2 text-sm font-medium text-gray-700 hover:text-battle-green transition-colors duration-300 flex items-center focus:outline-none">
                        {link.label}
                        <ChevronDownIcon />
                      </button>
                    ) : (
                      <NavLink
                        to={link.path!}
                        end
                        className={({ isActive }) =>
                          `relative group px-3 py-2 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-battle-green' : 'text-gray-700 hover:text-battle-green'}`
                        }
                      >
                         {({ isActive }) => (
                          <>
                            {link.label}
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-battle-green transform transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                          </>
                        )}
                      </NavLink>
                    )}
                     {link.children && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 ease-in-out invisible group-hover:visible">
                            {link.children.map(child => (
                                <NavLink
                                    key={child.path}
                                    to={child.path!}
                                    end
                                    className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'bg-gray-100 text-battle-green font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}
                                >
                                    {child.label}
                                </NavLink>
                            ))}
                        </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-battle-green focus:outline-none"
                aria-label="Open main menu"
              >
                <MenuIcon/>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-battle-green/95 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <div className="relative z-50 h-full w-full flex flex-col p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-gray-300 hover:text-white"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
            <nav className="flex-grow flex flex-col items-center justify-center space-y-4">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="text-center w-full">
                  {link.children ? (
                    <>
                      <button onClick={() => handleSubmenuToggle(link.label)} className="text-2xl font-semibold text-gray-300 hover:text-white flex items-center justify-center w-full py-2">
                        {link.label}
                        <ChevronDownIcon />
                      </button>
                      {openSubmenu === link.label && (
                        <div className="mt-2 space-y-3 bg-black/20 rounded-lg py-3">
                           {link.children.map(child => (
                            <NavLink
                              key={child.path}
                              to={child.path!}
                              end
                              className={({ isActive }) => `block text-lg font-medium ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={link.path!}
                      end
                      className={({ isActive }) => `text-2xl font-semibold transition-colors duration-300 py-2 ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                    >
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
