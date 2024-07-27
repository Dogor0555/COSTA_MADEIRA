'use client';

import Image from "next/image";
import A1 from "../../img/Pics/Mail.svg";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    newsletter: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSubmitted(true);
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        });
        const data = await response.json();
        if (response.ok) {
          alert('Email enviado con éxito');
        } else {
          alert('Error al enviar el email: ' + data.message);
        }
      } catch (error) {
        console.error('Error al enviar el email:', error);
        alert('Error al enviar el email');
      }
    }
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name is required.";
    if (!values.email) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "Email address is invalid.";
    if (!values.phone) errors.phone = "Phone number is required.";
    if (!values.message) errors.message = "Message is required.";
    return errors;
  };

  return (
    <div className="contact-background">
      <div className="container py-5">
        <div className="content-card">
          {submitted ? (
            <div className="alert alert-success" role="alert">
              Thank you! Your message has been sent.
            </div>
          ) : (
            <div className="row">
              <div className="col-md-6">
                <h2 className="mb-4">Contact Us</h2>
                <p className="mb-4 text-primary">Have questions? Get in touch with us!</p>
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <span className="input-group-text"><FaUser /></span>
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text"><FaEnvelope /></span>
                    <input
                      type="email"
                      name="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text"><FaPhone /></span>
                    <input
                      type="tel"
                      name="phone"
                      className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                      placeholder="Your Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      className={`form-control ${errors.message ? "is-invalid" : ""}`}
                      placeholder="Your Message"
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                  </div>
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      name="newsletter"
                      className="form-check-input"
                      id="newsletterCheck"
                      checked={form.newsletter}
                      onChange={handleChange}
                    />
                    <label className="form-check-label text-primary" htmlFor="newsletterCheck">
                      Subscribe to our newsletter
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="image-wrapper">
                  <Image src={A1} alt="Contact Us" layout="responsive" width={300} height={300} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
