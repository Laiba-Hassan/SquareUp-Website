import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Logo from './Logo.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/process', label: 'Process' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink-950/90 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <Logo showText={true} />

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded text-sm transition-colors ${
                  isActive ? 'bg-ink-700 text-white' : 'text-white/60 hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
         <HashLink
           smooth
            to="/#contact-form"
           className="hidden md:inline-flex bg-lime-400 text-ink-950 text-sm font-medium px-5 py-2.5 rounded hover:bg-lime-300 transition-colors">
                Contact Us
           </HashLink>

        <button
          className="lg:hidden text-lime-400 bg-ink-700 rounded items-center h-10 w-10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
    <i className="ri-close-line text-2xl"></i>
  ) : (
    <i class="ri-menu-2-line inline-block transform text-2xl scale-x-[-1]"></i>
  )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm ${isActive ? 'bg-ink-700 text-white' : 'text-white/60'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
         <HashLink
           smooth
           to="/#contact-form"
             onClick={() => setOpen(false)}
            className="mt-2 text-center bg-lime-400 text-ink-950 text-sm font-medium px-5 py-3 rounded-full">
               Contact Us
           </HashLink>
        </div>
      )}
    </header>
  )
}

export default Navbar