import React, { useState, useEffect, useRef } from 'react';
import { MdSearch } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const suggestionData = ['Explore Cambodia', 'Event & Festival', 'Travel Guide', 'About Us', 'Blog', 'FAQ'];

  const suggestionRoutes = {
    'Explore Cambodia': '/explore-cambodia',
    'Event & Festival': '/event-festival',
    'Travel Guide': '/travel-guide',
    'About Us': '/about-us',
    'Blog': '/blog',
    'FAQ': '/faq',
  };

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    const suggestionList = suggestionData.filter((suggestion) =>
      suggestion.toLowerCase().includes(newSearchTerm.toLowerCase())
    );

    setSuggestions(suggestionList);
    setShowSuggestions(newSearchTerm !== '');
  };

  const handleSuggestionClick = (suggestion) => {
    const route = suggestionRoutes[suggestion];

    if (route) {
      navigate(route);
    }

    setSuggestions([]);
    setSearchTerm('');
    setShowSuggestions(false);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-emerald-800 p-6 flex items-center justify-between relative">
      <div className="flex items-center relative ml-6">
        <Link to="/" className="flex items-center">
          <img
            src="./logo/logo-4.png"
            alt="Logo"
            className="h-20 w-20 mr-1 rounded-lg"
          />
          <span className="text-white font-semibold text-xl p-1 font-serif text-left">Discover <br />Cambodia</span>
        </Link>

        {/* Adjusted styling for the search bar */}
        <div className="ml-32 relative">
          <div className="flex items-center border border-white rounded-lg p-3 w-96">
            <MdSearch className="text-white mr-2" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="bg-transparent outline-none text-white"
            />
          </div>

          {/* Adjusted styling for the suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute mt-2 bg-gray-100 rounded-lg w-96 opacity-80 p-2 z-30">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200 hover:rounded-sm hover:underline hover:scale-105"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <nav className="flex items-center space-x-8 mr-8">
        {Object.entries(suggestionRoutes).map(([label, route]) => (
          <a
            key={label}
            href={route}
            className="text-white font-semibold hover:text-gray-400 hover:underline hover:scale-105 "
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;