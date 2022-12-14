import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    
    <div>
             <div className="navbar text-2xl font-semibold bg-sky-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0}>
          <Link to='/topics' className="justify-between">
            Topics
          
          </Link>
         
        </li>
        <li><Link to='/statistics'>Statistics</Link></li>
      </ul>
    </div>
    <Link className="btn btn-ghost bg-sky-200 normal-case text-2xl">QuizMaster</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li tabIndex={0}>
        <Link to='/topics'>
          Topics
          
        </Link>
        
      </li>
      <li><Link to='/statistics'>Statistics</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/blog' className="btn border-0 text-black hover:text-white bg-sky-300">Blog</Link>
  </div>
</div>

      
    </div>
  );
};

export default Header;