import Link from 'next/link';
import { FiTool, FiSun, FiSmartphone, FiShoppingCart, FiAlertTriangle, FiUserCheck, FiMapPin, FiHeart, FiLayers } from 'react-icons/fi';

export default function Services() {
    return (
        <>
            <nav className="bg-white shadow px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
                <div className="text-3xl font-bold text-green-700">OftenDone</div>
                <div className="space-x-4">
                    <a href="/" className="text-gray-700 hover:text-green-700">Home</a>
                    <a href="/services" className="text-gray-700 hover:text-green-700">Services</a>
                    <a href="/contact" className="text-gray-700 hover:text-green-700">Contact</a>
                </div>
            </nav>
            <section className="bg-gray-50 pt-[100px] pb-16 px-6">
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
                    At OftenDone, we handle the small but vital tasks that make life smoother. Whether it’s daily errands or emergency help, our trusted team is here to support your lifestyle.
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Popular Services</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { title: "Other", desc: "Need help with anything else not listed? Feel free to reach out and we can still see if we can help! ", icon: <FiTool /> },
                        { title: "Lawn Care", desc: "Keep your yard in top shape without lifting a finger.", icon: <FiSun /> },
                        { title: "Tech Help", desc: "From setup to troubleshooting—we make tech simple.", icon: <FiSmartphone /> },
                        { title: "Errand Running", desc: "Groceries, prescriptions, and more—handled for you.", icon: <FiShoppingCart /> },
                        { title: "Emergency Replacement", desc: "When something unexpectedly breaks or wears out—whether it’s a light bulb, battery, or appliance—our fast and reliable emergency replacement service is here to help, day or night, ensuring your home stays safe and functional", icon: <FiAlertTriangle /> },
                        { title: "Meal Preparation", desc: "We provide personalized meal preparation services tailored to your dietary needs. Enjoy home-cooked meals without the hassle of cooking.", icon: <FiUserCheck /> },
                        { title: "Transportation Assistance", desc: "Need a ride? We offer transportation services to get you to appointments, errands, or social events, ensuring you arrive safely and on time.", icon: <FiMapPin /> },
                        { title: "Pet Care", desc: "Whether it’s walking, feeding, or just spending time with your furry friends, our pet care services ensure your pets are well-cared for when you can’t be there.", icon: <FiHeart /> },
                        { title: "Home Organization", desc: "Tidy up your space with our home organization services. From closets to garages, we help bring order to your daily life.", icon: <FiLayers /> }
                    ].map((service) => (
                        <div
                            key={service.title}
                            className="bg-white p-6 rounded shadow text-center transition transform duration-300 hover:scale-105 hover:bg-green-700 hover:text-white"
                        >
                            <div className="text-4xl mb-4 flex justify-center text-inherit">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            <div className="text-center mt-16 mb-16">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Need Help with Something?</h3>
                <p className="mb-6 text-gray-700">Let us know what you need. We’re fast, friendly, and flexible.</p>
                <Link href="/contact" className="inline-block bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition">
                    Get in Touch
                </Link>
            </div>
            <footer className="text-center py-2 text-gray-500 text-sm bg-gray-50  bottom-0 left-0 w-full">
                &copy; 2024 OftenDone. All rights reserved.
            </footer>
        </>
    )
}
