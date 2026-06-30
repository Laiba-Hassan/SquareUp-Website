import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Faq from '../components/Faq.jsx'
import ContactForm from '../components/ContactForm.jsx'
import SectionLabel from '../components/SectionLabel.jsx'
import Logo from '../components/Logo.jsx'
import {BatteryCharging, SmartphoneCharging, ChessQueen, Medal, Brush, Puzzle, Users } from 'lucide-react'

const audiences = ['Startups', 'Enterprise leaders', 'Media & Publishers', 'Social Good']

const brands = [
  { name: 'Zapier',  logo: '/HomeImages/Zapier.png'  },
  { name: 'Spotify', logo: '/HomeImages/Spotify.png' },
  { name: 'Zoom',    logo: '/HomeImages/Zoom.png'    },
  { name: 'Slack',   logo: '/HomeImages/Slack.png'   },
  { name: 'Amazon',  logo: '/HomeImages/Amazon.png'  },
  { name: 'Adobe',   logo: '/HomeImages/Adobe.png'   },
]

const services = [
  {
    icon: <Brush />,
    title: 'Design',
    text: "Our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
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
    text: 'Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.',
  },
  {
    icon: <Users />,
    title: 'Client-Centric Approach',
    text: 'We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.',
  },
  {
    icon: <SmartphoneCharging />,
    title: 'Results-Driven Solutions',
    text: 'Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.',
  },
  {
    icon: <ChessQueen />,
    title: 'Collaborative Partnership',
    text: 'We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.',
  },
]

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO of Chic Boutique',
    title: 'SquareUp has been Instrumental in Transforming our Online Presence.',
    text: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    image: '/HomeImages/JohnSmith.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Founder of HungryBites',
    title: 'Working with SquareUp was a breeze.',
    text: 'They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience.',
    image: '/HomeImages/SarahJohnson.jpg',
  },
  {
    name: 'Mark Thompson',
    role: 'CEO of EventMasters',
    title: 'SquareUp developed a comprehensive booking and reservation system for our event management company.',
    text: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' experience.",
    image: '/HomeImages/MarkThompson.jpg',
  },
  {
    name: 'Laura Adams',
    role: 'COO of ProTech Solutions',
    title: 'ProTech Solutions turned to SquareUp to automate our workflow',
    text: "They delivered an exceptional custom software solution. The system has significantly improved our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
    image: '/HomeImages/LauraAdams.jpg',
  },
  {
    name: 'Michael Anderson',
    role: 'Founder of Dream Homes Realty',
    title: 'SquareUp designed and developed a captivating web portal for showcasing our real estate listings',
    text: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
    image: '/HomeImages/MichaelAnderson.jpg',
  },
  {
    name: 'Emily Turner',
    role: 'CEO of FitLife Tracker',
    title: 'FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.',
    text: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
    image: '/HomeImages/EmilyTurner.jpg',
  },
]

