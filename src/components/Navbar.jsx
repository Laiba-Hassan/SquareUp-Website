import { useState } from 'react'
import { NavLink } from 'react-router-dom'
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

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-ink-800 border-b border-white/10">
      <div className="max-w-8xl mx-auto px-5 md:px-20">
        <div className="relative h-20 flex items-center justify-between">

          <Logo
            showText
            onClick={handleNavClick}
            iconContainerClassName="w-10 h-10 md:w-12 md:h-12 text-2xl md:text-4xl"
          />

          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `px-5 py-3 rounded-lg text-md transition-colors ${
                    isActive
                      ? 'bg-ink-600 text-white'
                      : 'text-white/60 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">

            <NavLink
              to="/contact"
              onClick={handleNavClick}
              className="hidden md:inline-flex bg-lime-400 text-ink-950 text-md font-medium px-5 py-3 rounded-md hover:bg-lime-300 transition-colors"
            >
              Contact Us
            </NavLink>

            <button
              className="md:hidden h-10 w-10 rounded-lg bg-ink-700 text-lime-400 flex items-center justify-center"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? (
                <i className="ri-close-line text-2xl"></i>
              ) : (
                <i className="ri-menu-2-line text-2xl scale-x-[-1]"></i>
              )}
            </button>

          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 px-4 py-4 flex flex-col gap-1 bg-ink-800">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={handleNavClick}
              className={({ isActive }) =>
                `px-5 py-3 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-ink-600 text-white'
                    : 'text-white/60 hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={handleNavClick}
            className="mt-2 bg-lime-400 text-ink-950 text-sm font-medium px-5 py-3 rounded-md hover:bg-lime-300 transition-colors text-center"
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  )
}

export default Navbar