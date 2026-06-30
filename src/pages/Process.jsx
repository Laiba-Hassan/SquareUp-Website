import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Logo from '../components/Logo.jsx'

const steps = [
  { 
    n: '01', 
    title: 'Discovery', 
    text: 'We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.' 
  },
  { 
    n: '02', 
    title: 'Planning and Strategy', 
    text: 'Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.' 
  },
  {
     n: '03', 
     title: 'Design', 
     text: 'Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.' 
    },
  { 
    n: '04', 
    title: 'Development', 
    text: 'Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.' 
  },
  { 
    n: '05', 
    title: 'Testing and Quality Assurance', 
    text: 'We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.' 
  },
  {
     n: '06', 
     title: 'Deployment and Launch', 
     text: 'When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.' 
    },
  { 
    n: '07', 
    title: 'Post-Launch Support', 
    text: 'Our commitment to your success doesn\'t end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.' 
  },
  {
     n: '08', 
     title: 'Continuous Improvement', 
     text: 'We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.' 
    },
]

const Process = () => {

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (

  <div className="max-w-8xl mx-auto px-20 max-sm:px-4">
    <div className="border-x border-ink-600 min-h-screen">
    <>
      <PageHero
        title="Process of Starting the Project"
        subtitle="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
        image="HomeImages/Background.jpeg"
      />

      <div className="px-8 md:px-10 py-12 border-b border-white/10 mt-10 max-sm:px-4 max-sm:py-8 max-sm:mt-0">
        <h2 className="text-4xl font-medium text-white mb-4 max-sm:text-3xl">At SquareUp</h2>
        <p className="text-white/50 text-md leading-relaxed max-w-6xl mb-6">
          We follow a structured and collaborative process to ensure the successful delivery of exceptional digital
          products. Our process combines industry best practices, creative thinking, and a client-centric approach.
        </p>
        <span className="inline-block mt-5 text-white/80 text-md bg-ink-600 px-4 py-3 rounded-md max-sm:mt-2">
          Here's an overview of our typical process:
        </span>
      </div>

      <div className="grid md:grid-cols-2 border-t border-white/10 max-sm:grid-cols-1">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className={`p-8 max-sm:p-4 max-sm:border-b max-sm:border-white/10
              ${i % 2 === 1 ? "border-l border-white/10 max-sm:border-l-0" : ""}
              ${i < steps.length - 2 ? "border-b border-white/10" : ""}
            `}
          >
            <div className="flex gap-6 mb-8 max-sm:gap-4 max-sm:mb-5">
              <span className="text-[110px] leading-[0.85] font-medium text-lime-200 shrink-0 max-sm:text-[72px]">
                {s.n}
              </span>

              <div className="flex-1 flex flex-col h-[85px] pt-8 max-sm:h-auto max-sm:pt-4 max-sm:justify-center">
                <h3 className="text-2xl font-light text-white/70 mb-3 max-sm:text-xl">
                  {s.title}
                </h3>
                <div className="mt-auto border-b border-white/10 max-sm"></div>
              </div>
            </div>

            <p className="text-white/50 font-light text-md leading-8 max-sm:text-sm max-sm:leading-7">
              {s.text}
            </p>
          </div>
        ))}
      </div>

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
        
        <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-20 py-36 gap-8 max-sm:px-5 max-sm:py-16">
          <Logo
            showText={false}
            iconContainerClassName="w-16 h-16 text-5xl rounded-xl"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-white leading-tight max-sm:text-2xl">
              Thank You for your Interest in SquareUp
            </h2>
            <p className="text-white/50 text-md max-w-4xl leading-relaxed mx-auto max-sm:text-sm">
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
      <ContactForm/>
    </>
    </div>
    </div>
  )
}
export default Process