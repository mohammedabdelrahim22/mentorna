
import logo from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../../assets/header/image1.png'
import image2 from '../../assets/header/image2.png'
import './header.css'
import './header.css'
function Header() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <div className='header pt-5 bg-cover'>
                <nav className="bg-white p-5 rounded-[20px] container_div">
                    <div className="mx-auto px-4">
                        <div className="flex justify-between">

                            <div className="flex items-center">
                                <img className="h-8 mr-4" src={logo} alt="Logo" />
                            </div>
                            <div className="flex items-center justify-end sm:flex-nowrap flex-wrap-reverse">

                                <div className='flex w-[100px]  mt-2 flex-wrap ml-[10px]'>

                                    <Link to="/blogs" className=''>
                                        <button className='arrow_button_nav h-[50px]  text-[18px] rounded-[10px] flex p-[10px] justify-center items-center'>
                                            Articles
                                        </button>
                                    </Link>

                                </div>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='sections_hero mt-[50px] pt-[30px] p-5 container_div'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    <div className='left_text mt-[60px]'>
                        <h3 className='font-bold text-[40px] text-black line_hight'>
                            <span className='text-[#f5a34c] mr-2'>Unlock</span>
                            the Power  of Our Proven Framework
                        </h3>
                        <p className='font-semibold  text-black mt-[20px] text-[#100826] text_prag'>
                            Generate Over <span className='text-[#f5a34c]'>$500K</span> in Sales and Captivate <span className='text-[#f5a34c]'>$Millions</span>   of Potential Customers!”
                        </p>
                        <div className='buttons_section flex w-[100%] mt-[20px]'>
                            <Link to="/MultiStepForm">
                                <button className='arrow_button_nav h-[50px]  text-[18px] rounded-[10px] flex p-[20px] justify-center items-center'>
                                    Get started - Free 30 minutes call
                                </button>
                            </Link>
                        </div>
                        <div className='prands mt-[40px] pr-[10px]'>
                            <p className='prands_text'>SCHOLARSHIPS FEATURED BY:
                            </p>
                            <div className='grid sm:grid-cols-3 grid-cols-1 gap-2 mt-[30px]'>
                                <div className='text-center'>
                                    <h2 className="text-[50px] sm:text-[60px]  font-bold mb-2 sub_font text-black">+2M</h2>
                                    <p className="text-gray-500 text-[18px] ">Members Of Community </p>
                                </div>
                                <div className='text-center'>
                                    <h2 className="text-[50px] sm:text-[60px] font-bold mb-2 sub_font text-black">+50</h2>
                                    <p className="text-gray-500 text-[18px]   ">Funnels Built</p>
                                </div>
                                <div className='text-center'>
                                    <h2 className="text-[50px] sm:text-[60px] font-bold mb-2 sub_font text-black">+10M</h2>
                                    <p className="text-gray-500 text-[18px]  ">Amount Raised</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='image_right pt-[30px]'>
                        <div className='sm:w-[90%] w-[100%] shadow_box' >
                            <Carousel responsive={responsive} showDots={true} className=''
                                autoPlay
                                autoPlaySpeed={2000}
                                infinite
                            >
                                <div className=''>
                                    <div className='overflow-hidden'>

                                        <img src={image1} className='object-cover' alt="slider" />

                                    </div>
                                </div>
                                <div className=''>
                                    <div className='overflow-hidden ml-[-35px]'>
                                        <img src={image2} className='object-cover' alt="slider" />
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;