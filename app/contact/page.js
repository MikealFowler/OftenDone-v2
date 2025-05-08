"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const payload = {
            name: form.name.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (data.success) {
                setFormStatus('Message sent!');
                form.reset();
            } else {
                setFormStatus(`Error: ${data.error}`);
            }
        } catch (err) {
            setFormStatus(`Failed to send: ${err.message}`);
        }
    };

    return (
        <>
            <nav className="bg-white shadow px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
                <div className="text-3xl font-bold text-green-700">OftenDone</div>
                <div className="space-x-4">
                    <Link href="/" className="text-gray-700 hover:text-green-700">Home</Link>
                    <Link href="/services" className="text-gray-700 hover:text-green-700">Services</Link>
                    <Link href="/contact" className="text-gray-700 hover:text-green-700">Contact</Link>
                </div>
            </nav>
            <main className="font-sans text-gray-800 pt-[100px] pb-16 px-6 max-w-6xl mx-auto">

                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Get in Touch</h1>
                <p className="mb-10 text-center">
                    Whether you need help or have a question, we&apos;re here for you.
                </p>

                <div className="mt-10 flex flex-col lg:flex-row gap-6">
                    <div className="flex-1 bg-white p-6 rounded shadow">
                        <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" name="name" required className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-green-700 focus:border-green-700" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-green-700 focus:border-green-700" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <input type="text" id="subject" name="subject" className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-green-700 focus:border-green-700" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" rows="4" required className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-green-700 focus:border-green-700"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Submit</button>
                                {formStatus && <p className="mt-2 text-sm text-gray-600">{formStatus}</p>}
                            </div>
                        </form>
                    </div>

                    <div className="w-full lg:w-1/3 space-y-6">
                        <div className="bg-gray-100 p-6 rounded shadow">
                            <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
                            <p className="mb-2"><strong>Phone:</strong> <a href="tel:9027897569" className="text-blue-600">902-789-7569</a></p>
                            <p><strong>Email:</strong> <a href="mailto:oftendoneservices@gmail.com" className="text-blue-600">oftendoneservices@gmail.com</a></p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded shadow">
                            <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
                            <ul className="text-gray-700 space-y-1">
                                <li><strong>Monday–Friday:</strong> 24/7</li>
                                <li><strong>Saturday:</strong> 9:00 AM – 8:00 PM</li>
                                <li><strong>Sunday:</strong> 9:00 AM - 5:00 PM</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    {/* FAQ Section */}
                    <section className="py-16 px-6 bg-gray-50 max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-green-700">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">What areas do you service?</h3>
                                <p className="text-gray-700">We proudly serve the Halifax area and nearby communities. Contact us to confirm availability.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Are your services available 24/7?</h3>
                                <p className="text-gray-700">Yes! We operate around the clock to meet your needs, anytime you need help.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">How do I book a service?</h3>
                                <p className="text-gray-700">Just head to our contact page and fill out the form. We&apos;ll get back to you within a few hours.</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Can I request the same person each time?</h3>
                                <p className="text-gray-700">Absolutely. Just let us know during booking and we&apos;ll do our best to accommodate.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="text-center py-2 text-gray-500 text-sm bg-gray-50  bottom-0 left-0 w-full">
                &copy; 2024 OftenDone. All rights reserved.
            </footer>
        </>
    );
}