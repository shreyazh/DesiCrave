import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Filter, Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ProductShowcase = () => {
  const { language } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', label: language === 'en' ? 'All Items' : 'सभी आइटम' },
    { id: 'sweet', label: language === 'en' ? 'Sweet' : 'मिठाई' },
    { id: 'spicy', label: language === 'en' ? 'Spicy' : 'मसालेदार' },
    { id: 'snacks', label: language === 'en' ? 'Snacks' : 'नाश्ता' },
    { id: 'pickles', label: language === 'en' ? 'Pickles' : 'अचार' },
    { id: 'vegan', label: language === 'en' ? 'Vegan' : 'शाकाहारी' },
  ];

  const products = [
    {
      id: 1,
      name: language === 'en' ? 'Traditional Thekua' : 'पारंपरिक ठेकुआ',
      description: language === 'en' ? 'Crispy sweet treat from Bihar' : 'बिहार की कुरकुरी मिठाई',
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 234,
      category: 'sweet',
      tags: ['traditional', 'bihar', 'festival'],
      image: 'https://static.vecteezy.com/system/resources/previews/016/283/625/non_2x/thekua-is-an-indian-sweet-dish-popular-in-uttarpradesh-bihar-and-jharkhand-offering-for-the-chhat-festival-free-photo.jpg',
      vendor: language === 'en' ? 'Meera\'s Kitchen' : 'मीरा की रसोई',
      isVegan: true,
      deliveryTime: '30-45 min'
    },
    {
      id: 2,
      name: language === 'en' ? 'Mango Aachar' : 'आम का अचार',
      description: language === 'en' ? 'Tangy homemade pickle' : 'घर का बना खट्टा अचार',
      price: 199,
      originalPrice: 249,
      rating: 4.9,
      reviews: 156,
      category: 'pickles',
      tags: ['tangy', 'homemade', 'mango'],
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhpNtQBiLnG97ZIC-3S05vHqMiCpxFlJHWpbMQ9fw6XWXUd3SFX5t3ZHFuLFq95_shCegpDCNkL4q9dPYqOafm89t0o18yJs5bM02uWMyQTOBguYPS8TSdJ-wHRHe6_iCPjtbrVaEuXaPa/s640/SAVE_20200506_185452.jpg',
      vendor: language === 'en' ? 'Dadi\'s Recipes' : 'दादी के नुस्खे',
      isVegan: true,
      deliveryTime: '20-30 min'
    },
    {
      id: 3,
      name: language === 'en' ? 'Roasted Makhana' : 'भुना हुआ मखाना',
      description: language === 'en' ? 'Healthy fox nuts snack' : 'स्वस्थ मखाने का नाश्ता',
      price: 149,
      originalPrice: 199,
      rating: 4.7,
      reviews: 89,
      category: 'snacks',
      tags: ['healthy', 'roasted', 'protein'],
      image: 'https://redcliffelabs.com/myhealth/_next/image/?url=https%3A%2F%2Fmyhealth-redcliffelabs.redcliffelabs.com%2Fmedia%2Fblogcard-images%2FNone%2F757fbfbc-3922-4d22-960f-98db4b46920d.webp&w=1920&q=75',
      vendor: language === 'en' ? 'Healthy Bites' : 'स्वस्थ नाश्ता',
      isVegan: true,
      deliveryTime: '15-25 min'
    },
    {
      id: 4,
      name: language === 'en' ? 'Spicy Momos' : 'मसालेदार मोमो',
      description: language === 'en' ? 'Steamed dumplings with chutney' : 'चटनी के साथ भाप से पके डम्पलिंग',
      price: 179,
      originalPrice: 229,
      rating: 4.6,
      reviews: 312,
      category: 'spicy',
      tags: ['steamed', 'chutney', 'tibetan'],
      image: 'https://cdn.foodaciously.com/static/recipes/ee9fd204-25cf-4e97-be5a-d7626470d420/easy-vegan-momos-recipe-7ab341154a5c13d6d9642300e7e2c92d-1280.jpg',
      vendor: language === 'en' ? 'Himalayan Kitchen' : 'हिमालयन रसोई',
      isVegan: false,
      deliveryTime: '25-35 min'
    },
    {
      id: 5,
      name: language === 'en' ? 'Masala Papad' : 'मसाला पापड़',
      description: language === 'en' ? 'Crispy spiced wafers' : 'कुरकुरे मसालेदार वेफर्स',
      price: 89,
      originalPrice: 119,
      rating: 4.5,
      reviews: 67,
      category: 'snacks',
      tags: ['crispy', 'spiced', 'appetizer'],
      image: 'https://www.whiskaffair.com/wp-content/uploads/2020/09/Masala-Papad-2-3.jpg',
      vendor: language === 'en' ? 'Spice Garden' : 'मसाला बगीचा',
      isVegan: true,
      deliveryTime: '10-20 min'
    },
    {
      id: 6,
      name: language === 'en' ? 'Gur Sandesh' : 'गुड़ संदेश',
      description: language === 'en' ? 'Bengali sweet with jaggery' : 'गुड़ के साथ बंगाली मिठाई',
      price: 249,
      originalPrice: 299,
      rating: 4.8,
      reviews: 145,
      category: 'sweet',
      tags: ['bengali', 'jaggery', 'traditional'],
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieerpWR5xCL-6D4FWSvsJJr53eKcamnka1KbB2XdLckqeT4hgwjOQhsR0gUtkSw4XoT81qjaFn_foH88i-UlSpNZGjU20zITm1WgKOAMAZCqDBzNYmw68mlbwtRBktzsG19CIWWZQ8GCVb/w1200-h630-p-k-no-nu/blogger-image-955859415.jpg',
      vendor: language === 'en' ? 'Bengal Sweets' : 'बंगाल मिठाई',
      isVegan: false,
      deliveryTime: '35-45 min'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter || 
                         (activeFilter === 'vegan' && product.isVegan);
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-800 dark:text-white mb-4">
            {language === 'en' ? 'Authentic Indian Delicacies' : 'प्रामाणिक भारतीय व्यंजन'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Discover handpicked traditional recipes made by local home chefs with authentic ingredients and time-honored techniques.'
              : 'स्थानीय होम शेफ्स द्वारा प्रामाणिक सामग्री और पुराने तकनीकों से बनाए गए चुनिंदा पारंपरिक व्यंजनों की खोज करें।'
            }
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={language === 'en' ? 'Search products...' : 'उत्पाद खोजें...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-all duration-200"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-saffron-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-saffron-100 dark:hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Favorite Button */}
                <button className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                  <Heart className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>

                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {product.isVegan && (
                    <span className="px-2 py-1 bg-emerald-500 text-white text-xs rounded-full">
                      {language === 'en' ? 'Vegan' : 'शाकाहारी'}
                    </span>
                  )}
                  {product.originalPrice > product.price && (
                    <span className="px-2 py-1 bg-crimson-500 text-white text-xs rounded-full">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-saffron-600 dark:text-saffron-400">
                      ₹{product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    {product.deliveryTime}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {product.vendor}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({product.reviews} {language === 'en' ? 'reviews' : 'समीक्षाएं'})
                  </span>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-saffron-500 to-turmeric-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>{language === 'en' ? 'Add to Cart' : 'कार्ट में जोड़ें'}</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {filteredProducts.length >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-white dark:bg-gray-800 border-2 border-saffron-500 text-saffron-600 dark:text-saffron-400 rounded-full font-semibold hover:bg-saffron-500 hover:text-white transition-all duration-300">
              {language === 'en' ? 'Load More Products' : 'और उत्पाद लोड करें'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
