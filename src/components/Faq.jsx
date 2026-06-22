import { useState } from 'react'
import {X, Plus} from 'lucide-react'

const faqs = [
  {
    q: 'What services does SquareUp provide?',
    a: 'SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.',
  },
  {
    q: 'How can SquareUp help my business?',
    a: 'We partner closely with you to understand your goals and translate them into digital products that drive growth, streamline operations, and elevate your brand experience.',
  },
  {
    q: 'What industries does SquareUp work with?',
    a: 'We work across startups, enterprise leaders, media & publishers, and social good organizations, tailoring our approach to each industry\'s needs.',
  },
  {
    q: 'How long does it take to complete a project with SquareUp?',
    a: 'Timelines vary by scope, but most projects run between 6 and 16 weeks from discovery through launch. We\'ll give you a clear estimate after our initial discovery call.',
  },
  {
    q: 'Do you offer ongoing support and maintenance after the project is completed?',
    a: 'Yes. We offer a range of post-launch support packages covering bug fixes, feature enhancements, security updates, and technical support.',
  },
  {
    q: 'Can you work with existing design or development frameworks?',
    a: 'Absolutely. Our team is comfortable integrating with your existing design systems, codebases, and frameworks to keep things consistent.',
  },
  {
    q: 'How involved will I be in the project development process?',
    a: 'As involved as you\'d like to be. We maintain open communication throughout, with regular check-ins, demos, and progress updates.',
  },
  {
    q: 'Can you help with website or app maintenance and updates?',
    a: 'Yes, ongoing maintenance and updates are part of our post-launch support offerings to keep your product performing at its best.',
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-ink-950 py-20 border-b border-white/5">
      <div className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-3">Frequently Asked Questions</h2>
        <p className="text-white/50">
          Still you have any questions? Contact our Team via hello@squareup.com
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-2 gap-x-10 gap-y-6">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={item.q} className="border-b border-white/10 pb-5">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full flex items-start gap-4 text-left"
              >
                <span className=" bg-gradient-to-b from-ink-600 to-ink-800 text-lime-400 font-light text-xl rounded-md w-12 h-12 flex items-center justify-center shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 pt-2">
                  <span className={`block font-medium ${isOpen ? 'text-lime-300' : 'text-white'}`}>{item.q}</span>
                  {isOpen && <span className="block text-white/50 text-sm mt-3">{item.a}</span>}
                </span>
                <span className="text-white/40 text-xl pt-2">{isOpen ? <X size={18} /> : <Plus size={18} />}</span>
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Faq