import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import CtaBanner from '../components/CtaBanner.jsx'
import Faq from '../components/Faq.jsx'
import ContactForm from '../components/ContactForm.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import Logo from '../components/Logo.jsx'
import {BatteryCharging, Brush, ChessQueen, Medal, Puzzle, SmartphoneCharging, Users} from 'lucide-react'

const audiences = ['Startups', 'Enterprise leaders', 'Media & Publishers', 'Social Good']

const brands = ['Zapier', 'Spotify', 'Zoom', 'Slack', 'Amazon', 'Adobe']

const services = [
  {
    icon: <Brush />,
    title: 'Design',
    text: 'Our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it\'s about creating seamless and intuitive user experiences.',
  },
  {
    icon: <Puzzle />,
    title: 'Engineering',
    text: 'Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions using the latest technologies and best practices tailored to your specific needs.',
  },
  {
    icon: <BatteryCharging />,
    title: 'Project Management',
    text: 'Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications, with effective communication and collaboration tools throughout.',
  },
]

const why = [
  { 
    icon: <Medal />,
   title: 'Expertise', 
   text: 'Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.'
   },
  { 
    icon: <Users/>, 
    title: 'Client-Centric Approach', 
    text: 'We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.'
   },
  { 
    icon: <SmartphoneCharging />, 
    title: 'Results-Driven Solutions', 
    text: 'Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.'
   },
  { 
    icon: <ChessQueen />, 
    title: 'Collaborative Partnership', 
    text: 'We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.' 
  },
]

const testimonials = [
  { 
    name: 'John Smith', 
    role: 'CEO of Chic Boutique', 
    title: 'SquareUp has been Instrumental in Transforming our Online Presence.', 
    text: 'Their team\'s expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn\'t be happier.',
    image: '/HomeImages/Person1.png'
  },
  { 
    name: 'Sarah Johnson', 
    role: 'Founder of HungryBites', 
    title: 'Working with SquareUp was a breeze.', 
    text: 'They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience.',
    image: '/HomeImages/Person2.png'
  },
  { 
    name: 'Mark Thompson', 
    role: 'CEO of EventMasters', 
    title: 'SquareUp developed a comprehensive booking and reservation system for our event management company.', 
    text: 'Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients\' experience.',
    image: '/HomeImages/Person03.png' 
  },
  { 
    name: 'Laura Adams', 
    role: 'COO of ProTech Solutions', 
    title: 'ProTech Solutions turned to SquareUp to automate our workflow', 
    text: 'They delivered an exceptional custom software solution. The system has significantly improved our productivity and reduced manual errors. SquareUp\'s expertise and professionalism have made them a trusted technology partner.',
    image: '/HomeImages/Person4.png'
  },
  { 
    name: 'Michael Anderson', 
    role: 'Founder of Dream Homes Realty', 
    title: 'SquareUp designed and developed a captivating web portal for showcasing our real estate listings', 
    text: 'The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp\'s expertise in the real estate industry is unmatched.',
    image: '/HomeImages/Person5.png' 
  },
  { 
    name: 'Emily Turner', 
    role: 'CEO of FitLife Tracker', 
    title: 'FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.', 
    text: 'SquareUp\'s team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.',
    image: '/HomeImages/Person6.png'
  },
]

const Home = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-900 bg-noise border-b border-white/5">
        <div className="hero-glow absolute inset-0" />
        <div className="relative max-w-5xl mx-auto px-5 md:px-8 pt-20 pb-16 text-center mt-10">
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            A Digital Product Studio<br className="hidden md:block" /> that will Work
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mt-14 text-sm border border-gray-950">
            <span className="text-white/40 py-2">For</span>
            {audiences.map((a) => (
              <span key={a} className="bg-ink-800 text-white/80 px-6 py-2 rounded">{a}</span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 mt-14">
            <span className="text-white/60 text-sm rounded bg-ink-700 px-6 py-3">Our Works</span>
            <HashLink
               smooth
               to="/#contact-form"
                className="bg-lime-400 text-ink-950 font-medium px-6 py-3 rounded hover:bg-lime-300 transition-colors">
               Contact Us
             </HashLink>
          </div>
        </div>
        <div className="relative h-40 md:h-56" />
      </section>

      <section className="bg-ink-950 py-12 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          <p className="text-white/30 text-sm mb-8">Trusted By 250+ Companies</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-white text-lg font-medium">
            {brands.map((b) => 
            <span key={b}>
              {b}
              </span>)}
          </div>
        </div>
      </section>

      <section className="bg-ink-900 bg-noise py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SectionLabel
            title="Our Services"
            description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-14 ">
            {services.map((s) => (
              <div key={s.title} className="bg-ink-800 rounded-2xl p-7 flex flex-col h-full">
                <div className="w-12 h-12 rounded-md bg-gradient-to-b from-ink-600 to-ink-800 text-lime-400 flex items-center justify-center text-lg mb-5">
                  {s.icon}
                </div>
                <h3 className="text-white font-medium text-lg mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{s.text}</p>
                <Link to="/services" className="block text-center text-white/70 text-sm border border-white/15 rounded-md py-2.5 mt-auto hover:border-white hover:text-white transition-colors">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SectionLabel
            title="Why Choose SquareUp?"
            description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
          />
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {why.map((w) => (
              <div key={w.title} className="bg-ink-900 rounded-2xl p-7">
                <div className="flex items-center gap-5 mb-4">
                <div className="w-12 h-12 bg-gradient-to-b from-ink-600 to-ink-800 rounded-md text-lime-400 flex items-center  justify-center text-xl shrink-0">
                  {w.icon}
                </div>
                  <h3 className="text-white font-medium mb-2">{w.title}</h3>
                  </div >
                  <p className="text-white/50 text-sm leading-relaxed">{w.text}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-900 bg-noise py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SectionLabel
            title="What our Clients say About us"
            description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
          />
          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-ink-800 rounded-2xl p-7 flex flex-col h-full">
                <h3 className="text-lime-200 font-light mb-3">{t.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                   <div className="w-11 h-11 rounded-lg bg-gradient-to-b from-lime-200 to-lime-600 flex items-center justify-center overflow-hidden">
                     <img
                       src={t.image}
                       alt={t.name}
                       className="w-full h-full object-cover"
                       />
                     </div>
                    <div>
                      <p className="text-white text-sm">{t.name}</p>
                      <p className="text-white/40 text-xs">{t.role}</p>
                    </div>
                  </div>
                  <span className="text-white/60 text-xs border border-white/15 rounded-md h-10 px-3 py-2.5 bg-ink-700 ">Open Website</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />

      <section className="bg-ink-900 bg-noise border-y border-white/5 py-16 text-center" id="contact-form">
            <div className="max-w-4xl mx-auto">
       
           <div className="w-14 h-14 rounded-2xl bg-lime-400 flex items-center justify-center text-ink-950 text-2xl mx-auto mb-6">
          <Logo showText={false}
          iconContainerClassName="w-14 h-14 text-4xl rounded-lg" />
        </div>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">Thank you for your Interest in SquareUp.</h2>
          <p className="text-white/50 text-sm mb-8">
            We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the
            different ways you can get in touch with us.
          </p>
         <HashLink
            smooth
            to="/#contact-form"
            className="bg-lime-400 text-ink-950 font-medium text-sm px-6 py-3 rounded-md hover:bg-lime-300 transition-colors"
              >
              Start Project
           </HashLink>
          </div >
        
        <div className="px-5 md:px-8 mt-12">
          <ContactForm />
        </div>
      </section>
    </>
  )
}

export default Home 