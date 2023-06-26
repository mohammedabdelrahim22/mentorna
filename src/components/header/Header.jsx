
import logo from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom'
import zahir from '../../assets/header/zahir.webp'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../../assets/header/image1.png'
import image2 from '../../assets/header/image2.jpg'
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
                            <div className="flex items-center flex-warp">
                                <div className='flex w-[100px] justify-evenly mt-2 flex-wrap'>
                                    <Link to="/blogs">
                                        <button className='arrow_button_nav h-[50px]  text-[18px] rounded-[10px] flex p-[10px] justify-center items-center'>
                                            Articles
                                        </button>
                                    </Link>
                                    {/* <Link to="/MainCeo">
                                        <button className='arrow_button_nav h-[50px]  text-[18px] rounded-[10px] flex p-[10px] justify-center items-center'>
                                            Articles
                                        </button>
                                    </Link> */}
                                </div>
                                {/* <div className='flex w-[100px] justify-evenly mt-2 flex-wrap'>
                                    <span className='svg_icon'>
                                        <a href='https://t.me/mentorna'>
                                            <svg stroke="currentColor" fill="#f5a34c" stroke-width="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
                                        </a>
                                    </span>
                                    <span className='svg_icon'>
                                        <a href='https://www.facebook.com/mentorna'>
                                            <svg stroke="currentColor" fill="#f5a34c" stroke-width="0" viewBox="0 0 320 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                                        </a>
                                    </span>
                                    <span className='svg_icon'>
                                        <a href='https://www.linkedin.com/company/mentorna/'>
                                            <svg stroke="currentColor" fill="#f5a34c" stroke-width="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                                        </a>
                                    </span>

                                </div> */}
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
                    <div className='image_right'>
                        <div className='sm:w-[90%] w-[100%] shadow_box' >
                            <Carousel responsive={responsive} showDots={true} className='' transitionDuration={60}
                            >
                                <div className=''>
                                    <div className='overflow-hidden'>

                                        <img src={image1} className='object-cover' alt="slider" />

                                    </div>
                                </div>
                                <div className=''>
                                    <div className='overflow-hidden  '>
                                        <img src={image1} className='object-cover' alt="slider" />
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