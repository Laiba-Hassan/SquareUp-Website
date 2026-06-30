import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const CtaBanner = () => {

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  
  return (
    <section className="py-20 px-6 md:px-14 border border-ink-600">

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">

        <div className="w-full flex justify-center md:w-auto md:block">
          <Logo
            showText={false}
            iconContainerClassName="h-20 w-20 text-7xl font-medium rounded-xl shrink-0"
          />
        </div>

        <div className="flex flex-col gap-3 text-center md:text-left">
          <h3 className="text-white/50 font-medium leading-snug text-base md:text-2xl">
            Today, SquareUp Continues to Thrive as a Leading Digital Product Agency&hellip;.
          </h3>
          <p className="text-white/40 text-md md:text-sm">
            Combining the power of design, engineering, and project management to create
            transformative digital experiences. They invite you to join them on their journey
            and discover how they can help bring your digital ideas to life.
          </p>
        </div>
      </div>

      <div className="border border-ink-600 rounded-2xl p-6 md:p-3 flex flex-col md:flex-row items-center gap-4">

        <span className="text-white/45 text-base shrink-0 md:w-[200px] text-center md:text-left">
          Welcome to SquareUp
        </span>

        <div className="flex-1 bg-ink-700 rounded-xl px-6 py-5 text-white text-sm md:text-base text-center md:text-left">
          Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
        </div>

        <NavLink
          to="/contact"
          onClick={handleNavClick}
          className="w-full md:w-auto shrink-0 bg-lime-400 text-ink-950 font-medium px-8 py-4 rounded-xl hover:bg-lime-300 transition-colors text-center block"
        >
          Start Project
        </NavLink>

      </div>
    </section>
  )
}

export default CtaBanner