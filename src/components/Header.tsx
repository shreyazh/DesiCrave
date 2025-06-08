import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Globe,
  Heart,
  MapPin
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme, language, toggleLanguage } = useTheme();

  const menuItems = [
    { label: language === 'en' ? 'Home' : 'होम', href: '#home' },
    { label: language === 'en' ? 'Products' : 'उत्पाद', href: '#products' },
    { label: language === 'en' ? 'Vendors' : 'विक्रेता', href: '#vendors' },
    { label: language === 'en' ? 'Subscriptions' : 'सदस्यता', href: '#subscriptions' },
    { label: language === 'en' ? 'Recipes' : 'व्यंजन', href: '#recipes' },
    { label: language === 'en' ? 'About' : 'हमारे बारे में', href: '#about' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-b border-saffron-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-turmeric-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">DC</span>
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-gray-800 dark:text-white">
                DesiCrave
              </h1>
              <p className="text-xs text-saffron-600 dark:text-saffron-400">
                {language === 'en' ? 'Taste of India' : 'भारत का स्वाद'}
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-saffron-600 dark:hover:text-saffron-400 font-medium transition-colors duration-200"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center max-w-md mx-8 flex-1">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search for authentic Indian food...' : 'प्रामाणिक भारतीय भोजन खोजें...'}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Location */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-saffron-600 dark:hover:text-saffron-400"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Toronto</span>
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-saffron-600 dark:hover:text-saffron-400"
            >
              <Globe className="w-4 h-4" />
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-saffron-600 dark:hover:text-saffron-400"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>

            {/* Wishlist */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-saffron-600 dark:hover:text-saffron-400"
            >
              <Heart className="w-4 h-4" />
            </motion.button>

            {/* Cart */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 rounded-full bg-saffron-500 text-white hover:bg-saffron-600 transition-colors duration-200"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 bg-crimson-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </motion.button>

            {/* User Profile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-saffron-600 dark:hover:text-saffron-400"
            >
              <User className="w-4 h-4" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-saffron-600 dark:hover:text-saffron-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Mobile Search */}
            <div className="mt-4 px-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={language === 'en' ? 'Search for food...' : 'भोजन खोजें...'}
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-saffron-500"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;