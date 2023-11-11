import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { FaBars, FaUser, FaChartBar, FaBook, FaCheckCircle, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';

function SideNav({ setContent }) {

  const handleNavLinkClick = (content) => {
    setContent(content);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#333" backgroundColor="#fff">
        <CDBSidebarHeader prefix={<FaBars size={24} />}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            ZebWise
          </a>
        </CDBSidebarHeader>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <NavLink to="/create-account" className="sidebar-btn-wrapper" style={{ color: 'inherit' }}>
            <FaUser /> Create account
          </NavLink><br></br><br></br>
          <NavLink to="/dashboard" className="sidebar-btn-wrapper" style={{ color: 'inherit' }}>
            <FaChartBar /> Dashboard
          </NavLink><br></br><br></br>
          <NavLink to="/bookkeeping" className="sidebar-btn-wrapper" style={{ color: 'inherit' }}>
            <FaBook /> Bookkeeping
          </NavLink><br></br><br></br>
          <NavLink to="/verification" className="sidebar-btn-wrapper" style={{ color: 'inherit' }}>
            <FaCheckCircle /> Verification
          </NavLink><br></br><br></br>
          <NavLink to="/e-commerce" className="sidebar-btn-wrapper" style={{ color: 'inherit' }}>
            <FaShoppingCart /> E-commerce
          </NavLink><br></br><br></br>
          <NavLink to="/logout" className="sidebar-btn-wrapper" style={{ color: 'inherit' }}>
            <FaSignOutAlt /> Logout
          </NavLink><br></br>
        </CDBSidebarFooter>
      </CDBSidebar>

      {/* Apply custom styles for the content on the right */}
      <CDBSidebarContent
        className="content-style"
        style={{
          backgroundColor: '#0E2954',  // Set the background color to blue
          padding: '16px',
          flex: 1, 
          color: '#fff', // Set the text color to white
        }}
      >
        {/* Your content goes here */}
        <h1>Content</h1>
      
      </CDBSidebarContent>
    </div>
  );
}

export default SideNav;
