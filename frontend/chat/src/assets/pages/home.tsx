import Navbar from '../Componentes/generals/navbarhome';
import Logo from '../imgs/verbumlog.png';
import LogoHover from '../imgs/Group-3.png';
import ActiveSlider from '../Componentes/home/ActiveSlider';
import Footer from '../Componentes/generals/footerhome';
import { Link } from 'react-router-dom';

function Home() {
    return (
    <div>
        <div className='bg-[#101015] relative h-screen'>
            <Navbar/>
            <div className='grid xl:grid-cols-2 xl:gap-[10rem] pt-[7rem]'>
                 <div className='flex flex-col lg:ml-12 lg:mt-[5rem] text-center'>
                    <h1 className=" font-bold text-7xl lg:text-9xl text-white">Verbum</h1>
                        <Link to={'/pvp'}>
                    <button className='cursor-pointer bg-white flex justify-center h-1'>
                    </button>
                        </Link>
                    <h2 className='font-semibold text-pink-600 text-2xl lg:text-3xl hover:uppercase mt-2 lg:mt-6'>Now you can be everywhere!!</h2>
                    <h2 className='font-semibold text-gray-500 text-xl lg:text-2xl hover:uppercase hover:text-transparent mt-2 lg:mt-8'>Even without leaving a trace...</h2>
                </div>
                <div className=' lg:hidden lx:hidden grid justify-center'>
                <ActiveSlider/>
                </div>
                <div className='img-conts ml-15 mt-4 hidden xl:flex relative group'>
                    <img src={Logo} className='h-[32rem]' alt="img-logo"/>
                    <img src={LogoHover} 
                    alt="img-logo-hover" 
                    className="logo-hover-image absolute h-[32rem] inset-0 opacity-0 group-hover:opacity-100 transition-duration-500 ease-in-out"/>
                </div>
            </div>
            <div className='slider-cont bg-[#101015] justify-center py-2 mt-7 hidden lg:flex pb-28'>
                <ActiveSlider/>
            </div>
            <div className='bottom bg-[#101015] relative'>
                <Footer/>
            </div>
        </div>
    </div>
    );
}
            
export default Home;
