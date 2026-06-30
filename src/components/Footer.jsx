import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/process', label: 'Process' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { label: 'Facebook', path: "ri-facebook-circle-fill" },
  { label: 'Twitter', path: "ri-twitter-fill" },
  { label: 'LinkedIn', path: "ri-linkedin-box-fill" },
]

const handleNavClick = () => {
  window.scrollTo({ top: 0, behavior: 'instant' })
}

const Footer = () => {
  return (
    <footer className="bg-ink-800 border-t border-ink-600 pt-12 pb-8">
      <div className="max-w-8xl mx-auto px-4 md:px-20">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8">

          <div className="border-b border-white/10 w-full flex justify-center md:justify-start md:border-b-0 pb-6 md:pb-0 md:w-auto">
            <Logo onClick={handleNavClick}
            iconContainerClassName='w-10 h-10 text-2xl'/>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-md text-white/80 justify-center md:justify-start max-w-[360px] md:max-w-none mx-auto md:mx-0">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={handleNavClick}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 border border-ink-600 py-3 px-4 rounded-md w-full
                          md:flex-row md:items-center md:border-0 md:w-auto md:gap-4 md:py-0 md:px-0 md:rounded-none">
            <span className="text-md text-white/80">Stay Connected</span>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <span
                  key={s.label}
                  className="bg-gradient-to-b from-ink-600 to-ink-800 rounded-md w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-lime-300"
                  aria-label={s.label}
                >
                  <i className={`${s.path} text-3xl text-lime-400`} />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-md text-white/40 pb-4 items-center">
          <div className="flex flex-col md:flex-row gap-x-6 gap-y-4 items-center md:items-start text-white/80">
            <span className="flex items-center gap-2 border-b border-white/10"><i className="ri-mail-fill text-xl text-lime-400" /> hello@squareup.com</span>
            <span className="flex items-center gap-2 border-b border-white/10"><i className="ri-phone-fill text-xl text-lime-400" /> +91 91813 23 2309</span>
            <span className="flex items-center gap-2 border-b border-white/10"><i className="ri-map-pin-2-fill text-xl text-lime-400" /> Somewhere in the World</span>
          </div>
          <span className="text-center md:text-right">© {new Date().getFullYear()} SquareUp. All rights reserved.</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer