import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Logo from './Logo'

const CtaBanner = () => {
  return (
    <section className="bg-ink-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row items-center gap-6">
          <Logo showText = {false}
          iconContainerClassName='h-16 w-16 text-5xl font-medium rounded-lg'/>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg mb-1">
            Today, SquareUp Continues to Thrive as a Leading Digital Product Agency&hellip;.
          </h3>
          <p className="text-white/50 text-sm max-w-7xl">
            Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can bring your digital ideas to life.
          </p>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/40 text-sm">Welcome to SquareUp</span>
          <span className="flex-1 text-center text-white/70 text-sm px-4 py-3 bg-ink-700 rounded-md hidden md:block">
            Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
          </span>
          <HashLink
                    smooth
                     to="/#contact-form"
                     className="bg-lime-400 text-ink-950 font-medium text-sm px-6 py-3 rounded-md hover:bg-lime-300 transition-colors">
                         Start Project
                   </HashLink>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner