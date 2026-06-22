import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Logo from '../components/Logo.jsx'

const groups = [
  {
    title: "Design",
    text: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand.",
    cta: "Our design services include:",
    subs: [
      {
        name: "User Experience (UX) Design",
        items: [
          {
            icon: "ri-user-search-line",
            title: "User Research and Persona Development",
          },
          {
            icon: "ri-layout-4-line",
            title: "Information Architecture and Wireframing",
          },
          {
            icon: "ri-cursor-line",
            title: "Interactive Prototyping and User Testing",
          },
          {
            icon: "ri-palette-line",
            title: "UI Design and Visual Branding",
          },
        ],
      },
      {
        name: "User Interface (UI) Design",
        items: [
          {
            icon: "ri-artboard-line",
            title: "Intuitive and Visually Appealing Interface Design",
          },
          {
            icon: "ri-brush-line",
            title: "Custom Iconography and Illustration",
          },
          {
            icon: "ri-font-size",
            title: "Typography and Color Palette Selection",
          },
          {
            icon: "ri-smartphone-line",
            title: "Responsive Design for Various Devices",
          },
        ],
      },
      {
        name: "Branding and Identity",
        items: [
          {
            icon: "ri-pen-nib-line",
            title: "Logo Design and Visual Identity Development",
          },
          {
            icon: "ri-lightbulb-line",
            title: "Brand Strategy and Positioning",
          },
          {
            icon: "ri-book-open-line",
            title: "Brand Guidelines and Style Guides",
          },
          {
            icon: "ri-file-list-3-line",
            title: "Marketing Collateral Design",
          },
        ],
      },
    ],
  },

  {
    title: "Engineering",
    text: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions.",
    cta: "Our engineering services include:",
    subs: [
      {
        name: "Web Development",
        items: [
          {
            icon: "ri-code-s-slash-line",
            title: "Front-End Development (HTML, CSS, JavaScript)",
          },
          {
            icon: "ri-server-line",
            title: "Back-End Development (PHP, Python, Ruby)",
          },
          {
            icon: "ri-wordpress-line",
            title: "CMS Development (WordPress, Drupal)",
          },
          {
            icon: "ri-shopping-cart-2-line",
            title: "E-Commerce Platform Development",
          },
        ],
      },
      {
        name: "Mobile App Development",
        items: [
          {
            icon: "ri-apple-line",
            title: "Native iOS and Android App Development",
          },
          {
            icon: "ri-smartphone-line",
            title: "Cross-Platform Development (React Native, Flutter)",
          },
          {
            icon: "ri-layout-masonry-line",
            title: "App Prototyping and UI/UX Integration",
          },
          {
            icon: "ri-bug-line",
            title: "App Testing, Deployment and Maintenance",
          },
        ],
      },
      {
        name: "Custom Software Development",
        items: [
          {
            icon: "ri-building-line",
            title: "Enterprise Software Development",
          },
          {
            icon: "ri-window-line",
            title: "Custom Web Application Development",
          },
          {
            icon: "ri-links-line",
            title: "Integration with Third-Party APIs",
          },
          {
            icon: "ri-refresh-line",
            title: "Legacy System Modernization and Migration",
          },
        ],
      },
    ],
  },

  {
    title: "Project Management",
    text: "Our experienced project management team ensures that your projects are delivered on time and within budget.",
    cta: "Our project management services include:",
    subs: [
      {
        name: "Project Planning and Scoping",
        items: [
          {
            icon: "ri-file-search-line",
            title: "Requirements Gathering and Analysis",
          },
          {
            icon: "ri-road-map-line",
            title: "Project Roadmap and Timeline Development",
          },
          {
            icon: "ri-team-line",
            title: "Resource Allocation and Task Assignment",
          },
          {
            icon: "ri-shield-check-line",
            title: "Risk Assessment and Mitigation Strategies",
          },
        ],
      },
      {
        name: "Agile Development",
        items: [
          {
            icon: "ri-repeat-line",
            title: "Iterative Development and Sprints",
          },
          {
            icon: "ri-flow-chart",
            title: "Scrum or Kanban Methodology",
          },
          {
            icon: "ri-presentation-line",
            title: "Regular Progress Updates and Demos",
          },
          {
            icon: "ri-feedback-line",
            title: "Continuous Improvement and Feedback",
          },
        ],
      },
      {
        name: "Quality Assurance and Testing",
        items: [
          {
            icon: "ri-checkbox-circle-line",
            title: "Test Planning and Execution",
          },
          {
            icon: "ri-user-star-line",
            title: "Functional and Usability Testing",
          },
          {
            icon: "ri-speed-up-line",
            title: "Performance and Security Testing",
          },
          {
            icon: "ri-bug-2-line",
            title: "Bug Tracking and Issue Resolution",
          },
        ],
      },
    ],
  },
]

const Services = () => {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
      />

      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 space-y-16">
        {groups.map((g) => (
          <section key={g.title}>

            <div className="mb-12 bg-ink-900 bg-noise border border-white/5 rounded-2xl p-8">
              <h2 className="text-3xl font-medium text-white">
                {g.title}
              </h2>

              <p className="mt-4 max-w-2xl text-white/50">
                {g.text}
              </p>

              <button className="mt-6 px-5 text-sm py-2 rounded-lg bg-[#1A1A1A] border-[#1A1A1A] text-white">
                {g.cta}
              </button>
            </div>

            <div>
              {g.subs.map((sub) => (
                <div key={sub.name} className="border border-white/10">

                  <div className="py-6 p-8">
                    <h3 className="text-white/60 text-xl ">
                      {sub.name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
                    {sub.items.map((item, index) => (
                      <div
                        key={item.title}
                        className={`p-8 ${
                          index !== sub.items.length - 1
                            ? "lg:border-r border-white/10"
                            : ""
                        }`}
                      >
                        <div className=" text-2xl w-12 h-12 rounded-lg bg-[#1F1F1F] flex items-center justify-center text-lime-400 mb-5">
                          <i className={item.icon}></i>
                        </div>

                        <p className="text-white/70 leading-relaxed">
                          {item.title}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </section>
        ))}
      </div>

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
            className="bg-lime-400 text-ink-950 font-medium text-sm px-6 py-3 rounded-md hover:bg-lime-300 transition-colors">
                Start Project
          </HashLink>
      </section>
    </>
  );
};

export default Services