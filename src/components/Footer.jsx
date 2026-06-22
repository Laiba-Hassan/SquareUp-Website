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
  { 
    label: 'Facebook', 
    path: "ri-facebook-circle-fill"
  },
  { 
    label: 'Twitter', 
    path: "ri-twitter-fill"
  },
  { 
    label: 'LinkedIn', 
    path: "ri-linkedin-box-fill"
   },
]

const Footer = () => {
  return (
    <footer className="bg-ink-950 border-t border-white/5 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8">
          <Logo />
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/40">Stay Connected</span>
            {socials.map((s) => (
              <span
                key={s.label}
                className="bg-gradient-to-b from-ink-600 to-ink-800 rounded-md w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-lime-300"
                aria-label={s.label}
              >
                <i className={`${s.path} text-2xl text-lime-400`} />
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/40">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="flex items-center gap-2"><i className="ri-mail-fill text-lime-400"></i> hello@squareup.com</span>
            <span className="flex items-center gap-2"><i className="ri-phone-fill text-lime-400"></i> +91 91813 23 2309</span>
            <span className="flex items-center gap-2"><i className="ri-map-pin-2-fill text-lime-400"></i> Somewhere in the World</span>
          </div>
          <span>© {new Date().getFullYear()} SquareUp. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer