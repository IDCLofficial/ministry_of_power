"use client"
import React, { useState } from "react";

const ContactFormSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Simulate API call
    setTimeout(() => {
      // In a real application, you would send the form data to your API here
      console.log("Form submitted:", form);
      
      // Simulate success
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-[#222] text-white p-8 rounded shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-medium mb-2">LET&rsquo;S TALK HERE</h2>
      <p className="mb-6 text-gray-200 text-sm">Feel free to send us a message</p>
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p>Thank you for your message! We&rsquo;ll get back to you soon.</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none"
          required
          disabled={loading}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none"
          required
          disabled={loading}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none min-h-[100px]"
          required
          disabled={loading}
        />
        <button
          type="submit"
          className={`w-full py-2 rounded font-medium mt-2 cursor-pointer ${loading ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'} text-white`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactFormSection;