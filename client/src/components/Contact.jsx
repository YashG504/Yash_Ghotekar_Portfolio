import React, { useState } from 'react';
import { resumeData } from '../data/resume';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const { contact, socialLinks } = resumeData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Redirecting to WhatsApp...');

    const { name, email, message } = formData;

    // Construct the WhatsApp message
    const whatsappMessage = `Hey Yash, I want to contact you.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;

    // WhatsApp URL
    const whatsappUrl = `https://wa.me/918459454322?text=${whatsappMessage}`;

    // Redirect
    window.open(whatsappUrl, '_blank');
    setStatus('Message sent successfully via WhatsApp!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 p-4 text-white pt-20">
      <div className="flex flex-col p-4 justify-center max-w-screen-xl mx-auto h-full">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pb-8 text-center"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Contact Me</p>
          <p className="py-6 text-gray-400">Values relationships over transactions. Let's start a conversation.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 flex flex-col gap-8 w-full"
          >
            <div className="glass-card p-8 rounded-2xl border-l-4 border-primary bg-gray-900/50">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg font-semibold">{contact.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-lg font-semibold">{contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-lg font-semibold">{resumeData.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-400 mb-4">Connect with me on:</p>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                    >
                      <link.icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 w-full"
          >
            <div className="glass-card p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/20 transition-colors duration-500"></div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="What's your name?"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="What's your email?"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

                <button className="text-white bg-gradient-to-r from-primary to-blue-600 px-6 py-3 mt-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg hover:shadow-primary/30">
                  Send Message <FaPaperPlane className="text-xs" />
                </button>

                {status && <p className="text-center text-accent mt-2 text-sm animate-pulse">{status}</p>}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
