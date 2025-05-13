import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lpax32i', 'template_1aon56h', form.current, {
        publicKey: 'IC_od0RU4aFLCo1sW',
      })
      .then(
        () => {
          toast.success('Message sent successfully!', {
            autoClose: 3000,
          });
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}. Please try again.`, {
            autoClose: 3000,
          });
        },
      );
  };
  return (
    <section id="contact" className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[var(--color-accent)] mb-12">
          Contact Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-start gap-4 bg-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <FaPhoneAlt className="text-[var(--color-accent)] text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Phone</h3>
                <p className="text-[var(--color-text-secondary)] break-words">+977-9807337368</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 bg-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <FaEnvelope className="text-[var(--color-accent)] text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Email</h3>
                <p className="text-[var(--color-text-secondary)] break-words">shresthaaayush863@gmail.com</p>
              </div>
            </div>

            {/* Socials */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {[
                { icon: <FaInstagram />, label: 'Instagram', link: 'https://www.instagram.com/ayush_sresta' },
                { icon: <FaGithub />, label: 'GitHub', link: 'https://github.com/ayush-sresta' },
                { icon: <FaTwitter />, label: 'Twitter', link: 'https://twitter.com/ayush_sresta' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition w-full sm:w-auto"
                >
                  <span className="text-[var(--color-accent)] text-xl">{social.icon}</span>
                  <span className="text-[var(--color-text-primary)] font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name='email'
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                name='message'
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              />
            </div>
            <button
              type="submit"
              className="bg-[var(--color-accent)] text-white font-medium px-6 py-2 rounded-md hover:bg-[var(--color-accent-hover)] transition duration-300"
            >
              Send Message
            </button>
            <ToastContainer position='top-center' />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
