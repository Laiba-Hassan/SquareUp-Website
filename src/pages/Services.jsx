import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Logo from '../components/Logo.jsx'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const groups = [
  {
    title: "Design",
    text: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    cta: "Our design services include:",
    subs: [
      {
        name: "User Experience (UX) Design",
        items: [
          { icon: "ri-user-search-line", title: "User Research and Persona Development" },
          { icon: "ri-layout-4-line", title: "Information Architecture and Wireframing" },
          { icon: "ri-cursor-line", title: "Interactive Prototyping and User Testing" },
          { icon: "ri-palette-line", title: "UI Design and Visual Branding" },
        ],
      },
      {
        name: "User Interface (UI) Design",
        items: [
          { icon: "ri-artboard-line", title: "Intuitive and Visually Appealing Interface Design" },
          { icon: "ri-brush-line", title: "Custom Iconography and Illustration" },
          { icon: "ri-font-size", title: "Typography and Color Palette Selection" },
          { icon: "ri-smartphone-line", title: "Responsive Design for Various Devices" },
        ],
      },
      {
        name: "Branding and Identity",
        items: [
          { icon: "ri-pen-nib-line", title: "Logo Design and Visual Identity Development" },
          { icon: "ri-lightbulb-line", title: "Brand Strategy and Positioning" },
          { icon: "ri-book-open-line", title: "Brand Guidelines and Style Guides" },
          { icon: "ri-file-list-3-line", title: "Marketing Collateral Design" },
        ],
      },
    ],
  },
  {
    title: "Engineering",
    text: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    cta: "Our engineering services include:",
    subs: [
      {
        name: "Web Development",
        items: [
          { icon: "ri-code-s-slash-line", title: "Front-End Development (HTML, CSS, JavaScript)" },
          { icon: "ri-server-line", title: "Back-End Development (PHP, Python, Ruby)" },
          { icon: "ri-wordpress-line", title: "Content Management System (CMS) Development (WordPress, Drupal)" },
          { icon: "ri-shopping-cart-2-line", title: "E-Commerce Platform Development (Magento, Shopify)" },
        ],
      },
      {
        name: "Mobile App Development",
        items: [
          { icon: "ri-apple-line", title: "Native iOS and Android App Development" },
          { icon: "ri-smartphone-line", title: "Cross-Platform App Development (React Native, Flutter)" },
          { icon: "ri-layout-masonry-line", title: "App Prototyping and UI/UX Design Integration" },
          { icon: "ri-bug-line", title: "App Testing, Deployment, and Maintenance" },
        ],
      },
      {
        name: "Custom Software Development",
        items: [
          { icon: "ri-building-line", title: "Enterprise Software Development" },
          { icon: "ri-window-line", title: "Custom Web Application Development" },
          { icon: "ri-links-line", title: "Integration with Third-Party APIs and Systems" },
          { icon: "ri-refresh-line", title: "Legacy System Modernization and Migration" },
        ],
      },
    ],
  },
  {
    title: "Project Management",
    text: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    cta: "Our project management services include:",
    subs: [
      {
        name: "Project Planning and Scoping",
        items: [
          { icon: "ri-file-search-line", title: "Requirements Gathering and Analysis" },
          { icon: "ri-road-map-line", title: "Project Roadmap and Timeline Development" },
          { icon: "ri-team-line", title: "Resource Allocation and Task Assignment" },
          { icon: "ri-shield-check-line", title: "Risk Assessment and Mitigation Strategies" },
        ],
      },
      {
        name: "Agile Development",
        items: [
          { icon: "ri-repeat-line", title: "Iterative Development and Sprints" },
          { icon: "ri-flow-chart", title: "Scrum or Kanban Methodology Implementation" },
          { icon: "ri-presentation-line", title: "Regular Progress Updates and Demos" },
          { icon: "ri-feedback-line", title: "Continuous Improvement and Feedback Incorporation" },
        ],
      },
      {
        name: "Quality Assurance and Testing",
        items: [
          { icon: "ri-checkbox-circle-line", title: "Test Planning and Execution" },
          { icon: "ri-user-star-line", title: "Functional and Usability Testing" },
          { icon: "ri-speed-up-line", title: "Performance and Security Testing" },
          { icon: "ri-bug-2-line", title: "Bug Tracking and Issue Resolution" },
        ],
      },
    ],
  },
]

const Services = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const timer = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          const headerOffset = 80 
          const elementPosition = el.getBoundingClientRect().top + window.scrollY
          window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: 'smooth',
          })
        }
      }, 100)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [location])

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="max-w-8xl mx-auto px-4 md:px-20">
    <div className="border-x border-ink-600 min-h-screen">
      <>
      <PageHero
        title="Our Services"
        subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        image="HomeImages/Background.jpeg"
      />

      {groups.map((g) => (
        <section
    key={g.title}
    id={g.title.toLowerCase().replace(/\s+/g, "-")}
    className="border-b border-ink-600"
  >

          <div className="px-4 md:px-10 py-8 md:py-12 border-b border-ink-600 mt-6 md:mt-10">
            <h2 className="text-2xl md:text-4xl font-medium text-white mb-4">{g.title}</h2>
            <p className="text-white/50 text-sm md:text-md leading-relaxed max-w-6xl mb-4 md:mb-6">{g.text}</p>
            <span className="inline-block mt-3 md:mt-5 text-white/80 text-sm md:text-md bg-ink-600 px-4 py-3 rounded-md">
              {g.cta}
            </span>
          </div>

          {g.subs.map((sub) => (
            <div key={sub.name} className="border-b border-ink-600">

              <div className="px-4 md:px-10 py-6 md:py-10 border-b border-white/10">
                <h3 className="text-white/50 text-lg md:text-xl font-light">{sub.name}</h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-ink-600">
                {sub.items.map((item) => (
                  <div key={item.title} className="p-4 md:p-8 flex flex-col gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-md bg-gradient-to-b from-ink-600 to-ink-800 text-lime-400 flex items-center justify-center mb-2 md:mb-3 text-xl md:text-2xl p-[2px] border border-ink-800">
                      <i className={item.icon} />
                    </div>
                    <p className="text-white text-sm md:text-md leading-relaxed">{item.title}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </section>
      ))}

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

        <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-20 py-16 md:py-36 gap-8 md:gap-12">
          <Logo
            showText={false}
            iconContainerClassName="w-16 h-16 text-5xl rounded-xl"
          />
          <div className="gap-4 flex flex-col">
            <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
              Let us Bring your Ideas to Life in the Digital World.
            </h2>
            <p className="text-white/50 text-sm md:text-md max-w-4xl leading-relaxed">
              No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.
            </p>
          </div>
          <NavLink
            to="/contact"
            onClick={handleNavClick}
            className="mt-2 bg-lime-400 text-ink-950 font-medium text-sm md:text-md px-5 py-4 rounded-md hover:bg-lime-300 transition-colors"
          >
            Start Project
          </NavLink>
        </div>

      </section>
      </>
    </div>
    </div>
  )
}

export default Services