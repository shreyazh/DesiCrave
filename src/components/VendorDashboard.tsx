import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  DollarSign, 
  Package, 
  Users, 
  TrendingUp, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const VendorDashboard = () => {
  const { language } = useTheme();

  const dashboardStats = [
    {
      icon: DollarSign,
      label: language === 'en' ? 'Monthly Revenue' : 'मासिक आय',
      value: '₹45,230',
      change: '+12%',
      color: 'text-emerald-600'
    },
    {
      icon: Package,
      label: language === 'en' ? 'Total Orders' : 'कुल ऑर्डर',
      value: '234',
      change: '+8%',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      label: language === 'en' ? 'Customers' : 'ग्राहक',
      value: '156',
      change: '+15%',
      color: 'text-purple-600'
    },
    {
      icon: Star,
      label: language === 'en' ? 'Rating' : 'रेटिंग',
      value: '4.8',
      change: '+0.2',
      color: 'text-yellow-600'
    }
  ];

  const features = [
    {
      icon: BarChart3,
      title: language === 'en' ? 'Real-time Analytics' : 'रियल-टाइम एनालिटिक्स',
      description: language === 'en' 
        ? 'Track your sales, customer behavior, and market trends'
        : 'अपनी बिक्री, ग्राहक व्यवहार और बाजार के रुझान को ट्रैक करें'
    },
    {
      icon: Package,
      title: language === 'en' ? 'Inventory Management' : 'इन्वेंटरी प्रबंधन',
      description: language === 'en' 
        ? 'Manage your products, stock levels, and pricing'
        : 'अपने उत्पाद, स्टॉक स्तर और मूल्य निर्धारण का प्रबंधन करें'
    },
    {
      icon: Users,
      title: language === 'en' ? 'Customer Insights' : 'ग्राहक अंतर्दृष्टि',
      description: language === 'en' 
        ? 'Understand your customers and build lasting relationships'
        : 'अपने ग्राहकों को समझें और दीर्घकालिक संबंध बनाएं'
    },
    {
      icon: TrendingUp,
      title: language === 'en' ? 'Growth Tools' : 'विकास उपकरण',
      description: language === 'en' 
        ? 'Marketing tools and promotional features to boost sales'
        : 'बिक्री बढ़ाने के लिए मार्केटिंग टूल और प्रचार सुविधाएं'
    }
  ];

  const benefits = [
    language === 'en' ? 'Zero commission for first 3 months' : 'पहले 3 महीनों के लिए शून्य कमीशन',
    language === 'en' ? 'Free professional photography' : 'मुफ्त पेशेवर फोटोग्राफी',
    language === 'en' ? 'Marketing support and promotion' : 'मार्केटिंग सहायता और प्रचार',
    language === 'en' ? '24/7 customer support' : '24/7 ग्राहक सहायता',
    language === 'en' ? 'Flexible payout options' : 'लचीले भुगतान विकल्प',
    language === 'en' ? 'Training and onboarding support' : 'प्रशिक्षण और ऑनबोर्डिंग सहायता'
  ];

  return (
    <section id="vendors" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-saffron-100 to-turmeric-100 dark:from-saffron-900 dark:to-turmeric-900 rounded-full text-saffron-800 dark:text-saffron-200 text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Vendor Platform' : 'विक्रेता प्लेटफॉर्म'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-800 dark:text-white mb-4">
            {language === 'en' ? 'Grow Your Food Business' : 'अपना खाद्य व्यवसाय बढ़ाएं'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Join hundreds of home chefs and micro businesses who are scaling their operations with our comprehensive SaaS platform.'
              : 'सैकड़ों होम शेफ और छोटे व्यापारियों से जुड़ें जो हमारे व्यापक SaaS प्लेटफॉर्म के साथ अपने व्यापार को बढ़ा रहे हैं।'
            }
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-heading font-bold text-gray-800 dark:text-white">
                  {language === 'en' ? 'Vendor Dashboard' : 'विक्रेता डैशबोर्ड'}
                </h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {dashboardStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-700 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      <span className="text-xs text-emerald-600 font-medium">
                        {stat.change}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-gray-800 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="bg-white dark:bg-gray-700 rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {language === 'en' ? 'Sales Overview' : 'बिक्री अवलोकन'}
                  </h4>
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="h-32 bg-gradient-to-r from-saffron-100 to-turmeric-100 dark:from-saffron-900 dark:to-turmeric-900 rounded-lg flex items-end justify-center">
                  <div className="flex space-x-2 items-end">
                    {[40, 65, 45, 80, 55, 90, 75].map((height, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-t from-saffron-500 to-turmeric-400 rounded-t-sm"
                        style={{ height: `${height}%`, width: '12px' }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white dark:bg-gray-700 rounded-xl p-4">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                  {language === 'en' ? 'Recent Orders' : 'हाल के ऑर्डर'}
                </h4>
                <div className="space-y-2">
                  {[
                    { name: 'Thekua Combo', price: '₹299', status: 'Delivered' },
                    { name: 'Mango Pickle', price: '₹199', status: 'Processing' },
                    { name: 'Masala Papad', price: '₹89', status: 'Preparing' }
                  ].map((order, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">{order.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-800 dark:text-white">{order.price}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'Delivered' 
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300'
                            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features and Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Features */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-800 dark:text-white mb-6">
                {language === 'en' ? 'Powerful Features' : 'शक्तिशाली सुविधाएं'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-saffron-600 dark:text-saffron-400 mb-3" />
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-800 dark:text-white mb-6">
                {language === 'en' ? 'Why Join DesiCrave?' : 'DesiCrave से क्यों जुड़ें?'}
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group bg-gradient-to-r from-saffron-500 to-turmeric-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                {language === 'en' ? 'Start Selling Today' : 'आज बेचना शुरू करें'}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 rounded-full font-semibold border-2 border-saffron-500 text-saffron-600 dark:text-saffron-400 hover:bg-saffron-500 hover:text-white transition-all duration-300">
                {language === 'en' ? 'Schedule Demo' : 'डेमो शेड्यूल करें'}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VendorDashboard;