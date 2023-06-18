import CardImage from '../../assets/cardimage.png'
import CardImage2 from '../../assets/cardimage2.png'
import CardImage3 from '../../assets/cardimage3.png'
import CardImage4 from '../../assets/cardimage4.jpeg'
import CardImage5 from '../../assets/cardimage5.jpeg'
import CardImage6 from '../../assets/cardimage6.jpeg'
import CardImage7 from '../../assets/cardimage7.png'
import CardImage8 from '../../assets/cardimage8.png'
function Features() {
    return (
        <div className="features mt-[50px]">
            <div className="container_div">
                <div data-aos="fade-up" data-aos-delay="500" className="title_section">
                    <hr className="w-[100px] h-[6px] bg-[#4770ff]" />
                    <h1 className="text-[50px] text-bold text-[#3a395e] mt-4">
                        latest features
                    </h1>
                </div>
                <div className="grid_section mt-[40px]">
                    <div className="grid sm:grid-cols-4 gap-4 grid-cols-1">
                        <div data-aos="fade-up" data-aos-delay="600" className="card_div p-[20px] text-center">
                            <div className="image_section_top">
                                <img src={CardImage} className='w-100 h-100 object-cover' />
                            </div>
                            <div className='w-100 flex mt-[20px] justify-center items-center' >
                                <span className=' bg-[#eff4ff] d-block rounded-[15px] text-[#4770ff] p-[15px] text-bold'>
                                    conference
                                </span>
                            </div>
                            <div className='text_center_div text-center mt-[20px]'>
                                <h2 className='text-[20px] text-[#3a395e] '>SaaStock Local (Belgium)</h2>
                                <p className='text-[#3a395e] mt-[20px]'>First SaaStock Local Conference (Belgium)</p>
                            </div>
                            <div className='link mt-[30px]'>
                                <a href="#" className='link_color text-[#4770ff] text-bold mt-[30px]'>
                                    access now
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-delay="600" className="card_div p-[20px] text-center">
                            <div className="image_section_top">
                                <img src={CardImage2} className='w-100 h-100 object-cover' />
                            </div>
                            <div className='w-100 flex mt-[20px] justify-center items-center' >
                                <span className=' bg-[#eff4ff] d-block rounded-[15px] text-[#4770ff] p-[15px] text-bold'>
                                    podcast
                                </span>
                            </div>
                            <div className='text_center_div text-center mt-[20px]'>
                                <h2 className='text-[20px] text-[#3a395e] '>The SaaS Podcast</h2>
                                <p className='text-[#3a395e] mt-[20px]'>How A Bootstrapped Saas Hit $250k Arr In Its First Year?</p>



                            </div>
                            <div className='link mt-[30px]'>
                                <a href="#" className='link_color text-[#4770ff] text-bold mt-[30px]'>
                                    access now
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="700" className="card_div p-[20px] text-center">
                            <div className="image_section_top">
                                <img src={CardImage3} className='w-100 h-100 object-cover' />
                            </div>
                            <div className='w-100 flex mt-[20px] justify-center items-center' >
                                <span className=' bg-[#eff4ff] d-block rounded-[15px] text-[#4770ff] p-[15px] text-bold'>
                                    interview
                                </span>
                            </div>
                            <div className='text_center_div text-center mt-[20px]'>
                                <h2 className='text-[20px] text-[#3a395e] '>interview</h2>
                                <p className='text-[#3a395e] mt-[20px]'>Learn How To Write Outbound Sequences That Convert</p>



                            </div>
                            <div className='link mt-[30px]'>
                                <a href="#" className='link_color text-[#4770ff] text-bold mt-[30px]'>
                                    access now
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="650" className="card_div p-[20px] text-center">
                            <div className="image_section_top">
                                <img src={CardImage4} className='w-100 h-100 object-cover' />
                            </div>
                            <div className='w-100 flex mt-[20px] justify-center items-center' >
                                <span className=' bg-[#eff4ff] d-block rounded-[15px] text-[#4770ff] p-[15px] text-bold'>
                                    video
                                </span>
                            </div>
                            <div className='text_center_div text-center mt-[20px]'>
                                <h2 className='text-[20px] text-[#3a395e] '>We were offered $20 million</h2>
                                <p className='text-[#3a395e] mt-[20px]'>We Got Offered $20m At A $100m Valuation</p>

                            </div>
                            <div className='link mt-[30px]'>
                                <a href="#" className='link_color text-[#4770ff] text-bold mt-[30px]'>
                                    access now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-4 gap-4 grid-cols-1 sm:mt-[30px] mt-[2px]">
                        <div data-aos="fade-up" data-aos-delay="600" className="card_div p-[20px] text-center">
                            <div className="image_section_top">
                                <img src={CardImage5} className='w-100 h-100 object-cover' />
                            </div>
                            <div className='w-100 flex mt-[20px] justify-center items-center' >
                                <span className=' bg-[#eff4ff] d-block rounded-[15px] text-[#4770ff] p-[15px] text-bold'>
                                    video
                                </span>
                            </div>
                            <div className='text_center_div text-center mt-[20px]'>
                                <h2 className='text-[20px] text-[#3a395e] '>video</h2>
                                <p className='text-[#3a395e] mt-[20px]'>First Pitch In Front Of A Vc To Try To Raise $20,000,000 For Lemlist In 2 Weeks
                                </p>

                            </div>
                            <div className='link mt-[30px]'>
                                <a href="#" className='link_color text-[#4770ff] text-bold mt-[30px]'>
                                    access now
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-delay="6500" className="card_div p-[20px] text-center">
                            <div className="image_section_top">
                                <img src={CardImage6} className='w-100 h-100 object-cover' />
                            </div>
                            <div className='w-100 flex mt-[20px] justify-center items-center' >
                                <span className=' bg-[#eff4ff] d-block rounded-[15px] text-[#4770ff] p-[15px] text-bold'>
                                    interview

                                </span>
                            </div>
                            <div className='text_center_div text-center mt-[20px]'>
                                <h2 className='text-[20px] text-[#3a395e] '>interview
                                    BFM Good Morning
                                </h2>
                                <p className='text-[#3a395e] mt-[20px]'>There Are Other Criteria For Success Than Fundraising</p>



                            </div>
                            <div className='link mt-[30px]'>
                                <a href="#" className='link_color text-[#4770ff] text-bold mt-[30px]'>
                                    access now
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="700" className="card_div p-[20px] text-center">
                            <div className="image_section_top">
                                <img src={CardImage7} className='w-100 h-100 object-cover' />
                            </div>
                            <div className='w-100 flex mt-[20px] justify-center items-center' >
                                <span className=' bg-[#eff4ff] d-block rounded-[15px] text-[#4770ff] p-[15px] text-bold'>
                                    video
                                </span>
                            </div>
                            <div className='text_center_div text-center mt-[20px]'>
                                <h2 className='text-[20px] text-[#3a395e] '>NO to $30 million</h2>
                                <p className='text-[#3a395e] mt-[20px]'>I Said NO To A $30 Million Offer From An Investor</p>



                            </div>
                            <div className='link mt-[30px]'>
                                <a href="#" className='link_color text-[#4770ff] text-bold mt-[30px]'>
                                    access now
                                </a>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="700" className="card_div p-[20px] text-center">
                            <div className="image_section_top">
                                <img src={CardImage8} className='w-100 h-100 object-cover' />
                            </div>
                            <div className='w-100 flex mt-[20px] justify-center items-center' >
                                <span className=' bg-[#eff4ff] d-block rounded-[15px] text-[#4770ff] p-[15px] text-bold'>
                                    conference
                                </span>
                            </div>
                            <div className='text_center_div text-center mt-[20px]'>
                                <h2 className='text-[20px] text-[#3a395e] '>Touch Digital Summit
                                </h2>
                                <p className='text-[#3a395e] mt-[20px]'>Touch Digital Summit
                                </p>



                            </div>
                            <div className='link mt-[30px]'>
                                <a href="#" className='link_color text-[#4770ff] text-bold mt-[30px]'>
                                    access now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features