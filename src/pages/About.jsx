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
    <div className="max-w-8xl mx-auto px-20 max-sm:px-4">
    <div className="border-x border-ink-600 min-h-screen">
    <>
      <PageHero
        title="About Us"
        subtitle="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
        image="HomeImages/Background.jpeg"
      />

      <section className="max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-2 gap-15 items-center max-sm:px-4 max-sm:py-10 max-sm:grid-cols-1 max-sm:gap-8">

        <div className="pr-8 max-sm:pr-0">
          <h2 className="text-4xl font-medium text-white mb-6 max-sm:text-3xl">
            About SquareUp
          </h2>
          <p className="text-white/70 text-md md:text-sm">
            SquareUp is a digital product agency that is passionate about crafting
            exceptional digital experiences. We specialize in design, engineering,
            and project management, helping businesses thrive in the digital
            landscape. At SquareUp, we follow a structured and collaborative process
            to ensure the successful delivery of exceptional digital products. Our
            process combines industry best practices, creative thinking, and a
            client-centric approach.
          </p>
        </div>

       <div className="flex justify-end max-sm:justify-center">
  <div className="relative w-[500px] aspect-square rounded-3xl border border-ink-700 overflow-hidden max-sm:w-full max-sm:max-w-[300px]">

    <img
      src="/HomeImages/Background.jpeg"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/55" />
    <div className="hero-glow absolute inset-0 z-10" />

   <div className="relative z-20 flex items-center justify-center w-full h-full">

  <div className="relative flex items-center justify-center">

    {/* Top Line */}
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-px h-48 bg-lime-400/30"></div>

    {/* Bottom Line */}
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-48 bg-lime-400/30"></div>

    {/* Left Line */}
    <div className="absolute right-full top-1/2 -translate-y-1/2 h-px w-48 bg-lime-400/30"></div>

    {/* Right Line */}
    <div className="absolute left-full top-1/2 -translate-y-1/2 h-px w-48 bg-lime-400/30"></div>

    <Logo
      showText={false}
      iconContainerClassName="h-[100px] w-[100px] rounded-[20px] text-7xl font-medium max-sm:h-[90px] max-sm:w-[90px] max-sm:text-4xl"
    />

  </div>

</div>

  </div>
</div>
      </section>

      <section className="border-y border-ink-600 pt-20 pb-0 max-sm:pt-10 rounded-">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl font-semibold text-white mb-16 px-10 max-sm:text-3xl max-sm:mb-8 max-sm:px-4">Our Story</h2>

          <div className="grid md:grid-cols-2 border-t border-ink-600 max-sm:grid-cols-1">
            {story.map((s, i) => (
              <div
                key={s.n}
                className={`p-8 max-sm:p-4 max-sm:border-b max-sm:border-ink-600
                  ${i % 2 === 1 ? "border-l border-white/10 max-sm:border-l-0" : ""}
                  ${i < story.length - 2 ? "border-b border-white/10" : ""}
                `}
              >
                <div className="flex gap-6 mb-8 max-sm:gap-4 max-sm:mb-5 ">
                  <span className="text-[110px] leading-[0.85] font-medium text-lime-200 shrink-0 max-sm:text-[72px]">
                    {s.n}
                  </span>

                  <div className="flex-1 flex flex-col h-[85px] pt-8 max-sm:h-auto max-sm:pt-4 max-sm:justify-center">
                    <h3 className="text-2xl font-light text-lime-200 mb-3 max-sm:text-xl">
                      {s.title}
                    </h3>
                    <div className="mt-auto border-b border-white/10 max-sm "></div>
                  </div>
                </div>

                <p className="text-white/50 font-light text-md px-6 max-sm:px-0 max-sm:text-sm max-sm:leading-7">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
    </div>
    </div>
  )
}

export default About