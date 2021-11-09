import { useEffect } from 'react'
import { NavItem } from './NavItem'

const NavBar = ({ cname, onlyLogo }) => {
  useEffect(() => {}, [])
  return (
    <header className={cname}>
      <nav className="flex items-center font-bold text-white justify-between h-16 px-5 md:px-10 bg-black opacity-60">
        <p className="cursor-pointer hover:text-primary tracking-widest">
          <a href="/">LOGO</a>
        </p>
        {!onlyLogo && (
          <>
            <ul className="hidden lg:flex justify-center gap-x-20 md:w-1/2 w-1/3 mr-4">
              <NavItem title="HOME" />
              <NavItem title="GAME" href="#game" />
              <NavItem title="SYSREQ" href="#sysreq" />
              <NavItem title="SUBSCRIBE" href="#subscribe" />
            </ul>

            <ul className="w-auto space-x-10 flex gap-5">
              <NavItem title="Login" href="/login" />
              <NavItem title="Register" href="/register" />
            </ul>
          </>
        )}
      </nav>
    </header>
  )
}

export default NavBar
