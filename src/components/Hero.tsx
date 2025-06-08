import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Star, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { language } = useTheme();

  const stats = [
    { 
      icon: Users, 
      value: '500+', 
      label: language === 'en' ? 'Home Chefs' : 'होम शेफ' 
    },
    { 
      icon: Star, 
      value: '4.8', 
      label: language === 'en' ? 'Rating' : 'रेटिंग' 
    },
    { 
      icon: MapPin, 
      value: '50+', 
      label: language === 'en' ? 'Locations' : 'स्थान' 
    },
    { 
      icon: Clock, 
      value: '30min', 
      label: language === 'en' ? 'Delivery' : 'डिलीवरी' 
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-saffron-50 via-turmeric-50 to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-saffron-200 dark:bg-saffron-800 rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-turmeric-200 dark:bg-turmeric-800 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-saffron-100 to-turmeric-100 dark:from-saffron-900 dark:to-turmeric-900 rounded-full text-saffron-800 dark:text-saffron-200 text-sm font-medium"
            >
              <Star className="w-4 h-4 mr-2 fill-current" />
              {language === 'en' ? 'Toronto\'s #1 Indian Food Marketplace' : 'टोरंटो का #1 भारतीय भोजन बाज़ार'}
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-saffron-600 via-turmeric-600 to-emerald-600 bg-clip-text text-transparent">
                  {language === 'en' ? 'Taste of India' : 'भारत का स्वाद'}
                </span>
                <br />
                <span className="text-gray-800 dark:text-white">
                  {language === 'en' ? 'in Toronto' : 'टोरंटो में'}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
              >
                {language === 'en' 
                  ? 'Discover authentic Indian flavors crafted by local home chefs and micro businesses. From traditional Thekua to spicy Achaar, experience the true essence of Indian cuisine.' 
                  : 'स्थानीय होम शेफ और छोटे व्यापारियों द्वारा बनाए गए प्रामाणिक भारतीय स्वादों की खोज करें। पारंपरिक ठेकुआ से लेकर मसालेदार अचार तक, भारतीय व्यंजनों का सच्चा सार अनुभव करें।'
                }
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-gradient-to-r from-saffron-500 to-turmeric-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                {language === 'en' ? 'Explore Menu' : 'मेन्यू देखें'}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-saffron-500 text-saffron-600 dark:text-saffron-400 hover:bg-saffron-500 hover:text-white transition-all duration-300">
                {language === 'en' ? 'Become a Vendor' : 'विक्रेता बनें'}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-saffron-600 dark:text-saffron-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://imgk.timesnownews.com/story/veg-thali.gif"
                  alt="Authentic Indian Food"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="https://d2gjqh9j26unp0.cloudfront.net/profilepic/5c6aa3854fe0b31f291b98a976d690f3"
                      alt="Chef"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white text-sm">
                      {language === 'en' ? 'Shailaja\'s Kitchen' : 'प्रिया की रसोई'}
                    </p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">4.9 • 2.1k orders</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  ₹299
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {language === 'en' ? 'Thali Combo' : 'थाली कॉम्बो'}
                </p>
                <div className="flex items-center mt-1">
                  <Clock className="w-3 h-3 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">25-30 min</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
