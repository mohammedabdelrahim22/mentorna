import './brand.css'
import { Cards } from "../../constans/constans"
import { Link } from 'react-router-dom'
import { Animated } from "react-animated-css"
import { useState, useEffect } from 'react';
import 'animate.css';
function Brand() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('prand');
            if (section) {
                const rect = section.getBoundingClientRect();
                const isSectionVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
                setIsVisible(isSectionVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='Brand' id="prand">
            <div className="flex justify-center w-full">
                <div className="grid grid_width grid-cols-1 sm:grid-cols-2 md:grid-cols-2 items-center lg:grid-cols-2  sm:w-3/4 lg:w-3/4  md:w-full bg-[#F2F2F2] sm:bg-[#F2F2F2]  brand_padding lg:bg-white pt-[122px] sm:pt-[100px] p-5">
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={isVisible} animationInDuration={2000}>
                        <div className="w-3/5 md:w-2/5 relative ">
                            <h3 className="after_card main_color text-4xl md:text-5xl recolta relative ">
                                Tailored
                                <br />
                                Tactics
                            </h3>
                        </div>
                    </Animated>
                    <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={isVisible} animationInDuration={2000}>
                        <div className="mt-[30px] sm:mt[1px] lg:mt-[0px] md:mt-[1px]">
                            <h3 className="text-black text-3xl md:text-4xl gothammedum ">
                                Customized Marketing And Strategic <span className="main_color">
                                    Management
                                </span>
                                <br />
                                Start
                                <span>
                                    <svg width="50px" height="50px" className='inline-block' viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.432"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title></title>
                                            <g id="Complete">
                                                <g id="arrow-right">
                                                    <g>
                                                        <polyline data-name="Right" fill="none" id="Right-2" points="16.4 7 21.5 12 16.4 17" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.504"></polyline>
                                                        <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.504" x1="2.5" x2="14" y1="12" y2="12"></line>
                                                        <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.504" x1="14" x2="19.2" y1="12" y2="12"></line>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                                Finish.
                            </h3>
                        </div>
                    </Animated>
                </div>

            </div>
            <div className='container_div'>

                <div className='cards mt-[40px]'>
                    <div className="mt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={isVisible} animationInDuration={2000} animateOnce={true}>
                                <div className="p-4 mt-[50px] text-center sm:text-left">
                                    <p className='text-[30px] main_color sub_font font-bold'>Roadmap</p>
                                    <h3 className='text-[40px] text-black sub_font mt-[20px]'>We Build A Brand That Resonates With Your Niche</h3>
                                    <Link to='/MultiStepForm' className=' hidden sm:block'>
                                        <button className="main_background p-2 rounded-[16px] w-[200px] mt-5 text-white font-bold sub_font text-[20px] flex justify-evenly">Get started<span><svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title></title><g id="Complete"><g id="arrow-up-right"><g><polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline><line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line></g></g></g></svg></span></button>
                                    </Link>
                                </div>
                            </Animated>
                            <div className="">
                                <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={isVisible} animationInDuration={2000} animateOnce={true}>
                                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {Cards.map((card) => {
                                            return (
                                                <div className="bg-gray-300 rounded-r-2xl rounded-bl-xl" key={card.id}>
                                                    <div className="flex items-center justify-between">
                                                        <div className="p-2">
                                                            <span className="bg-black w-12 h-12 rounded-full flex justify-center items-center text-white">
                                                                <h5 className="sub_font">{card.number}</h5>
                                                            </span>
                                                        </div>
                                                        <div className="text-center pr-2">
                                                            <span className="main_background w-12 h-12 rounded-full flex justify-center items-center text-white">
                                                                <h5 className="sub_font flex justify-center">

                                                                    <img className='object-cover w-[90%] ' src={card.icon} alt="mapingimage" />
                                                                </h5>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <h3 className="sub_font p-2 text-black">{card.title}</h3>
                                                    <p className="text-sm p-2 text-[#000000]">{card.desc}</p>
                                                </div>

                                            );
                                        })}
                                    </div>
                                </Animated>
                            </div>

                        </div>
                    </div>
                    <div className='text-center w-full  block sm:hidden flex justify-center'>
                        <Link to='/MultiStepForm' className=''>
                            <button className="main_background p-2 rounded-[16px] w-[200px] mt-5 text-white font-bold sub_font text-[20px] flex justify-evenly">Get started<span><svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title></title><g id="Complete"><g id="arrow-up-right"><g><polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline><line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line></g></g></g></svg></span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand
