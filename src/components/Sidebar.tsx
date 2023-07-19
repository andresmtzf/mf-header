import { useState } from 'react'
import '../assets/Sidebar.css'
import { Link } from '@reach/router'
//import { links } from "../root.helper.js";

export const links = [
  {
    name: 'Opc 1',
    href: '/content',
    icon: '',
  },
  {
    name: 'Opc 2',
    href: '/profile',
  },
  {
    name: 'Opc 3',
    href: '/opcion-tres',
  },
]

export const Sidebar = ({ name }) => {
  const [show, setShow] = useState(false)

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`} style={{ color: 'black' }}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
        {name}
      </header>
      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <a className='nav-logo'>
              {/* <i className={`fas fa-home-alt nav-logo-icon`}></i> */}
              <span className='nav-logo-name'>Menú</span>
            </a>

            <div className='nav-list'>
              {links.map((link, index) => {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`nav-link ${index === 0 ? 'active' : ''}`}>
                    <span className='nav-link-name'>{link.name}</span>
                  </Link>
                )
              })}
            </div>
            {/*             <div className='nav-list'>
              <Link className='nav-link active'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Opc 2</span>
              </Link>
              <Link className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>Opc 3</span>
              </Link>
              <Link className='nav-link'>
                <i className='fas fa-image nav-link-icon'></i>
                <span className='nav-link-name'>Opc 4</span>
              </Link>
              <Link className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name' style={{ marginLeft: 0 }}>
                  Opc 5
                </span>
              </Link>
            </div> */}
          </div>

          <a className='nav-link'>
            {/* <i className='fas fa-sign-out nav-link-icon'></i> */}
            <span className='nav-link-name'>Logout</span>
          </a>
        </nav>
      </aside>

      {/* <h1>Content</h1> */}
    </main>
  )
}
