import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import Logo from '../../imgs/verbumlog.png';
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../token/useAuth/UseAuth';


function Navbar(): JSX.Element {

  const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  UseAuth();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    sessionStorage.removeItem('token');  
    navigate("/", { replace: true });
  };

    const content = <div>
       <div className="lg:hidden block absolute bg-[#000] bg-opacity-90  top-0 left-0 right-0 transition rounded-md">
          <ul className='text-center text-x1 p-7 h-screen'>
          <Link to="/home">
              <li className='my-4 py-4 border-b border-pink-600 hover:bg-pink-600 hover:rounded'>Home</li>
            </Link>
            <Link to="/chats">
              <li className='my-4 py-4 border-b border-pink-600 hover:bg-pink-600 hover:rounded'>Chat</li>
            </Link>
            <Link to="/game">
              <li className='my-4 py-4 border-b border-pink-600 hover:bg-pink-600 hover:rounded'>Game</li>  
              </Link>          
            <Link to="/blog">
              <li className='my-4 py-4 border-b border-pink-600 hover:bg-pink-600 hover:rounded'>Verbum Blog</li>    
              </Link>    
              <div className='my-4 py-4 border-b border-pink-600 hover:bg-pink-600 hover:rounded text-center'>
              <button
                 onClick={handleLogoutClick}
                 className="transition border-b-2 rounded-xxl border-slate-900  hover:scale-105 cursor-pointer">
                Log out
              </button>  
              </div>  
          </ul>
        </div>
     </div>


    return (
        <nav>
           <div className="fixed top-0 left-0 right-0 flex justify-between bg-[#191A26] bg-opacity-70 z-50 items-center text-white lg:py-12 xl:py-12 px-9 h-[4rem]">
                <div className="flex flex-1">
                <Link to="/home">
                <img src={Logo} alt="img-logo" className="w-6 h-6  sm:w-8 sm:h-8 md:w-15 md:h-15 lg:w-10 lg:h-10 xl:w-12 xl:h-12"/>
                </Link>
                </div>
                <div className="lg:flex md:hidden lg:flex-1 items-center justify-end text-center font-normal hidden">
                  <div className="flex-10">
                  <ul className="flex gap-16 mr-16 text-[18px]">
                  <Link to="/home">
                    <li className='hover:text-pink-600 font-semibold transition border-b-2   border-slate-900 hover:border-pink-600 hover:scale-105 cursor-pointer -mt-2'>Home</li>
                  </Link>
                <Link to="/chats">
                    <li className='hover:text-pink-600 font-semibold transition border-b-2   border-slate-900 hover:border-pink-600 hover:scale-105 cursor-pointer -mt-2'>Chat</li>
                  </Link>
                <Link to="/game">
                    <li className='hover:text-pink-600 transition border-b-2  border-slate-900 hover:border-pink-600 font-semibold  hover:scale-105 cursor-pointer -mt-2'>Game</li> 
                  </Link>           
                <Link to="/blog">
                     <li className='hover:text-pink-600 transition  border-b-2 border-slate-900 hover:border-pink-600 font-semibold  hover:scale-105 cursor-pointer -mt-2'>Blog</li> 
                </Link>          
              </ul>
                    </div>
              <button
              onClick={handleLogoutClick}
              className="flex gap-1 transition bg-[#101015] p-3 rounded-xl font-semibold h-12 w-20 hover:scale-105 cursor-pointer">
                <h3 className='text-white '>Log</h3>
                <span className='text-pink-600 '>out</span>
              </button>
                </div>
                <div>
                {click && content}
                </div>

                <button className='block z-40 lg:hidden transition' onClick={handleClick}>
                  {click ? <FaTimes/> : <CiMenuFries/>}  
                </button>
           </div>
 
        </nav>       
    )}
    
    export default Navbar ;