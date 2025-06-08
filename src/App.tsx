import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import SubscriptionBoxes from './components/SubscriptionBoxes';
import VendorDashboard from './components/VendorDashboard';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="bg-mandala-pattern">
          <Header />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
            <ProductShowcase />
            <SubscriptionBoxes />
            <VendorDashboard />
            <Testimonials />
          </motion.main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;