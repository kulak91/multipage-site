import {Link, Outlet} from 'react-router-dom'

export default function Layout() {
  return (
   <><nav>
   <h1>My Articles</h1>
     <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contacts</Link>
 </nav>
 <Outlet/>
   </>
  )
}
