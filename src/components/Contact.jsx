// src/components/Contact.js
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("xwpjvvge");

  if (state.succeeded) {
    return (
      <section id="contact" className="contact">
        <div className="container contact-inner">
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2 className="section-title">Message Sent!</h2>
            <p className="success-text">
              Thank you for your message! I'll get back to you within 48 hours.
            </p>
            <button 
              className="btn primary" 
              onClick={() => window.location.reload()}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-sub">
          Interested in working together or have a question? Send a message — 
          I typically reply within 48 hours.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name" className="label-text">Name</label>
            <input 
              id="name"
              type="text" 
              name="name" 
              placeholder="Your name" 
              required 
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              className="validation-error"
            />
          </div>

          <div className="field">
            <label htmlFor="email" className="label-text">Email</label>
            <input 
              id="email"
              type="email" 
              name="email" 
              placeholder="you@example.com" 
              required 
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="validation-error"
            />
          </div>

          <div className="field full-width">
            <label htmlFor="message" className="label-text">Message</label>
            <textarea 
              id="message"
              name="message" 
              rows={5} 
              placeholder="Tell me about your project..." 
              required 
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="validation-error"
            />
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="btn primary" 
              disabled={state.submitting}
            >
              {state.submitting ? (
                <>
                  <span className="loading-spinner"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
            <a 
              className="email-link" 
              href="mailto:muhammedlaminsaidykhan45@gmail.com"
            >
              Or email me directly
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