const Home = () => {

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    
    <div className="max-w-8xl mx-auto px-4 md:px-20">
    <div className="border-x border-white/10 min-h-screen">

      <section className="relative overflow-hidden bg-ink-800 py-16 bg-noise border-b border-white/10">

        <img
          src="/HomeImages/AbstractDesign.png"
          alt=""
          className="absolute bottom-0 left-0 w-full h-64 md:h-80 object-fill pointer-events-none z-0"
        />

        <div className="relative z-20 text-center px-4 md:px-20 pt-10 md:pt-20 pb-20 md:pb-40">

          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            A Digital Product Studio<br /> that will Work
          </h1>

          <div className="inline-flex flex-wrap justify-center items-center gap-x-2 gap-y-2 mt-6 md:mt-10 text-sm border border-white/5 px-4 md:px-10 py-4 rounded-md bg-ink-800">
            <span className="text-white/60">For</span>
            {audiences.map((a, index) => (
              <div key={a} className="flex items-center gap-x-2">
                <span className="bg-ink-700 text-white px-3 py-2 text-xs rounded-md">
                  {a}
                </span>
                {index < audiences.length - 2 && (
                  <span className="text-white/60">,</span>
                )}
                {index === audiences.length - 2 && (
                  <span className="text-white/60 text-sm">and</span>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="text-white text-sm border border-white/10 bg-ink-800 px-4 py-3 rounded-md cursor-pointer hover:bg-ink-700 transition-colors">
              Our Works
            </span>
            <NavLink
              to="/contact"
              onClick={handleNavClick}
              className="bg-lime-400 text-ink-950 font-medium px-4 py-3 rounded hover:bg-lime-300 transition-colors text-sm"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>

      <section className="bg-ink-800 border-b border-white/15">

        <div className="flex justify-center -mt-5 mb-8 relative z-10">
          <p className="text-white text-xs rounded-full border border-white/5 bg-ink-800 inline-flex items-center py-3 px-5">
            Trusted By 250+ Companies
          </p>
        </div>

        <div className="hidden md:flex items-center justify-between w-full px-16 pb-10">
          {brands.map((b) => (
            <div key={b.name} className="flex items-center justify-center">
              <img src={b.logo} alt={b.name} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:hidden divide-y divide-white/10 border-y border-white/10">
          {brands.map((b, i) => (
            <div
              key={b.name}
              className={`flex items-center justify-center py-8 ${i % 2 === 0 ? 'border-r border-white/10' : ''}`}
            >
              <img src={b.logo} alt={b.name} />
            </div>
          ))}
        </div>

      </section>

      <section className="bg-ink-800 border-b border-white/5">

          <div className="relative border-b border-white/10 overflow-hidden">
            <SectionLabel
              title="Our Services"
              description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
              image="HomeImages/Background.jpeg"
            />
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-white/10">
          {services.map((s) => (
            <div key={s.title} className="p-6 md:p-10 flex flex-col gap-3">
              <div className="w-16 h-16 rounded-md bg-gradient-to-b from-ink-600 to-ink-800 text-lime-400 flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-white font-medium text-lg mb-3">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">{s.text}</p>
              <Link
                to="/services"
                className="mt-auto block text-center text-white text-sm bg-ink-700 border border-ink-700 py-2.5 hover:border-white/30 transition-colors rounded-md"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-800 border-b border-white/5">

        <div className="relative border-b border-white/10 overflow-hidden">
    
            <SectionLabel
              title="Why Choose SquareUp?"
              description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
              image="HomeImages/Background.jpeg"
            />
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {why.map((w, index) => (
            <div
              key={w.title}
              className={`
                p-6 md:p-10
                border-b border-white/10
                ${index % 2 === 0 ? "md:border-r" : ""}
              `}
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-md bg-gradient-to-b from-ink-600 to-ink-800 text-lime-400 flex items-center justify-center mb-6">
                  {w.icon}
                </div>
                <h3 className="text-white font-medium text-lg mb-3">{w.title}</h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-8">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink-800 border-b border-white/5">

        <div className="relative border-b border-white/10 overflow-hidden">
            <SectionLabel
              title="What our Clients say About us"
              description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
              image="HomeImages/Background.jpeg"
            />
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-white/10">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="p-6 md:p-10 flex flex-col border-b border-white/10"
            >
              <h3 className="text-[#D8FF99] font-light text-lg leading-snug mb-4">{t.title}</h3>
              <p className="text-white text-md leading-relaxed mb-8">{t.text}</p>
              <div className="flex items-center justify-between mt-auto p-4 border border-white/5 bg-ink-700/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover saturate-0 brightness-90"
                    />
                    <div className="absolute inset-0 bg-[#ACFF244D]/30 mix-blend-multiply" />
                  </div>
                  <div>
                    <p className="text-white text-md font-light">{t.name}</p>
                    <p className="text-white/40 text-sm">{t.role}</p>
                  </div>
                </div>
                <span className="text-white bg-ink-700 text-sm border border-ink-700 px-4 py-4 cursor-pointer hover:border-white/20 transition-colors rounded-lg max-sm:hidden">
                  Open Website
                </span>
              </div>
            </div>
          ))}
        </div>

      </section>

      <Faq />

      <section>
      <section className="relative overflow-hidden border-b border-white/10">
        <img
          src="/HomeImages/Background.jpeg"
          alt=""
          className="absolute inset-0 z-10"
        style={{ background: "rgba(0,0,0,.55)" }}
        />
        <div
        className="absolute inset-0 bg-black/55 z-10"
      />

        <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-20 py-16 md:py-36 gap-8">
          <Logo
            showText={false}
            iconContainerClassName="w-16 h-16 text-5xl rounded-xl"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
              Thank You for your Interest in SquareUp
            </h2>
            <p className="text-white/50 text-md md:text-md max-w-4xl leading-relaxed mx-auto">
              We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.
            </p>
          </div>
          <NavLink
            to="/contact"
            onClick={handleNavClick}
            className="bg-lime-400 text-ink-950 font-medium text-sm px-6 py-3 rounded-md hover:bg-lime-300 transition-colors"
          >
            Start Project
          </NavLink>
        </div>
      </section>

      <ContactForm />
      </section>

    </div>
    </div>
  )
}

export default Home