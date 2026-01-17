import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, User, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const contactMethods = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'kaifmulla3335@gmail.com', 
      href: 'mailto:kaifmulla3335@gmail.com',
      gradient: 'from-cyan-500 to-blue-500'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+91 8624913335', 
      href: 'tel:+918624913335',
      gradient: 'from-blue-500 to-indigo-500'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'mohammadkaif-mulla', 
      href: 'https://linkedin.com/in/mohammadkaif-mulla',
      gradient: 'from-indigo-500 to-purple-500'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: 'kaifmulla3335', 
      href: 'https://github.com/kaifmulla3335',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace with your actual EmailJS credentials
    const serviceID = 'service_thb5sw5';
    const templateID = 'template_5z9kgh9';
    const userID = 'h39Yw39PUu94OCIZs';

    try {
      const result = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'kaifmulla3335@gmail.com', // Your email
        },
        userID
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Clear form
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      
      // Reset error message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Get In Touch
            </motion.span>
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '4rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-3 sm:mb-4"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg"
          >
            Available for freelance work and full-time opportunities
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 sm:gap-6 md:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3"
          >
            <motion.div
              whileHover={{ boxShadow: '0 20px 40px -10px rgba(6, 182, 212, 0.3)' }}
              className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 border border-cyan-500/30 shadow-xl relative overflow-hidden"
            >
              <motion.div
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"
              />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-4 sm:space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      required
                      className="w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm sm:text-base font-semibold shadow-lg shadow-cyan-500/50 flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 relative z-10 animate-spin" />
                      <span className="relative z-10">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <Send className="w-4 h-4 relative z-10" />
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 sm:p-4 bg-green-500/20 border border-green-500/50 rounded-lg sm:rounded-xl text-green-400 text-sm sm:text-base"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 sm:p-4 bg-red-500/20 border border-red-500/50 rounded-lg sm:rounded-xl text-red-400 text-sm sm:text-base"
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Failed to send message. Please try again or email me directly.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 space-y-3 sm:space-y-4"
          >
            {/* Contact Methods */}
            {contactMethods.map((contact, i) => (
              <motion.a
                key={i}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-cyan-500/30 hover:border-cyan-500/50 transition-all relative overflow-hidden group flex items-center gap-3 sm:gap-4"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-10 pointer-events-none`}
                />
                
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                >
                  <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-400">{contact.label}</p>
                  <p className="text-sm sm:text-base text-white font-medium group-hover:text-cyan-400 transition-colors truncate">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Availability Indicator - Green Dots Layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-green-500/30 relative overflow-hidden group"
            >
              <div className="relative z-10 flex items-center gap-4">
                {/* Green Dots on Left */}
                <div className="flex flex-col gap-2 flex-shrink-0">
                  {/* Middle Dot */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    className="w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-300/50"
                  />
                </div>
                
                {/* Text Content on Right */}
                <div className="flex-1">
                  <p className="text-white font-bold text-base sm:text-lg leading-tight">
                    Available Now
                  </p>
                  <p className="text-green-400/90 text-sm mt-1 leading-tight">
                    Open to opportunities
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;