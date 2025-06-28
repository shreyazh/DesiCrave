import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Testimonials = () => {
  const { language } = useTheme();

  const testimonials = [
    {
      id: 1,
      name: 'Shreyash Srivastva',
      location: 'Toronto, ON',
      role: language === 'en' ? 'Software Engineer & Food Enthusiast' : 'सॉफ्टवेयर इंजीनियर और खाद्य प्रेमी',
      image: 'https://img-web-scrape-folder.vercel.app/1705508817304.jpeg',
      rating: 5,
      review: language === 'en' 
        ? "DesiCrave has been a lifesaver! Being away from home for 5 years, I was desperately missing authentic Indian flavors. The monthly mithai box brings back so many childhood memories. The quality is exceptional, and everything tastes just like my grandmother's recipes."
        : "DesiCrave एक जीवनरक्षक रहा है! 5 साल से घर से दूर होने के कारण, मुझे प्रामाणिक भारतीय स्वादों की बहुत याद आ रही थी। मासिक मिठाई बॉक्स बचपन की बहुत सारी यादें वापस लाता है। गुणवत्ता असाधारण है, और सब कुछ बिल्कुल मेरी दादी की रेसिपी जैसा स्वाद लगता है।",
      favorite: 'Thekua & Gur Sandesh',
      orderCount: 12
    },
    {
      id: 2,
      name: 'Anubhav Anant',
      location: 'Mississauga, ON',
      role: language === 'en' ? 'Business Owner & Home Chef' : 'व्यापारी और होम शेफ',
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQFZzyPvzyQ4mQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516774873680?e=1756339200&v=beta&t=6o1ylNZuieEKY-3xTFd46tDmOkHSsdUszc-km_BjO78',
      rating: 5,
      review: language === 'en' 
        ? "As a vendor on DesiCrave, I've been able to share my mother's traditional recipes with the Indian community here. The platform is incredibly user-friendly, and the support team helps with everything from photography to marketing. My monthly revenue has grown by 300%!"
        : "DesiCrave पर एक विक्रेता के रूप में, मैं यहाँ भारतीय समुदाय के साथ अपनी माँ की पारंपरिक रेसिपी साझा कर सका हूँ। प्लेटफॉर्म अविश्वसनीय रूप से उपयोगकर्ता-अनुकूल है, और सहायता टीम फोटोग्राफी से लेकर मार्केटिंग तक सब कुछ में मदद करती है। मेरी मासिक आय 300% बढ़ गई है!",
      favorite: 'Gujarati Thali & Khakhra',
      orderCount: 89
    },
    {
      id: 3,
      name: 'Praveen Srivastva',
      location: 'Brampton, ON',
      role: language === 'en' ? 'Teacher & Mother of Two' : 'शिक्षिका और दो बच्चों की माँ',
      image: 'https://media.licdn.com/dms/image/v2/C5103AQFi6J2ahOozIw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1567488075017?e=1756339200&v=beta&t=rmvnxwHHhzHTS31c8-xIizHizCXATvA0alBiUK_Ixvw',
      rating: 5,
      review: language === 'en' 
        ? "My kids are third-generation Canadian-Indians, and I was worried they wouldn't connect with their cultural roots. DesiCrave's food has become a bridge to our heritage. Every meal is a story, and the quality ingredients make me feel confident about what I'm feeding my family."
        : "मेरे बच्चे तीसरी पीढ़ी के कनाडाई-भारतीय हैं, और मुझे डर था कि वे अपनी सांस्कृतिक जड़ों से जुड़ नहीं पाएंगे। DesiCrave का खाना हमारी विरासत के लिए एक पुल बन गया है। हर भोजन एक कहानी है, और गुणवत्तापूर्ण सामग्री मुझे इस बात को लेकर आश्वस्त महसूस कराती है कि मैं अपने परिवार को क्या खिला रही हूँ।",
      favorite: 'Makhana & Aachar Combo',
      orderCount: 24
    },
    {
      id: 4,
      name: 'Sanjeev Chauhan',
      location: 'Toronto, ON',
      role: language === 'en' ? 'Food Blogger & Cultural Explorer' : 'फूड ब्लॉगर और सांस्कृतिक अन्वेषक',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQFLT7poDbIlrA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730805749980?e=1756339200&v=beta&t=wmOm7E8STlq77IqF5bFmtByiryCmlKASUjEHzbjKO70',
      rating: 5,
      review: language === 'en' 
        ? "As someone passionate about exploring world cuisines, DesiCrave opened up a whole new world of authentic Indian flavors for me. The vendors are incredibly knowledgeable about their recipes' history and cultural significance. It's not just food delivery – it's cultural education!"
        : "विश्व व्यंजनों की खोज करने के शौकीन व्यक्ति के रूप में, DesiCrave ने मेरे लिए प्रामाणिक भारतीय स्वादों की एक पूरी नई दुनिया खोल दी। विक्रेता अपनी रेसिपी के इतिहास और सांस्कृतिक महत्व के बारे में अविश्वसनीय रूप से जानकार हैं। यह केवल खाना डिलीवरी नहीं है - यह सांस्कृतिक शिक्षा है!",
      favorite: 'Regional Spice Collection',
      orderCount: 18
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
    <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-saffron-100 to-turmeric-100 dark:from-saffron-900 dark:to-turmeric-900 rounded-full text-saffron-800 dark:text-saffron-200 text-sm font-medium mb-4">
            <Heart className="w-4 h-4 mr-2" />
            {language === 'en' ? 'Community Stories' : 'समुदायिक कहानियां'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-800 dark:text-white mb-4">
            {language === 'en' ? 'Stories from Our Community' : 'हमारे समुदाय की कहानियां'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Real experiences from Indian immigrants and food lovers who found their taste of home through DesiCrave.'
              : 'भारतीय अप्रवासियों और खाद्य प्रेमियों के वास्तविक अनुभव जिन्होंने DesiCrave के माध्यम से अपने घर का स्वाद पाया।'
            }
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-saffron-500" />
              </div>

              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-saffron-100 dark:ring-saffron-900"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    {testimonial.location}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Review */}
              <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-sm">
                "{testimonial.review}"
              </blockquote>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">
                    {language === 'en' ? 'Favorite Items' : 'पसंदीदा आइटम'}
                  </p>
                  <p className="text-sm font-medium text-saffron-600 dark:text-saffron-400">
                    {testimonial.favorite}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">
                    {language === 'en' ? 'Orders Placed' : 'दिए गए ऑर्डर'}
                  </p>
                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    {testimonial.orderCount}+
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-gray-800 dark:text-white mb-2">
              {language === 'en' ? 'Join Our Growing Community' : 'हमारी बढ़ती समुदाय से जुड़ें'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'en' 
                ? 'Thousands of satisfied customers and vendors trust DesiCrave'
                : 'हजारों संतुष्ट ग्राहक और विक्रेता DesiCrave पर भरोसा करते हैं'
              }
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-saffron-600 dark:text-saffron-400 mb-2">
                5,000+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'Happy Customers' : 'खुश ग्राहक'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                500+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'Active Vendors' : 'सक्रिय विक्रेता'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                4.8★
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'Average Rating' : 'औसत रेटिंग'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50K+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'en' ? 'Orders Delivered' : 'डिलीवर किए गए ऑर्डर'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
