import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_37q2pt7', 'template_6248czm', e.target, 'UTtZgzv0m297lUyRm') // Replace with your service ID and template ID
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Your message has been sent successfully');
          setIsSubmitting(false);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('There was an issue sending your message. Please try again later.');
          setIsSubmitting(false);
        }
      );
  };
  
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-lg font-mono text-gray-500">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          className="border border-gray-300 p-2 mt-1"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-lg font-mono text-gray-500">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          className="border border-gray-300 p-2 mt-1"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="text-lg font-mono text-gray-500">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
          className="border border-gray-300 p-2 mt-1"
          required
          minLength={10}
          rows={10}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-darkGray py-4 px-4 text-white hover:bg-yellow-600 transition duration-300 w-[10rem]"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
