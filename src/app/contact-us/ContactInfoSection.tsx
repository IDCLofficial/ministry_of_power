import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const contactInfo = {
  address: "Ministry of Power and Electrification, Imo State Secretariat Complex, Owerri, Imo State, Nigeria",
  email: "commissioner.power@imostate.gov.ng",
  phone: "07034991521",
  socials: [
    { icon: <FaTwitter />, href: "https://x.com/GovtOfImoState" },
  ],
};

const ContactInfoSection = () => (
  <div className="mb-8 md:mb-0">
    <p className="mb-4 text-[#151A21] text-[1rem]">We welcome your inquiries, suggestions, and feedback. Whether you&apos;re a resident, business owner, community leader, or partner organization, the Imo State Ministry of Power and Electrification is here to assist you with all your power and electrification needs.</p>
    <h2 className="text-xl font-bold mb-2">Contact Us</h2>
    <ul className="space-y-2 mb-4">
      <li className="flex items-start gap-2 text-[#151A21]"><FaMapMarkerAlt className="mt-1 text-xl" /> <span>{contactInfo.address}</span></li>
      <li className="flex items-center gap-2 text-[#151A21]"><FaEnvelope /> <span>{contactInfo.email}</span></li>
      <li className="flex items-center gap-2 text-[#151A21]"><FaPhone /> <span>{contactInfo.phone}</span></li>
    </ul>
    <div className="flex gap-4 mt-2">
      {contactInfo.socials.map((s, i) => (
        <a key={i} href={s.href} className="text-white hover:bg-primary-green rounded-full bg-black p-2" target="_blank" rel="noopener noreferrer">{s.icon}</a>
      ))}
    </div>
  </div>
);

export default ContactInfoSection;