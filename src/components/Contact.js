import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useState } from 'react';

import Button from './Button';
import Form, { FormField } from './Form';

const Contact = () => {
  const [disabled, setDisabled] = useState(false);

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

    setDisabled(true);

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
      .catch(() => toast.error('Some error occured :('))
      .finally(() => setDisabled(false));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-slate-800" id="contact">
      <div className="min-h-screen container py-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-blue-400 mb-10">Contact</h1>
        <Form onSubmit={handleSubmit}>
          <FormField
            type="text"
            name="name"
            placeholder="Name"
            disabled={disabled}
            value={formData.name}
            onChange={handleChange}
          />
          <FormField
            type="email"
            name="email"
            placeholder="Email"
            disabled={disabled}
            value={formData.email}
            onChange={handleChange}
          />
          <FormField
            className="h-56"
            tag="textarea"
            name="message"
            placeholder="Message"
            disabled={disabled}
            value={formData.message}
            onChange={handleChange}
          />
          <Button className="w-full lg:w-auto mr-auto" disabled={disabled}>
            Send
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
