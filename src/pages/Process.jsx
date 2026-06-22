import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Logo from '../Components/Logo.jsx'

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
  return (
    <>
      <PageHero
        title="Process of Starting the Project"
        subtitle="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
      />

      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">At SquareUp</h2>
        <p className="text-white/50 max-w-2xl text-sm leading-relaxed mb-6">
          We follow a structured and collaborative process to ensure the successful delivery of exceptional digital
          products. Our process combines industry best practices, creative thinking, and a client-centric approach.
        </p>
        <span className="inline-block bg-ink-800 text-white/70 text-sm px-4 py-2 rounded-md mb-12">
          Here's an overview of our typical process:
        </span>

       <div className="grid md:grid-cols-2 border-t border-l border-white/10">
  {steps.map((s) => (
    <div key={s.n} className="border-r border-b border-white/10 p-8">
      <div className="flex items-center gap-5 border-b border-white/10 pb-6">
        <span className="text-[90px] md:text-[110px] font-medium leading-none text-lime-200">
          {s.n}
        </span>

        <h3 className="text-2xl font-medium text-white/70">
          {s.title}
        </h3>
      </div>

      <p className="mt-6 text-white/50 text-sm leading-7">
        {s.text}
      </p>
    </div>
  ))}
</div>
      </div>

     <section className="bg-ink-900 bg-noise border-y border-white/5 py-16 text-center">
            <div className="max-w-4xl mx-auto">
       
           <div className="w-14 h-14 rounded-2xl bg-lime-400 flex items-center justify-center text-ink-950 text-2xl mx-auto mb-6">
          <Logo showText={false} 
           iconContainerClassName="w-14 h-14 text-4xl rounded-lg"/>
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
export default Process 
