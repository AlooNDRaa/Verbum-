import Navbar from "../Componentes/generals/navbarhome";
import Footer from "../Componentes/generals/footerhome";
import AboutUs from "../Componentes/aboutUs/About-us";
import { Team } from "../Componentes/aboutUs/team";
import { Tools } from "../Componentes/aboutUs/tools";
import SimpleSlider from "../Componentes/aboutUs/news";

function Blog() {

  const card = [
    {
      id: 1,
      title: 'Chat',
      content: 'Now you can enjoy sending funny memes and emojis to your friends',
    },
    {
      id: 2,
      title: 'Security',
      content: 'More and more secure so you can use our app with peace of mind.',
    },
    {
      id: 3,
      title: 'Game',
      content: 'Now with a minigame so you can challenge your friends and save your score and records.',
    },
    {
      id:4,
      title:'Login',
      content:'Now you can recover your password safely and quickly.'
    }
  ];

  return (
    <div>
      <div className='bg-[#101015] grid relative '>
            <Navbar/>
            <div className="mt-9 ">
               <AboutUs/>
            </div>
            <div className="border-b lg:p-9 border-pink-800">
               <Team/>
            </div>
            <div className="border-b border-pink-800 p-12">
            <SimpleSlider cards={card} />
            </div>
            <Tools/>
            <Footer/>
      </div>
    </div>
  )
}

export default Blog;