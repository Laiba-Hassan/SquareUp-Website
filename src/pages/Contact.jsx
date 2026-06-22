import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Faq from '../components/Faq.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us today and let us help you with any questions or inquiries you may have."
      />

      <section className="max-w-3xl mx-auto px-5 md:px-8 py-16">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span className="bg-ink-800 text-white/80 text-sm px-5 py-3 rounded-full">✉ hello@squareup.com</span>
          <span className="bg-ink-800 text-white/80 text-sm px-5 py-3 rounded-full">☎ +91 91813 23 2309</span>
          <span className="bg-ink-800 text-white/80 text-sm px-5 py-3 rounded-full">📍 Get Location</span>
        </div>

        <ContactForm />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-sm">Operating Days</span>
            <span className="bg-ink-800 text-white/80 text-sm px-4 py-2 rounded-full">Monday to Friday</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-sm">Stay Connected</span>
            <span className="w-9 h-9 rounded-full bg-lime-400" />
            <span className="w-9 h-9 rounded-full bg-lime-400" />
            <span className="w-9 h-9 rounded-full bg-lime-400" />
          </div>
        </div>
      </section>

      <Faq />

      <CtaBanner />
    </>
  )
}
