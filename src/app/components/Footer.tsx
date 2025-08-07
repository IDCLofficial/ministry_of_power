"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const info = {
    logo: "/logo.png",
    ministry: "Power and Electrification",
    description: "The Imo State Ministry of Power and Electrification is responsible for driving sustainable and accessible electricity across the state. Under the leadership of Governor Hope Uzodimma, the ministry has taken significant steps toward improving the state’s energy infrastructure. One of its major initiatives includes a statewide power audit aimed at assessing electricity demands in over 700 autonomous communities, urban centers, and the capital city. This data-driven approach guides planning for equitable electrification.",
    quickLinks: [
        {
            label: "Projects",
            href: "/projects" 
        },
        {
            label: "News",
            href: "/news"
        },
        {
            label: "Department",     
            href: "/departments"
        },
        {
            label: "Events",
            href: "/events"
        },
        {
            label: "Media",
            href: "/media"
        },
        {
            label: "Contact Us",        
            href: "/contact-us"
        },
    ],
    newsletter: [
        {
            label: "Signup to Our Newsletter",          
            href: "/"
        },
        {
            label: "Subscribe",
            href: "/"
        },
    ],
    contact: [
        {
            label: "+234 814 981 5425",
            href: "/"
        },
        {
            label: "commissioner.power@imostate.gov.ng",
            href: "/"
        },  
        {
            label: "Ministry Address: Ministry of Power and Electrification, State Secretariat Complex, Port Harcourt Road, New Owerri, Imo State, Nigeria.",
            href: "/"
        },
    ]
}

export default function Footer() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        // Simulate API call
        setTimeout(() => {
            if (email && email.includes("@")) {
                setSuccess(true);
                setEmail("");
            } else {
                setError("Please enter a valid email address");
            }
            setLoading(false);
        }, 1500);
    };

    return (
        <footer className="w-full bg-white pt-8 sm:pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mx-auto px-0 sm:px-4 flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 md:gap-12 pb-8">
                {/* Logo and Description */}
                <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-2">
                    <Image src={info.logo} alt="Imo State Logo" width={35} height={35} className="sm:w-[40px] sm:h-[40px]" />
                    <span className="font-semibold text-sm sm:text-base text-gray-900 leading-tight">
                    Imo State Ministry<br />
                    of {info.ministry}
                    </span>
                </div>
                <p className="text-[0.7rem] sm:text-xs text-gray-600 max-w-xs">
                    {info.description}
                </p>
                </div>
                {/* Quick Links */}
                <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Quick Links</h4>
                <div className="flex flex-col flex-wrap gap-x-3 sm:gap-x-4 gap-y-1 sm:gap-y-2 text-[0.75rem] sm:text-sm text-gray-700">
                    {info.quickLinks.map((link) => (
                        <Link href={link.href} className="hover:underline" key={link.label}>{link.label}</Link>
                    ))}
                </div>
                </div>
                {/* Newsletter and Contact */}
                <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">{info.newsletter[0].label}</h4>
                <form className="flex mb-3" onSubmit={handleSubmit}>
                    <input
                    type="email"
                    placeholder="Myemail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-l px-2 sm:px-3 py-1.5 sm:py-2 text-[0.75rem] sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                    disabled={loading}
                    />
                    <button 
                        type="submit" 
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-r text-[0.75rem] sm:text-sm font-medium ${loading ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'} text-white`}
                        disabled={loading}
                    >
                        {loading ? "Subscribing..." : info.newsletter[1].label}
                    </button>
                </form>
                {success && (
                    <div className="text-green-600 text-[0.75rem] sm:text-sm mb-2">
                        Thank you for subscribing to our newsletter!
                    </div>
                )}
                {error && (
                    <div className="text-red-600 text-[0.75rem] sm:text-sm mb-2">
                        {error}
                    </div>
                )}
                <div className="text-[0.7rem] sm:text-xs text-gray-700 space-y-1 flex flex-col">
                    {info.contact.map((item) => (
                        <Link href={item.href} key={item.label}>{item.label}</Link>
                    ))}
                </div>
                </div>
            </div>
            <div className="border-t border-gray-200 text-center py-3 text-[0.7rem] sm:text-xs text-gray-500">Powered by IDCL.</div>
        </footer>
    );
} 