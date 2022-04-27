import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim())
      return toast.error('Please enter all the fields');

    emailjs
      .send(
        'service_3ht654v',
        'template_pqy98xg',
        {
          name,
          email,
          message,
        },
        'rFFwKVjtJdz5jBaIC'
      )
      .then(() => toast.success('Email successfully sent!'))
      .then(() => setFormData({ name: '', email: '', message: '' }))
      .catch(() => toast.error('Some error occured :('));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact">
      <div className="container py-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-blue-400 mb-10">Contact</h1>
        <form
          className="max-w-2xl w-full flex flex-col"
          onSubmit={handleSubmit}
        >
          <input
            className="mb-2 text-blue-400 text-2xl py-2 px-6 rounded bg-transparent border border-blue-400 placeholder:text-blue-400 focus:text-white"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="mb-2 text-blue-400 text-2xl py-2 px-6 rounded bg-transparent border border-blue-400 placeholder:text-blue-400 focus:text-white"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className="h-56 mb-2 text-blue-400 text-2xl py-2 px-6 rounded resize-none bg-transparent border border-blue-400 placeholder:text-blue-400 focus:text-white"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button className="mr-auto py-2 px-6 border border-blue-400 text-blue-400 rounded text-2xl transition hover:bg-blue-400 hover:text-slate-800">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
