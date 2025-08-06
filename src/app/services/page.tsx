import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ServicesHeroSection from "./ServicesHeroSection";
import ServicesSection from "./ServicesSection";

export default function ServicesPage() {
    return (
        <div className="bg-white">
            <ServicesHeroSection />
            <ServicesSection />
            
            {/* Downloadable Forms Section */}
            <section className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-dark-primary">Downloadable Forms</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold mb-3 text-dark-secondary">Application Forms</h3>
                        <p className="text-dark-primary-body mb-4">Forms for various power services and connections</p>
                        <a href="#" className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                            Download PDF
                        </a>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold mb-3 text-dark-secondary">Licensing Guides</h3>
                        <p className="text-dark-primary-body mb-4">Guidelines for embedded generation and mini-grid licenses</p>
                        <a href="#" className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                            Download PDF
                        </a>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold mb-3 text-dark-secondary">Power Audit Summaries</h3>
                        <p className="text-dark-primary-body mb-4">Summaries of our comprehensive power infrastructure audits</p>
                        <a href="#" className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                            Download PDF
                        </a>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold mb-3 text-dark-secondary">FOI Request Template</h3>
                        <p className="text-dark-primary-body mb-4">Template for submitting Freedom of Information requests</p>
                        <a href="#" className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                            Download PDF
                        </a>
                    </div>
                </div>
            </section>
            
            <CTASection 
                heading="Partner with Us to Power Every Community in Imo State" 
                subtext="Want to get involved in our electrification initiatives or partner with us? Reach out today."
                buttonLabel="Contact Us" 
                buttonHref="/contact-us" 
            />
            <Footer />
        </div>
    );
}