import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Logo from '../components/Logo.jsx'

const projects = [
  {
    heading: "E-commerce Platform for Fashion Hub",
    image: "/WorkImages/ChicBoutique.png",
    company: "Chiq Boutique",
    link: "htttps:/www.chicboutique.com",
    description:"We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
  },
  {
    heading: "Mobile App for Delivery Services",
    image: "/WorkImages/HungryBites.png",
    company: "HungryBites",
    link: "htttps:/www.hungrybites.com",
    description:"HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
    {
    heading: "Booking and Reservation System for Event Management",
    image: "/WorkImages/EventMasters.png",
    company: "EventMasters",
    link: "htttps:/www.eventmasters.com",
    description:"EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
  },
  {
    heading: "Customer Software fro Workflow Automation",
    image: "/WorkImages/ProTechSolutions.png",
    company: "Protech Solutions",
    link: "htttps:/www.protechsolutions.com",
    description:"HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    heading: "Web Portal for Real Estate Listings",
    image: "/WorkImages/DreamHomesRealty.png",
    company: "Dream Homes Realty",
    link: "htttps:/www.dreamhomesrealty.com",
    description:"Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.",
  },
  {
    heading: "Mobile App for Fitness Tracking",
    image: "/WorkImages/FitLifeTracker.png",
    company: "FitLife Tracker",
    link: "htttps:/www.fitlifetracker.com",
    description:"FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.",
  },
  {
    heading: "Custom Software for Supply Chain Management",
    image: "/WorkImages/GlobalLogisticsSolutions.png",
    company: "Global Logistics Solutions",
    link: "htttps:/www.globallogisticssolutions.com",
    description:"Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
  },
  {
    heading: "Educational Platform for Online Earning",
    image: "/WorkImages/EduConnect.png",
    company: "EduConnect",
    link: "htttps:/www.educonnect.com",
    description:"EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.",
  },
  {
    heading: "Mobile App fro Travel Planning",
    image: "/WorkImages/WanderWise.png",
    company: "WanderWise",
    link: "htttps:/www.wanderwise.com",
    description:"WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.",
  },
  {
    heading: "Web Application for Customer Relationship Management",
    image: "/WorkImages/ConnectCRM.png",
    company: "ConnectCRM",
    link: "htttps:/www.connectcrm.com",
    description:"ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.",
  },

];

const Work = () => {
  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="A look at the digital products we've designed, built, and shipped for our clients."
      />
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 ">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
              At SquareUp
              </h2>
            <p className="text-white/50 max-w-2xl text-sm leading-relaxed mb-5">
            We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.
            </p>
            <div>
            <span className="inline-block bg-ink-800 text-white text-sm px-5 py-2 rounded-lg
             mb-8 mt-6">
              Here are ten examples of our notable works:
             </span>
             </div>
             </div>

     <section className="max-w-7xl mx-auto py-16">
  <div className="grid md:grid-cols-2 border border-white/5">

    {projects.map((p) => ( 
      <div
        key={p.company}
        className="border border-white/5 bg-ink-900 px-8"
      >
        <div className="px-5 py-6 border-b border-white/5">
          <h3 className="text-white/70 text-lg">
            {p.heading}
          </h3>
        </div>

        <div className="p-5">
          <img
            src={p.image}
            alt={p.company}
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div className="px-8 flex items-center justify-between">
          <div>
            <h4 className="text-white text-md font-medium">
              {p.company}
            </h4>

           <p className="text-white/40 text-sm bg-ink-600 rounded-md h-10 p-2 mt-2 ">
              {p.link}
                </p>
          </div>

          <button className="w-10 h-10 bg-gradient-to-b from-ink-600 to-ink-800 rounded-md text-xl text-lime-400 flex items-center justify-center">
            <i class="ri-arrow-right-up-line"></i>
          </button>
        </div>

        <div className="px-8 py-8">
          <p className="text-white/50 text-sm leading-relaxed">
            {p.description}
          </p>
        </div>
      </div>
    ))}

  </div>
</section>

      <section className="bg-ink-900 bg-noise border-y border-white/5 py-16 text-center">
        <div className="w-14 h-14 rounded-2xl bg-lime-400 flex items-center justify-center text-ink-950 text-2xl mx-auto mb-6">
          <Logo showText={false}
           iconContainerClassName="w-14 h-14 text-4xl rounded-lg" />
        </div>

        <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">
          Let us Bring your Ideas to Life in the Digital World.
        </h2>

        <p className="text-white/50 max-w-xl mx-auto text-sm mb-8">
          No matter which services you choose, we are committed to delivering exceptional
          results that exceed your expectations. Our multidisciplinary team works closely
          together to ensure seamless collaboration and a unified vision for your digital
          product.
        </p>

        <HashLink
                   smooth
                   to="/#contact-form"
                   className="bg-lime-400 text-ink-950 font-medium text-sm px-6 py-3 rounded-md hover:bg-lime-300 transition-colors"
                     >
                     Start Project
                  </HashLink>
      </section>
</>
  )}

export default Work