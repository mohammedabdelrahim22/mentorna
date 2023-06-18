// import Avatar from '../../assets/avatar.png'
import Ahmed from '../../assets/ahmed.png'
import { Link } from 'react-router-dom'
function HeroSwction() {
    return (
        <div className='hero_section' id="herro">
            <div className='pl-[22px] pr-[22px]'>
                <hr className='w-[120px] h-[6px] bg-[#4770ff]' />
                <div className="sm:flex items-center">
                    <div className="text_left sm:w-[50%]" data-aos="fade-right" data-aos-delay="600">
                        <h1 className="text-bold text-[66px] text-black mt-[10px]">
                            Ahmed Ezzat,<br />
                            <span className="text-[#4770ff]">
                                Founder of Mentorna
                            </span>
                        </h1>
                        <p className="pragraph mt-4">
                            Founder of Mentorna
                            <br />
                            <br />
                            On a mission to help<span className="text-black">100 founders generate traction and growth to their startups/business by 2024
                            </span>
                            <br />
                            <br />
                            In 1.5 years, we helped founders generating over <span className="text-black">  $5 million in ARR</span>

                        </p>


                        <div className='button-Section'>
                            <Link to="/MultiStepForm" className="button_class p-[10px] bg-[#4770ff] text-[20px] w-[170px] h-[60px] rounded-[17px] text-white text-bold flex justify-center items-center">Contact Me</Link>
                        </div>
                    </div>


                    <div className="image_right" data-aos="fade-left" data-aos-delay="600" >
                        <img src={Ahmed} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSwction