import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Calendar, Truck, Star, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SubscriptionBoxes = () => {
  const { language } = useTheme();

  const subscriptionPlans = [
    {
      id: 1,
      name: language === 'en' ? 'Monthly Mithai Box' : 'मासिक मिठाई बॉक्स',
      description: language === 'en' 
        ? 'Traditional sweets from different regions of India' 
        : 'भारत के विभिन्न क्षेत्रों की पारंपरिक मिठाइयां',
      price: 599,
      originalPrice: 799,
      period: language === 'en' ? 'per month' : 'प्रति माह',
      image: 'https://khoyamithai.com/cdn/shop/files/DSC05574.jpg?v=1727936542&width=3376',
      features: [
        language === 'en' ? '8-10 traditional sweets' : '8-10 पारंपरिक मिठाइयां',
        language === 'en' ? 'Regional specialties' : 'क्षेत्रीय विशेषताएं',
        language === 'en' ? 'Recipe cards included' : 'रेसिपी कार्ड शामिल',
        language === 'en' ? 'Free delivery' : 'मुफ्त डिलीवरी',
      ],
      popular: false,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      name: language === 'en' ? 'Spice & Pickle Combo' : 'मसाला और अचार कॉम्बो',
      description: language === 'en' 
        ? 'Authentic homemade pickles and spice blends' 
        : 'प्रामाणिक घर का बना अचार और मसाला मिश्रण',
      price: 449,
      originalPrice: 599,
      period: language === 'en' ? 'per month' : 'प्रति माह',
      image: 'https://savithrammas.com/site/image/cache/catalog/A-Guide-to-Savithrammas-Exotic-Pickles-and-Spices-1080x540.jpg',
      features: [
        language === 'en' ? '4-5 pickle varieties' : '4-5 अचार की किस्में',
        language === 'en' ? '3-4 spice blends' : '3-4 मसाला मिश्रण',
        language === 'en' ? 'Storage tips included' : 'भंडारण सुझाव शामिल',
        language === 'en' ? 'Seasonal selection' : 'मौसमी चयन',
      ],
      popular: true,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 3,
      name: language === 'en' ? 'Healthy Snacks Box' : 'स्वस्थ नाश्ता बॉक्स',
      description: language === 'en' 
        ? 'Nutritious Indian snacks for guilt-free munching' 
        : 'निर्दोष नाश्ते के लिए पौष्टिक भारतीय स्नैक्स',
      price: 399,
      originalPrice: 549,
      period: language === 'en' ? 'per month' : 'प्रति माह',
      image: 'https://i.ytimg.com/vi/7DaOjDgXJjs/maxresdefault.jpg',
      features: [
        language === 'en' ? '6-8 healthy snacks' : '6-8 स्वस्थ नाश्ते',
        language === 'en' ? 'Low oil preparation' : 'कम तेल से तैयार',
        language === 'en' ? 'Nutritional info' : 'पोषण संबंधी जानकारी',
        language === 'en' ? 'Vegan options' : 'शाकाहारी विकल्प',
      ],
      popular: false,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="subscriptions" className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-saffron-100 to-turmeric-100 dark:from-saffron-900 dark:to-turmeric-900 rounded-full text-saffron-800 dark:text-saffron-200 text-sm font-medium mb-4">
            <Gift className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Monthly Surprise' : 'मासिक आश्चर्य'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-800 dark:text-white mb-4">
            {language === 'en' ? 'Subscription Boxes' : 'सदस्यता बॉक्स'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Get curated Indian delicacies delivered to your doorstep every month. Discover new flavors and regional specialties.'
              : 'हर महीने चुनिंदा भारतीय व्यंजन अपने दरवाजे पर प्राप्त करें। नए स्वाद और क्षेत्रीय विशेषताओं की खोज करें।'
            }
          </p>
        </motion.div>

        {/* Subscription Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden group ${
                plan.popular ? 'ring-4 ring-saffron-400 ring-opacity-50' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-saffron-500 to-turmeric-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {language === 'en' ? 'Popular' : 'लोकप्रिय'}
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${plan.color} opacity-20`} />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-gray-800 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {plan.description}
                </p>

                {/* Pricing */}
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-saffron-600 dark:text-saffron-400">
                    ₹{plan.price}
                  </span>
                  {plan.originalPrice > plan.price && (
                    <span className="text-lg text-gray-500 line-through ml-2">
                      ₹{plan.originalPrice}
                    </span>
                  )}
                  <span className="text-gray-600 dark:text-gray-400 ml-2">
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                      <Check className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Subscribe Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  {language === 'en' ? 'Subscribe Now' : 'अभी सदस्यता लें'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-heading font-bold text-gray-800 dark:text-white text-center mb-8">
            {language === 'en' ? 'Why Choose Our Subscription?' : 'हमारी सदस्यता क्यों चुनें?'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-saffron-500 to-turmeric-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {language === 'en' ? 'Flexible Plans' : 'लचीली योजनाएं'}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {language === 'en' 
                  ? 'Cancel or modify your subscription anytime'
                  : 'किसी भी समय अपनी सदस्यता रद्द या संशोधित करें'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {language === 'en' ? 'Free Delivery' : 'मुफ्त डिलीवरी'}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {language === 'en' 
                  ? 'Complimentary delivery on all subscription orders'
                  : 'सभी सदस्यता ऑर्डर पर मुफ्त डिलीवरी'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {language === 'en' ? 'Curated Quality' : 'चुनी गई गुणवत्ता'}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {language === 'en' 
                  ? 'Hand-picked products from verified vendors'
                  : 'सत्यापित विक्रेताओं से हाथ से चुने गए उत्पाद'
                }
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionBoxes;
