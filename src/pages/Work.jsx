import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Logo from '../components/Logo.jsx'
import { NavLink } from 'react-router-dom'

const projects = [
  {
    heading: "E-commerce Platform for Fashion Hub",
    image: "/WorkImages/ChicBoutique.png",
    company: "Chic Boutique",
    link: "htttps:/www.chicboutique.com",
    description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
  },
  {
    heading: "Mobile App for Food Delivery Service",
    image: "/WorkImages/HungryBites.png",
    company: "HungryBites",
    link: "htttps:/www.hungrybites.com",
    description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
  },
  {
    heading: "Booking and Reservation System for Event Management",
    image: "/WorkImages/EventMasters.png",
    company: "EventMasters",
    link: "htttps:/www.eventmasters.com",
    description: "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
  },
  {
    heading: "Custom Software for Workflow Automation",
    image: "/WorkImages/ProTechSolutions.png",
    company: "Protech Solutions",
    link: "htttps:/www.protechsolutions.com",
    description: "ProTech Solutions turned to us to automate their workflow with a custom software solution. The system significantly improved productivity and reduced manual errors, making SquareUp a trusted technology partner.",
  },
  {
    heading: "Web Portal for Real Estate Listings",
    image: "/WorkImages/DreamHomesRealty.png",
    company: "Dream Homes Realty",
    link: "htttps:/www.dreamhomesrealty.com",
    description: "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.",
  },
  {
    heading: "Mobile App for Fitness Tracking",
    image: "/WorkImages/FitLifeTracker.png",
    company: "FitLife Tracker",
    link: "htttps:/www.fitlifetracker.com",
    description: "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.",
  },
  {
    heading: "Custom Software for Supply Chain Management",
    image: "/WorkImages/GlobalLogisticsSolutions.png",
    company: "Global Logistics Solutions",
    link: "htttps:/www.globallogisticssolutions.com",
    description: "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
  },
  {
    heading: "Educational Platform for Online Learning",
    image: "/WorkImages/EduConnect.png",
    company: "EduConnect",
    link: "htttps:/www.educonnect.com",
    description: "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.",
  },
  {
    heading: "Mobile App for Travel Planning",
    image: "/WorkImages/WanderWise.png",
    company: "WanderWise",
    link: "htttps:/www.wanderwise.com",
    description: "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.",
  },
  {
    heading: "Web Application for Customer Relationship Management",
    image: "/WorkImages/ConnectCRM.png",
    company: "ConnectCRM",
    link: "htttps:/www.connectcrm.com",
    description: "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.",
  },
]

const Work = () => {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }


  return (
    <div className="max-w-8xl mx-auto px-4 md:px-20">
    <div className="border-x border-ink-600 min-h-screen">

        <PageHero
          title="Our Work"
          subtitle="A look at the digital products we've designed, built, and shipped for our clients."
          image="HomeImages/Background.jpeg"
        />

        <div className="px-8 md:px-10 py-12 max-sm:px-4 max-sm:py-8 border-b border-ink-600 mt-10 max-sm:mt-0">
          <h2 className="text-4xl font-medium text-white mb-4 max-sm:text-3xl">
            At SquareUp
          </h2>
          <p className="text-white/50 text-md leading-relaxed max-w-6xl mb-6">
            We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.
          </p>
          <span className="inline-block mt-5 text-white/80 text-md bg-ink-600 px-4 py-3 rounded-md max-sm:mt-2">
            Here are ten examples of our notable works:
          </span>
        </div>

        <div className="grid md:grid-cols-2 divide-x divide-ink-600 max-sm:divide-x-0 max-sm:grid-cols-1">
          {projects.map((p, i) => (
            <div key={p.company} className="flex flex-col border-b border-ink-600">

              <div className="px-8 py-8 max-sm:px-4 max-sm:py-5 border-b border-ink-600">
                <h3 className="text-white/60 text-xl font-normal leading-snug max-sm:text-lg">
                  {p.heading}
                </h3>
              </div>

              <div className="px-10 py-8 max-sm:px-4 max-sm:py-5">
                <img
                  src={p.image}
                  alt={p.company}
                  className="w-full object-cover rounded-lg"
                />
              </div>

              <div className="px-8 max-sm:px-4 pb-2 max-sm:pb-1">
                <p className="text-white text-xl font-medium max-sm:text-md">{p.company}</p>
              </div>

              <div className="px-8 py-4 mb-4 max-sm:px-4 max-sm:py-3 max-sm:mb-4 flex items-center gap-3 justify-between">
  <p className="text-white/50 text-md font-light bg-ink-700 rounded-md px-4 py-3 max-sm:text-sm max-sm:px-3 max-sm:py-2 truncate min-w-0">
    {p.link}
  </p>
  <button className="w-12 h-12 bg-ink-600 rounded-md text-lime-400 flex items-center justify-center flex-shrink-0">
    <i className="ri-arrow-right-up-line text-2xl" />
  </button>
</div>

              <div className="px-8 py-4 mb-20 max-sm:px-4 max-sm:py-3 max-sm:mb-8">
                <p className="text-white/40 text-lg font-light max-sm:text-base">
                  {p.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        <section className="relative overflow-hidden border-b border-ink-600">
          <img
          src="/HomeImages/Background.jpeg"
          alt=""
          className="absolute inset-0 z-10"
        style={{ background: "rgba(0,0,0,.55)" }}
        />
        <div
        className="absolute inset-0 bg-black/55 z-10"
      />

          <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-20 py-36 max-sm:px-5 max-sm:py-20 gap-8">
            <Logo
              showText={false}
              iconContainerClassName="w-16 h-16 text-5xl rounded-xl"
            />
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold text-white leading-tight max-sm:text-2xl">
                Let us Bring your Ideas to Life in the Digital World.
              </h2>
              <p className="text-white/50 text-md max-w-4xl leading-relaxed mx-auto">
                No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.
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

      </div>
    </div>
  )
}

export default Work