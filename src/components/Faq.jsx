import { useState } from 'react'
import { X, Plus } from 'lucide-react'
import SectionLabel from '../components/SectionLabel.jsx'

const faqs = [
  {
    n: '01',
    q: 'What services does SquareUp provide?',
    a: 'SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
  },
  {
    n: '02',
    q: 'How can SquareUp help my business?',
    a: 'We partner closely with you to understand your goals and translate them into digital products that drive growth, streamline operations, and elevate your brand experience.',
  },
  {
    n: '03',
    q: 'What industries does SquareUp work with?',
    a: "We work across startups, enterprise leaders, media & publishers, and social good organizations, tailoring our approach to each industry's needs.",
  },
  {
    n: '04',
    q: 'How long does it take to complete a project with SquareUp?',
    a: "Timelines vary by scope, but most projects run between 6 and 16 weeks from discovery through launch. We'll give you a clear estimate after our initial discovery call.",
  },
  {
    n: '05',
    q: 'Do you offer ongoing support and maintenance after the project is completed?',
    a: 'Yes. We offer a range of post-launch support packages covering bug fixes, feature enhancements, security updates, and technical support.',
  },
  {
    n: '06',
    q: 'Can you work with existing design or development frameworks?',
    a: 'Absolutely. Our team is comfortable integrating with your existing design systems, codebases, and frameworks to keep things consistent.',
  },
  {
    n: '07',
    q: 'How involved will I be in the project development process?',
    a: "As involved as you'd like to be. We maintain open communication throughout, with regular check-ins, demos, and progress updates.",
  },
  {
    n: '08',
    q: 'Can you help with website or app maintenance and updates?',
    a: 'Yes, ongoing maintenance and updates are part of our post-launch support offerings to keep your product performing at its best.',
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-ink-800 border-b border-white/10">

      <div className="relative border-b border-white/10 overflow-hidden">

          <SectionLabel
            title="Frequently Asked Questions"
            description="Still you have any questions? Contact our Team via hello@squareup.com"
            image="HomeImages/Background.jpeg"
          />
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-white/10">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={item.q} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full flex items-start gap-4 text-left px-4 md:px-10 py-6"
              >
            
                <span
                  className={`w-14 h-14 rounded-md text-xl bg-gradient-to-b from-ink-600 to-ink-800 flex items-center justify-center shrink-0 ${
                    isOpen ? 'text-[#9EFF00]' : 'text-white'
                  }`}
                >
                  {item.n}
                </span>

                <span className="flex-1 min-h-[56px] flex flex-col justify-center">
                  <span className={`block text-md font-medium leading-snug ${isOpen ? 'text-[#C5FF66]' : 'text-[#E6E6E6]'}`}>
                    {item.q}
                  </span>
                  {isOpen && (
                    <span className="block text-white/50 text-md mt-3 leading-relaxed">
                      {item.a}
                    </span>
                  )}
                </span>

                <span className="text-white font-medium shrink-0 h-14 flex items-center">
                  {isOpen ? <X size={22} /> : <Plus size={22} />}
                </span>
              </button>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Faq