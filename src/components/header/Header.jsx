import { useState } from 'react'
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import logo from '../../assets/logo/logo.png';
import head from '../../assets/header/head.jpg'
import { Link } from 'react-router-dom'

import './header.css'

Modal.setAppElement('#root');
function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div>
            <div>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={{ content: { top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%', transform: 'translate(-50%, -50%)', maxWidth: '90%', maxHeight: '90vh' } }}>
                    <ReactPlayer url="" playing={true} />
                </Modal>
            </div>

            <div className='header min-h-[85vh] sm:min-h-[88vh] pt-5 bg-cover'>

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
                <div className='vedio_show flex relative w-[100%] p-6 sm:p-2  min-h-[14vh] sm:min-h-[40vh] md:min-h-[40vh] justify-center'>
                    <div className='img_show  w-[100%]   sm:w-[55%]  mt-[50px] sm:mt-[-6%]'>
                        <img src={head} alt="vedio" className='object-center object-cover  w-100 h-100' />
                    </div>
                    <div className='vedio relative'>
                        <button className="play-button w-[60px] h-[60px] rounded-[50%] flex justify-center items-center absolute top-[15vh] right-[35vw] sm:top-[2vh] sm:right-[16vh]   md:top-[6vh] md:right-[18vw]  lg:top-[11vh] lg:right-[23vw]" onClick={() => setModalIsOpen(true)}>
                            <svg width="36" height="36" viewBox="0 0 24 24">
                                <path d="M8,5.14V19.14L19,12.14L8,5.14Z" fill="orange" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='header_text w-[100%] mt-4 h-[400px] sm:h-[400px] md:h-[300px]'>
                    <div className='text_inside text-center'>
                        <h1 className='text-[35px] sm:text-[42px] text-center text-black leading-[3.6rem] recolta'>
                            <span className='after relative mr-2'> Boost</span>
                            Your Business With Our Tailored <br className="br_head" />

                            Community Growth Strategies.
                        </h1>
                        <div className="flex w-[100%] justify-center">
                            <Link to='/MultiStepForm'>
                                <button className='btn main_background p-2 rounded-[16px] w-[200px] mt-5 text-white font-bold sub_font text-[20px] flex justify-evenly'>
                                    Get started
                                    <span>
                                        <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <title />
                                            <g id="Complete">

                                                <g id="arrow-up-right">
                                                    <g>
                                                        <polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

                                                        <line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9" />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full p-0 sm:p-4  min-h-[26vh] sm:h-[12vh] md:h-[20vh] gray_div relative gap-2'>
                <div className='black_box relative w-full'>
                    <div className='div_cols relative flex justify-center'>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2  mt-[30px] sm:mt-[1px] lg:grid-cols-3 xl:grid-cols-3 w-full sm:w-[75%] md:w-[50%] absolute top-[-12vh] back_black">

                            <div className="sm:p-6 p-4  card_small relative bg-[#222222] sm:bg-black text-left sm:text-center">
                                <h2 className="text-[50px]   font-bold mb-2 sub_font">+2M</h2>
                                <p className="text-gray-500 text-[20px] ">Members Of Community </p>
                            </div>
                            <div className="sm:p-6 p-4 card bg-[#222222]  relative sm:bg-black text-left sm:text-center">
                                <h2 className="text-[50px] font-bold mb-2 sub_font">50</h2>
                                <p className="text-gray-500 text-[20px] ">Funnels Built</p>
                            </div>
                            <div className="sm:p-6 p-4 card sm:bg-black relative flex sm:block card_content items-center text-left sm:text-center ">
                                <h2 className="text-[50px]  font-bold mb-2 sub_font pr-6">+10M</h2>
                                <p className="text-gray-500 text-[20px]">Amount
                                    Raised</p>
                                {/* <br className='block sm:hidden' /> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;