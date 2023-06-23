
import Slider from "react-slick"
import { slider_iamges } from '../../constans/constans'
import './spot.css'
import { Link } from "react-router-dom";
const Spot = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,

                    dots: false
                },
            },
        ],
    };
    return (
        <div className="spot mt-[50px]" id="spot">

            <div className="head_text w-full">
                <div className="text_inside w-full text-center" data-aos="fade-up">
                    <h4 className="main_color sub_font font-bold">
                        Built For Your Niche
                    </h4>
                    <h2 className="sub_font font-bold text-[50px] text-black">
                        Spot-On Branding:
                        <br />
                        Aligning Your Audience And Their Values
                    </h2>
                </div>
            </div>
            <div className="bottom_side  pt-[50px]  mt-[40px] bg-white sm:bg-[#F8F8F8]">
                <div className="container_div">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="right_side pt-[30px] hidden sm:block">
                            <h3 className="text-black sub_font text-[50px] pr-[20px] font-bold ">
                                Personal Branding
                            </h3>
                            <p className="text-[16px] text-[##000000] opacity-75 pt-4">
                                Crafting a personal brand can be an incredibly powerful tool for forging connections with your audience, profound sense of authenticity and personality that truly resonates with people. This personal touch not only fosters trust and loyalty but also creates a genuine connection that goes beyond traditional marketing strategies.
                            </p>
                            <Link to="/MultiStepForm"><button className="main_background p-2 rounded-[16px] w-[200px] lg:mt-[2vh] text-white font-bold sub_font text-[20px] flex justify-evenly">Get started<span><svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title></title><g id="Complete"><g id="arrow-up-right"><g><polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline><line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line></g></g></g></svg></span></button></Link>
                        </div>
                        <div className="left_side">
                            <div>
                                <Slider {...settings}

                                    className="p-5 relative z-10">
                                    {slider_iamges.map((slid) => {
                                        return (
                                            <div className="slider_card bg-[#fff] p-5 rounded-[10px] h-[270px]" key={slid.id}>
                                                <div className="image_container w-[70px] h-[70px] overflow-hidden rounded-[50%]">
                                                    <img src={slid.photo} alt="mapingimage" />
                                                </div>
                                                <div className="text_container pt-4">
                                                    <h2 className="sub_font text-black font-bold text-[19px]">
                                                        {slid.title}
                                                    </h2>
                                                    <p className="sub_font text-[17px] text-[#ddd] pt-2">
                                                        {slid.desc1}
                                                    </p>
                                                    <h3 className="text-[18px] font-bold main_color sub_font pt-2">
                                                        {slid.desc2}
                                                    </h3>
                                                    <h3 className="text-[18px] font-bold text-black sub_font pt-2">
                                                        {slid.desc3}
                                                    </h3>
                                                </div>
                                            </div>

                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>

                        <div className="right_side pt-[30px] block sm:hidden">
                            <h3 className="text-black sub_font text-[30px] sm:text-[50px] font-bold ">
                                Personal Branding
                            </h3>
                            <p className="text-[16px] text-[##000000] opacity-75 pt-4">
                                Crafting a personal brand can be an incredibly powerful tool for forging connections with your audience, profound sense of authenticity and personality that truly resonates with people. This personal touch not only fosters trust and loyalty but also creates a genuine connection that goes beyond traditional marketing strategies.
                            </p>
                            <Link to="/MultiStepForm"><button className="main_background p-2 rounded-[16px] w-[200px] mt-[2vh]  text-white font-bold sub_font text-[20px] flex justify-evenly">Get started<span><svg width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title></title><g id="Complete"><g id="arrow-up-right"><g><polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline><line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line></g></g></g></svg></span></button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spot
