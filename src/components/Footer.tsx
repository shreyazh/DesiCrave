import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight,
  Heart
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { language } = useTheme();

  const footerSections = [
    {
      title: language === 'en' ? 'Quick Links' : 'त्वरित लिंक',
      links: [
        { label: language === 'en' ? 'About Us' : 'हमारे बारे में', href: '#about' },
        { label: language === 'en' ? 'How It Works' : 'यह कैसे काम करता है', href: '#how-it-works' },
        { label: language === 'en' ? 'Become a Vendor' : 'विक्रेता बनें', href: '#vendor' },
        { label: language === 'en' ? 'Help Center' : 'सहायता केंद्र', href: '#help' },
        { label: language === 'en' ? 'Contact Us' : 'संपर्क करें', href: '#contact' }
      ]
    },
    {
      title: language === 'en' ? 'Food Categories' : 'खाद्य श्रेणियां',
      links: [
        { label: language === 'en' ? 'Traditional Sweets' : 'पारंपरिक मिठाई', href: '#sweets' },
        { label: language === 'en' ? 'Pickles & Chutneys' : 'अचार और चटनी', href: '#pickles' },
        { label: language === 'en' ? 'Healthy Snacks' : 'स्वस्थ नाश्ता', href: '#snacks' },
        { label: language === 'en' ? 'Regional Specialties' : 'क्षेत्रीय विशेषताएं', href: '#regional' },
        { label: language === 'en' ? 'Festival Foods' : 'त्योहारी भोजन', href: '#festival' }
      ]
    },
    {
      title: language === 'en' ? 'For Vendors' : 'विक्रेताओं के लिए',
      links: [
        { label: language === 'en' ? 'Seller Dashboard' : 'विक्रेता डैशबोर्ड', href: '#dashboard' },
        { label: language === 'en' ? 'Pricing Plans' : 'मूल्य निर्धारण योजनाएं', href: '#pricing' },
        { label: language === 'en' ? 'Marketing Tools' : 'मार्केटिंग टूल्स', href: '#marketing' },
        { label: language === 'en' ? 'Vendor Guidelines' : 'विक्रेता दिशानिर्देश', href: '#guidelines' },
        { label: language === 'en' ? 'Success Stories' : 'सफलता की कहानियां', href: '#success' }
      ]
    },
    {
      title: language === 'en' ? 'Legal' : 'कानूनी',
      links: [
        { label: language === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति', href: '#privacy' },
        { label: language === 'en' ? 'Terms of Service' : 'सेवा की शर्तें', href: '#terms' },
        { label: language === 'en' ? 'Refund Policy' : 'वापसी नीति', href: '#refund' },
        { label: language === 'en' ? 'Food Safety' : 'खाद्य सुरक्षा', href: '#safety' },
        { label: language === 'en' ? 'Accessibility' : 'पहुंच', href: '#accessibility' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const cities = [
    'Toronto', 'Mississauga', 'Brampton', 'Markham', 
    'Vaughan', 'Richmond Hill', 'Scarborough', 'Etobicoke'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-saffron-600 to-turmeric-500 rounded-3xl p-8 text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
              {language === 'en' 
                ? 'Stay Connected with Indian Flavors' 
                : 'भारतीय स्वादों के साथ जुड़े रहें'
              }
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Get weekly updates on new vendors, seasonal specials, and exclusive recipes from our community of home chefs.'
                : 'नए विक्रेताओं, मौसमी विशेष, और हमारे होम शेफ समुदाय से विशेष रेसिपी पर साप्ताहिक अपडेट पाएं।'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={language === 'en' ? 'Enter your email address' : 'अपना ईमेल पता दर्ज करें'}
                className="flex-1 px-6 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-saffron-600 px-8 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
              >
                {language === 'en' ? 'Subscribe' : 'सदस्यता लें'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-saffron-500 to-turmeric-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">देC</span>
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold">DesiCrave</h2>
                  <p className="text-saffron-400 text-sm">
                    {language === 'en' ? 'Taste of India in Toronto' : 'टोरंटो में भारत का स्वाद'}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {language === 'en' 
                  ? 'Connecting Indian immigrants and food lovers with authentic flavors from home. Supporting local home chefs and preserving traditional recipes in Canada.'
                  : 'भारतीय प्रवासियों और खाद्य प्रेमियों को घर के प्रामाणिक स्वादों से जोड़ना। कनाडा में स्थानीय होम शेफ का समर्थन और पारंपरिक व्यंजनों का संरक्षण।'
                }
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">Toronto, Ontario, Canada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+1 123-4567-890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">hello@desicrave.ca</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-saffron-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-heading font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <h3 className="text-lg font-heading font-semibold mb-4">
            {language === 'en' ? 'Service Areas in Greater Toronto Area' : 'ग्रेटर टोरंटो एरिया में सेवा क्षेत्र'}
          </h3>
          <div className="flex flex-wrap gap-3">
            {cities.map((city, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-saffron-600 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {city}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 DesiCrave. {language === 'en' ? 'All rights reserved.' : 'सभी अधिकार सुरक्षित।'}
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>
                {language === 'en' ? 'Made with' : 'के साथ बनाया गया'}
              </span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>
                {language === 'en' ? 'for the Indian Community in Canada' : 'कनाडा में भारतीय समुदाय के लिए'}
              </span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors duration-200">
                {language === 'en' ? 'Privacy' : 'गोपनीयता'}
              </a>
              <a href="#terms" className="hover:text-white transition-colors duration-200">
                {language === 'en' ? 'Terms' : 'शर्तें'}
              </a>
              <a href="#cookies" className="hover:text-white transition-colors duration-200">
                {language === 'en' ? 'Cookies' : 'कुकीज़'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
