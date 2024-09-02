import { Link } from 'react-router-dom'

export function Error404() {
    return (
        <div>
        <div className="bg-[#101015] grid h-screen text-white">
           <div className="flex mx-2 lg:mx-0 flex-col lg:flex-row items-center justify-center">
            <div>
                <svg className="w-[100%] md:w-[25rem] lg:w-[30rem]" viewBox="0 0 858 790" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M183.749 115.923C228.654 68.7827 273.633 68.7827 291.059 68.7827L335.084 598.422C317.474 620.606 281.887 644.638 266.295 653.881C198.361 697.698 111.642 706.729 61.793 711.92L59.9304 712.114C-22.6155 720.72 0.313983 698.249 24.1605 662.2C51.6758 620.605 53.5584 609.514 70.9365 576.238C92.6591 534.643 103.955 467.167 109.458 426.497C111.292 394.146 114.961 323.443 114.961 298.94C114.961 237.934 117.713 185.248 183.749 115.923Z" 
                    fill="#D9D9D9" stroke="#343434" stroke-width="4" className="logo-verbum-1"></path>
                    <path d="M635.001 99.2858C585.473 32.734 508.43 -1.15768 447.897 2.23152C348.841 7.77748 307.568 54.9181 280.053 79.875C252.538 104.832 183.75 221.297 205.762 343.308C233.277 495.822 260.792 512.46 337.835 601.195C414.878 689.931 557.041 743.541 618.492 759.255C661.867 770.346 802.844 788.834 830.36 786.985C871.633 784.211 852.372 753.709 844.117 745.39L824.857 723.206C769.826 651.108 753.317 601.195 734.056 556.828C705.644 491.38 695.535 417.254 695.535 387.676V285.075C695.535 210.205 667.187 142.536 635.001 99.2858Z"
                    fill="white" stroke="#343434" stroke-width="4" className="logo-verbum-2"></path>
                    <ellipse cx="324.079" cy="221.296" rx="63.2852" ry="91.5083" fill="#343434" className="logo-verbum-3"></ellipse>
                    <ellipse cx="467.159" cy="221.296" rx="63.2852" ry="91.5083" fill="#343434" className="logo-verbum-4"></ellipse>
                </svg>
            </div>
             <div className="flex flex-col items-center gap-8">
                 <h1 className='lg:text-[5rem] md:tex-[2.8rem] text-[200%] mt-4 lg:mt-0'>
                     Oops! Page not found...
                 </h1>
                <Link to='/home'>
                     <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out bg-pink-800 lg:w-[20rem] w-[100%] px-[4rem] lg:p-0 rounded-full h-14 text-center hover:bg-pink-600 hover:text-[#000] font-bold'>
                          Please, Go back
                    </button>
                 </Link>
             </div>
           </div>
        </div>
        </div>
    )
}