import { useState } from 'react'
import { CNavbar } from '@coreui/react'
import { CContainer } from '@coreui/react'
import { CNavbarBrand } from '@coreui/react'
import { CCollapse } from '@coreui/react'
import { CNavbarNav } from '@coreui/react'
import { CNavItem } from '@coreui/react'
import { CNavLink } from '@coreui/react'
import './Navbar.css';
import { useNavigate,Link } from 'react-router-dom'

function Navbar() {
  const [visible, setVisible] = useState(false);
  const navigate=useNavigate();
  function routePage(link){ 
    navigate(link);
  }
  return (
    <>
      <CNavbar expand="lg" className={visible?'navbar-bg-white':'navbar-bg'}>
        <CContainer fluid>
          <CNavbarBrand href="/">
            <img src="/common/vyc-logo.png" className='brand-logo' alt="" />
          </CNavbarBrand>
          <button onClick={() => setVisible(!visible)} className={visible?'btn navToggle':'btn text-white'+"d-block text-white d-lg-none"}>
            <i className={visible?"fa-light fa-xmark ":"fa-light fa-bars "}></i>
          </button>
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNavItem>
                <CNavLink onClick={()=>routePage('/')}>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink onClick={()=>routePage('/')}>
                  About US
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink onClick={()=>routePage('/gallery')}>
                  Gallery
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink onClick={()=>routePage('/')}>
                  Events
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink onClick={()=>routePage('/')}>
                  Contact Us
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink onClick={()=>routePage('/')}>
                  <button className=" d-block d-lg-none admission-btn" role="button"><i className="fa-light fa-pen-to-square"></i>&nbsp;Apply for Admission</button>
                </CNavLink>
              </CNavItem>
            </CNavbarNav>

          </CCollapse>
          <div className="d-lg-flex justify-content-center d-none  ">
            <Link to="/admission" className="admission-btn" role="button"><i className="fa-light fa-pen-to-square"></i> &nbsp;Apply for Admission</Link>
          </div>
        </CContainer>
      </CNavbar>
    </>
  )
}

export default Navbar;