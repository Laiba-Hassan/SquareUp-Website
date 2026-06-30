import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Faq from '../components/Faq.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

const socials = [
  { label: 'Facebook', path: 'ri-facebook-circle-fill' },
  { label: 'Twitter', path: 'ri-twitter-fill' },
  { label: 'LinkedIn', path: 'ri-linkedin-box-fill' },
]

const Contact = () => {
  return (
    <div className="max-w-8xl mx-auto px-20 max-sm:px-4">
      <div className="border-x border-ink-600 min-h-screen">
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us today and let us help you with any questions or inquiries you may have"
        image="HomeImages/Background.jpeg"
      />

      <section className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="flex flex-wrap max-sm:flex-col justify-center gap-4 py-10 text-white/80">
          <span className="flex items-center gap-2 px-5 py-3 rounded-md bg-ink-700"><i className="ri-mail-fill text-xl text-lime-400" /> hello@squareup.com</span>
            <span className="flex items-center gap-2 bg-ink-700 px-5 py-3 rounded-md"><i className="ri-phone-fill text-xl text-lime-400" /> +91 91813 23 2309</span>
            <span className="flex items-center gap-2 bg-ink-700 px-5 py-3 rounded-md"><i className="ri-map-pin-2-fill text-xl text-lime-400" /> Somewhere in the World</span>
        </div>

        <ContactForm />

<div className="mx-[-20px] md:mx-[-32px] border-t border-ink-600">
  <div className="grid grid-cols-1 lg:grid-cols-2">

    <div className="flex items-center justify-center gap-2 sm:gap-6 py-8 lg:border-r border-ink-600 max-sm:border-b">
      <span className="text-white/60 text-base">
        Operating Days
      </span>

      <span className="bg-ink-700 text-white/80 px-6 py-3 rounded-lg">
        Monday to Friday
      </span>
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 py-8">
  <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 sm:border sm:border-ink-600 sm:rounded-lg sm:px-6 sm:py-3">
    <span className="text-white/80 text-base">
      Stay Connected
    </span>

    <div className="flex items-center gap-3">
      {socials.map((s) => (
        <a 
          key={s.label}
          href="#"
          aria-label={s.label}
          className="bg-gradient-to-b from-ink-600 to-ink-800 rounded-md w-12 h-12 flex items-center justify-center hover:scale-105 transition"
        >
          <i className={`${s.path} text-3xl text-lime-400`} />
        </a>
      ))}
    </div>
  </div>
</div>

  </div>
</div>
      </section>

      <Faq />

      <CtaBanner />
    </>
    </div>
    </div>
  )
}
export default Contact