'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiSun, FiSmartphone, FiShoppingCart } from 'react-icons/fi';

export default function Home() {
  const router = useRouter();

  const handleContactClick = () => {
    console.log("clicked");
    router.push('/contact');
  };

  return (
    <main className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
        <div className="text-3xl font-bold text-green-700">OftenDone</div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-green-700">Home</Link>
          <Link href="/services" className="text-gray-700 hover:text-green-700">Services</Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-700">Contact</Link>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20 text-center px-6 mt-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your 24/7 Helping Hand</h1>
        <p className="text-sm uppercase tracking-wider mb-2 text-green-200">
          Trusted by families across Halifax
        </p>
        <p className="text-lg md:text-xl mb-6">Helping you handle life’s everyday challenges with care and consistency.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-green-600 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
        >
          Get Help Now
        </a>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* About Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-gray-800 space-y-6 leading-relaxed">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-green-700">Why We Do What We Do at OftenDone</h2>

        <p className="text-lg">
          At Often Done, our journey began with a simple realization: Life’s small tasks
          can often feel like insurmountable obstacles, especially for those who need
          a helping hand. Whether it’s changing a lightbulb, mowing the lawn, or just
          getting through the day with some extra support, we understand that these
          challenges can weigh heavily on anyone.
        </p>
        <p className="text-lg">
          For many of us, we’ve seen firsthand the struggles that our elderly loved ones,
          neighbors, and community members face as they strive to maintain their independence.
          We’ve watched as they navigate the difficulties of daily life, often without the
          support they deserve.
        </p>
        <p className="text-lg">
          Our work is driven by the knowledge that no one should feel alone or overwhelmed
          by the day-to-day tasks that life demands. We’ve all had moments where even the
          smallest chore can feel daunting, where the presence of a helping hand could have
          made all the difference. For the elderly and those who may not have the same
          strength or mobility they once did, these challenges can feel even greater.
        </p>
        <p className="text-lg">
          Every time we visit a home, or simply provide a listening
          ear, we’re reminded of why we started OftenDone in the first place. It’s not just
          about completing tasks it’s about providing peace of mind, comfort, and a sense
          of companionship. It’s about making sure that those who need us most can count on
          us, day in and day out, to be there without fail.
        </p>
        <p className="text-lg">
          Often Done is our way of giving back to the community that has given us so much.
          It’s our promise to you that no matter what life throws your way, you can rely on
          us to be there, ready to help with a smile and a solution.
        </p>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* How It Works Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-2xl font-bold mb-8 text-green-700">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          <div>
            <h3 className="font-semibold mb-2 text-lg">1. Tell Us What You Need</h3>
            <p className="text-gray-600">Use our contact form to describe the task—big or small.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-lg">2. Get Matched Fast</h3>
            <p className="text-gray-600">We'll confirm your request and schedule help ASAP.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-lg">3. Relax, It’s Done</h3>
            <p className="text-gray-600">Our team handles it with care, and you get time back in your day.</p>
          </div>
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Services Preview */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Popular Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Lawn Care", desc: "Keep your yard in top shape without lifting a finger.", icon: <FiSun /> },
            { title: "Tech Help", desc: "From setup to troubleshooting—we make tech simple.", icon: <FiSmartphone /> },
            { title: "Errand Running", desc: "Groceries, prescriptions, and more—handled for you.", icon: <FiShoppingCart /> },
          ].map((service) => (
            <div key={service.title} className="bg-white p-6 rounded shadow hover:shadow-md transition">
              <div className="text-green-700 text-3xl mb-2">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="my-12 border-gray-200" />

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">What Our Clients Are Saying</h2>
        <div className="space-y-10">
          <blockquote>
            <p className="italic">&quot;Often Done has been a lifesaver! I can&apos;t imagine managing my daily tasks without their support.&quot;</p>
            <p className="mt-2 font-medium">- Susan North</p>
          </blockquote>
          <blockquote>
            <p className="italic">&quot;They helped my elderly parents with meal prep and transportation. Truly a blessing.&quot;</p>
            <p className="mt-2 font-medium">- Paul Gouveia</p>
          </blockquote>
          <blockquote>
            <p className="italic">&quot;Tech setup was easy and stress-free thanks to Often Done.&quot;</p>
            <p className="mt-2 font-medium">- Chris Walsh</p>
          </blockquote>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="bg-green-600 text-white py-12 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6">Reach out and let us lend a hand.</p>
        <button
          className="inline-block bg-green-600 text-white border-2 border-black px-6 py-2 rounded hover:bg-green-700 transition"
          onClick={handleContactClick}
        >
          Contact Us
        </button>
      </section>
      <footer className="text-center py-2 text-gray-500 text-sm bg-gray-50  bottom-0 left-0 w-full">
        &copy; 2024 OftenDone. All rights reserved.
      </footer>
    </main>
  );
}
