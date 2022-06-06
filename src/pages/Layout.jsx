import {NavLink, Outlet} from 'react-router-dom'

export default function Layout() {
  return (
   <><nav>
   <h1>My Articles</h1>
     <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
 </nav>
 <Outlet/>
   </>
  )
}
