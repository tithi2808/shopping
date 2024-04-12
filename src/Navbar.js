import { NavLink, Route,Routes } from 'react-router-dom'
// import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Home from './Home'
import Jewellery from './Jewellery';
import Electronic from './Electronic';
import MenCloths from './MenClothes';
import MenClothes from './MenClothes';
import WomenClothes from './WomenClothes';
import Item from './Item';
const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            {/* <Brand /> */}
          </div>
          <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/jewellery">Jewellery</NavLink>
            </li>
            <li>
              <NavLink to="/electronic">Electronic</NavLink>
            </li>
            <li>
              <NavLink to="/mclothes">Men CLothes</NavLink>
            </li>
            <li>
            <NavLink to="/wclothes">Women CLothes</NavLink>
            </li>
          </ul>
        </div>
         <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/jewellery' element={<Jewellery></Jewellery>}></Route>
         <Route path='/electronic' element={<Electronic></Electronic>}></Route>
         <Route path='/mclothes' element={<MenClothes></MenClothes>}></Route>
         <Route path='/wclothes' element={<WomenClothes></WomenClothes>}></Route>
         <Route path='/item' element={<Item></Item>}></Route>
         


         

        
         </Routes>
      </div>
    </nav>
  )
}

export default Navbar