import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Logo from '../components/Logo.jsx'

const story = [
  { 
    n: '01', 
    title: 'Design', 
    text: 'Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency\'s design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.' 
  },
  { 
    n: '02', 
    title: 'Engineering', 
    text: 'Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible' 
  },
  { 
    n: '03', 
    title: 'Project Management', 
    text: 'In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp\'s project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget' 
  },
  { 
    n: '04', 
    title: 'Collaboration', 
    text: 'At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.' 
  },
  { 
    n: '05', 
    title: 'Client-Centric Approach', 
    text: 'SquareUp\'s success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.' 
  },
  { 
    n: '06', 
    title: 'Driving Success', 
    text: 'With each project, SquareUp\'s reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp\'s success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.' 
  },
]

 const About = () => {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
      />

      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">About SquareUp</h2>
          <p className="text-white/50 text-sm leading-relaxed">
            SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences.
            We specialize in design, engineering, and project management, helping businesses thrive in the digital
            landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful
            delivery of exceptional digital products. Our process combines industry best practices, creative
            thinking, and a client-centric approach.
          </p>
        </div>
        <div className="aspect-square bg-ink-900 bg-noise rounded-3xl flex items-center justify-center relative overflow-hidden">
          <div className="hero-glow absolute inset-0" />
            <Logo showText = {false}
            iconContainerClassName='h-[150px] w-[150px] rounded-2xl text-8xl font-medium' />
        </div>
      </section>

      <section className="bg-ink-900 bg-noise border-y border-white/5 py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-14">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-14">
            {story.map((s) => (
              <div key={s.n}>
                <div className="flex items-center gap-5 border-b border-white/10 pb-6">
                  <span className="text-[90px] md:text-[110px] font-medium leading-none text-lime-200">{s.n}</span>
                  <h3 className="text-2xl font-medium text-lime-200">{s.title}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

export default About