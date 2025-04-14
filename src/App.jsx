export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <div className="text-5xl font-semibold tracking-wide mb-4">
          Ask us anything.
        </div>
        <div className="text-2xl text-white/90">
          You'll get <span className="italic">everything</span>.
        </div>
        <button className="mt-8 px-6 py-3 bg-white text-black font-medium rounded-2xl hover:bg-white/90 transition">
          Your Request
        </button>
      </section>

      {/* Our Services Section */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6">Our Services</h2>
        <p className="text-lg text-white/80 mb-4">From sold-out concerts and sporting events to once-in-a-lifetime VIP experiences, we open every door for you.</p>
        <ul className="mt-8 space-y-4 text-white/70">
          <li>• Premium ticketing (concerts, football, tennis, F1...)</li>
          <li>• Exclusive meet & greets and backstage access</li>
          <li>• Corporate VIP packages and hospitality</li>
          <li>• Last-minute luxury access to global events</li>
        </ul>
      </section>

      {/* Personalized Request Section */}
      <section className="bg-white text-black px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-6">Personalized Request</h2>
        <p className="text-lg text-black/70 mb-8">Looking for something unique? Share your needs and we’ll tailor an unforgettable experience just for you.</p>

        <a
          href="https://wa.me/yourwhatsapplink" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-black text-white font-medium rounded-2xl hover:bg-black/90 transition mb-6"
        >
          Contact us on WhatsApp
        </a>

        <form 
          action="https://formspree.io/f/xyzabc" 
          method="POST"
          className="max-w-xl mx-auto mt-8 text-left space-y-4"
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" name="name" className="w-full px-4 py-2 border rounded-lg" placeholder="Your name" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" name="email" className="w-full px-4 py-2 border rounded-lg" placeholder="you@example.com" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Request Details</label>
            <textarea name="message" className="w-full px-4 py-2 border rounded-lg" rows="4" placeholder="Tell us what you need..." required></textarea>
          </div>
          <button type="submit" className="px-6 py-3 bg-black text-white font-medium rounded-2xl hover:bg-black/90 transition">
            Submit Request
          </button>
        </form>

        <p className="mt-10 text-sm text-black/60">
          Or email us at <a href="mailto:contact@beyondaccess.com" className="underline">contact@beyondaccess.com</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-white/50">
        © {new Date().getFullYear()} Beyond Access. All rights reserved.
      </footer>
    </div>
  );
}
